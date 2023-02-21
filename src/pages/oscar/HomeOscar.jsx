import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../../styles/oscar/HomeOscar.css";
import informacoesOscar from '../../assets/oscar/info-oscar.json';

function HomeOscar() {
  const infoOscar = informacoesOscar.infoOscar;
  
  const [ textIndex, setTextIndex ] = useState(0);

  const getText = () => {
    const text = infoOscar[textIndex];

    if (text instanceof Array) {
      const items = text[1].map((el, i) => (
        <li key={i} >{ el }</li>
      ));
      return (
        <div>
          <p>{ text[0] }</p>
          <ul>{ items }</ul>
        </div>
      );
    } else {
      return (
        <div>
          <p>{ infoOscar[textIndex] }</p>
        </div>
      );
    }
  };

  return (
    <div className="homeOscarConteiner">
      <div className="homeOscar">
        <header className="headerHomeOscar">
          Cineclube.
        </header>

        <i className="material-icons-outlined"
          onClick={() => {
            const previousIndex = textIndex - 1;
            if (!infoOscar[previousIndex])
              return setTextIndex(infoOscar.length - 1);
            setTextIndex(previousIndex);
          }}>
          arrow_back_ios
        </i>

        <section className="conteinerInfo">
          { getText() }
          <Link className="goToVotingButton" to="/oscar/voting">Ir para a votação</Link>
        </section>

        <i className="material-icons-outlined"
          onClick={() => {
            const nextIndex = textIndex + 1;
            if (!infoOscar[nextIndex])
              return setTextIndex(0);
            setTextIndex(nextIndex);
          }}>
          arrow_forward_ios
        </i>
      </div>

      <img 
        className="oscarBackground" 
        src="https://raw.githubusercontent.com/deisantix/cine/main/public/tapa-will-smith.png" 
      />
    </div>
  );
}

export default HomeOscar;