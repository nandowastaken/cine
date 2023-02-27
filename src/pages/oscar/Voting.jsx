import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { vote } from "../../features/voting/votingSlice";

import VotingOption from "../../components/VotingOption";

import '../../styles/oscar/Voting.css';

function Voting() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.voting.value);

  const data = useLoaderData();
  
  const [ categoryIndex, setCategoryIndex ] = useState(0);
  const currentData = data[categoryIndex];
  
  const currentCategory = currentData.category;
  const nominees = currentData.nominees;

  const chosen = state.find(el => el.category === currentCategory.id);
  
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
            if (data[previousCategory])
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
            <span>{ categoryIndex + 1 } de { data.length }</span>
            <span>categorias</span>
          </div>

          <button onClick={() => {
            const nextCategoryIndex = categoryIndex + 1;
            if (data[nextCategoryIndex]) {
              setCategoryIndex(nextCategoryIndex);
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