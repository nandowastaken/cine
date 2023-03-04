import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import axios from '../../app/axios';

import { useSelector, useDispatch } from "react-redux";
import { vote } from "../../features/voting/votingSlice";

import VotingOption from "../../components/VotingOption";

import '../../styles/oscar/Voting.css';

function Voting() {
  const navigate = useNavigate();
  const data = useLoaderData();
  const user = data.user;
  const oscar = data.oscar;

  const dispatch = useDispatch();
  const state = useSelector((state) => state.voting.value);
  
  const [ categoryIndex, setCategoryIndex ] = useState(0);
  const currentData = oscar[categoryIndex];
  
  const currentCategory = currentData.category;
  const nominees = currentData.nominees;

  const chosen = state.find(el => el.category === currentCategory.id);

  useEffect(() => {
    if (!user) navigate('/');
  }, []);
  
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
                (chosen && el.id === chosen.nominated)
                  ? 'chosen'
                  : ''
              }
              onClick={() => {
                const voteObject = {
                  nominated: el['id'],
                  category: el['CategoryOscarId'],
                };
                dispatch(vote(voteObject));
              }} 
            />
          ))}
        </section>

        <div className="votingOptions">
          <button onClick={() => {
            const previousCategory = categoryIndex - 1;
            if (oscar[previousCategory])
              setCategoryIndex(previousCategory);
          }}>
            <span>Anterior</span>
            <span>{ 
              (currentCategory.previousCategory) 
                ? currentCategory.previousCategory.toUpperCase()
                : ''
            }</span>
                
          </button>

          <div className="categoryNumber">
            <span>{ categoryIndex + 1 } de { oscar.length }</span>
            <span>categorias</span>
          </div>

          <button onClick={async () => {
            const nextCategoryIndex = categoryIndex + 1;
            if (oscar[nextCategoryIndex]) {
              setCategoryIndex(nextCategoryIndex);
            } else {
              for (let voted of state) {
                await axios.post('/apostarOscar', {
                  user: user,
                  nominee: voted.nominated,
                  category: voted.category
                });
              }
              navigate('/');
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
}

export default Voting;