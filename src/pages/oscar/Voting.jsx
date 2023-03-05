import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from '../../app/axios';

import { useSelector, useDispatch } from "react-redux";
import { vote } from "../../features/voting/votingSlice";
import { setUser } from '../../features/user/userSlice';
import { showScreen, hideScreen } from '../../features/loading/loadingSlice';

import VotingOption from "../../components/VotingOption";
import LoadingScreen from '../../components/LoadingScreen';

import '../../styles/oscar/Voting.css';

function Voting() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector(state => state.user.value);
  const voting = useSelector((state) => state.voting.value);

  const [ oscar, setOscar ] = useState([]);
  const [ currentData, setCurrentData ] = useState({});
  
  useEffect(() => {
    const getUser = async () => {
      const { data } = await axios.get('/sessaoAtiva');
      if (!data) {
        navigate('/');
      } else {
        dispatch(setUser(data));
      }
    };

    const getCategories = async () => {
      const categories = await axios.get('/categoriasOscar');
      
      const oscar = [];
      for (let category of categories.data) {
        const nominees = await axios.get('/indicadosOscar', {
          params: {
            category: category.id,
          },
        });

        oscar.push({
          category: category,
          nominees: nominees.data
        });
      }
      setOscar(oscar);
      setCurrentData(oscar[0]);
    };
    if (!user)
      getUser();
    if (!oscar.length)
      getCategories();
  }, [oscar]);

  if (oscar.length) {
    const currentCategory = currentData.category;
    const nominees = currentData.nominees;
  
    const chosen = voting.find(el => el.category === currentCategory.id);
    const currentIndex = oscar.findIndex(el => el === currentData);

    return (
      <div className="votingOscar">
        <header className="votingHeader">
          <h1>Cineclube.</h1>
  
          <section className="categoryTitleConteiner">
            <h2>{ currentCategory.category }</h2>
            <p>Vote para { currentCategory.category } de 2022</p>
          </section>
  
          <img className="votingHeaderBackground" src="https://raw.githubusercontent.com/deisantix/cine/main/public/eeaao-background.png" />
        </header>
  
        <main className="votingMain">
          <section className="votingNominated">
            {nominees.map(el => (
              <VotingOption 
                key={el.id} 
                nominee={el}
                className={
                  (chosen && el.id === chosen.nominee)
                    ? 'chosen'
                    : ''
                }
                onClick={() => {
                  const voteObject = {
                    user: user,
                    nominee: el['id'],
                    category: el['CategoryOscarId'],
                  };
                  dispatch(vote(voteObject));
                }} 
              />
            ))}
          </section>
  
          <div className="votingOptions">
            <button onClick={() => {
              const previousCategory = currentIndex - 1;
              if (oscar[previousCategory])
                setCurrentData(oscar[previousCategory]);
            }}>
              <span>Anterior</span>
              <span>{ 
                (currentCategory.previousCategory) 
                  ? currentCategory.previousCategory.toUpperCase()
                  : ''
              }</span>
                  
            </button>
  
            <div className="categoryNumber">
              <span>
                { currentIndex + 1 } de { oscar.length }
              </span>
              <span>categorias</span>
            </div>
  
            <button onClick={async () => {
              const nextCategoryIndex = currentIndex + 1;
              if (oscar[nextCategoryIndex]) {
                setCurrentData(oscar[nextCategoryIndex]);

              } else {
                dispatch(showScreen());

                try {
                  await axios.post('/apostarOscar', {
                    votes: voting
                  });
                  navigate('/');
                  dispatch()
                } catch (error) {
                  console.log(error);
                } finally {
                  dispatch(hideScreen());
                }
              }
            }}>
              <span>Próximo</span>
              <span>{ 
                (currentCategory.nextCategory)
                  ? currentCategory.nextCategory.toUpperCase() 
                  : ''
              }</span>
            </button>
          </div>
        </main>
      </div>
    );
  } else {
    return (
      <LoadingScreen />
    );
  }
}

export default Voting;