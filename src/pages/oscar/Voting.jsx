import React from "react";

import '../../styles/oscar/Voting.css';

function Voting() {
  return (
    <div className="votingOscar">
      <header className="votingHeader">
        <h1>Cineclube.</h1>

        <section className="categoryTitleConteiner">
          <h2>Melhor filme</h2>
          <p>Vote para melhor filme de 2022</p>
        </section>

        <img className="votingHeaderBackground" src="https://raw.githubusercontent.com/deisantix/cine/main/public/eeaao-background.png" />
      </header>

      <main className="votingMain">
        <div className="votingOptions">
          <button>
            <span>Anterior</span>
            <span>Melhor filme</span>
          </button>

          <div className="categoryNumber">
            <span>1 de 11</span>
            <span>categorias</span>
          </div>

          <button>
            <span>Próximo</span>
            <span>Ator coadjuvante</span>
          </button>
        </div>
      </main>
    </div>
  );
}

export default Voting;