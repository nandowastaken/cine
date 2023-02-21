import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

import '../../styles/oscar/Voting.css';

function Voting() {
  const categories = useLoaderData();

  const [ categoryIndex, setCategoryIndex ] = useState(0);
  const actualCategory = categories[categoryIndex];

  return (
    <div className="votingOscar">
      <header className="votingHeader">
        <h1>Cineclube.</h1>

        <section className="categoryTitleConteiner">
          <h2>{ actualCategory.category }</h2>
          <p>Vote para { actualCategory.category } de 2022</p>
        </section>

        <img className="votingHeaderBackground" src="https://raw.githubusercontent.com/deisantix/cine/main/public/eeaao-background.png" />
      </header>

      <main className="votingMain">
        <div className="votingOptions">
          <button onClick={() => {
            const previousCategory = categoryIndex - 1;
            if (categories[previousCategory])
              setCategoryIndex(previousCategory);
          }}>
            <span>Anterior</span>
            <span>{ 
              (actualCategory.previousCategory) 
                ? actualCategory.previousCategory.toUpperCase()
                : ''
            }</span>
                
          </button>

          <div className="categoryNumber">
            <span>{ categoryIndex + 1 } de { categories.length }</span>
            <span>categorias</span>
          </div>

          <button onClick={() => {
            const nextCategory = categoryIndex + 1;
            if (categories[nextCategory])
              setCategoryIndex(nextCategory);
          }}>
            <span>Próximo</span>
            <span>{ 
              (actualCategory.nextCategory)
                ? actualCategory.nextCategory.toUpperCase() 
                : ''
            }</span>
          </button>
        </div>
      </main>
    </div>
  );
}

export default Voting;