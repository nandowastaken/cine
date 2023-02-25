import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { vote } from "../../features/voting/votingSlice";

import '../../styles/oscar/Voting.css';

function Voting() {
  const data = useLoaderData();

  const votes = useSelector((state) => state.voting.value);
  console.log(votes);
  
  const [ categoryIndex, setCategoryIndex ] = useState(0);
  const currentData = data[categoryIndex];
  
  const currentCategory = currentData.category;
  const nominees = currentData.nominees;
  
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
            <span key={el.id}>
              {el.nominated}, {el.film}
            </span>
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