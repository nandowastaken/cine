import React from "react";

import '../styles/oscar/VotingOption.css';

function VotingOption(props) {
  const getText = () => {
    const category = props.nominee.CategoryOscar.category;

    const nominated= props.nominee.nominated.trim();
    const film = props.nominee.film.trim();
    
    switch (category) {
      case 'melhor filme':
      case 'melhor design de produção':
      case 'melhor cabelo & maquiagem':
      case 'melhor som':
      case 'melhores efeitos visuais':
      case 'melhor animação em longa metragem':
      case 'melhor animação em curta metragem':
      case 'melhor curta metragem em live-action':
      case 'melhor documentário em longa metragem':
      case 'melhor documentário em curta metragem':
        return nominated;
      
      case 'melhor canção original':
        return `${nominated} (de ${film})`;
      
      case 'melhor filme internacional':
        return `${film} (${nominated})`;
      
      default:
        return `${nominated}, por ${film}`;
    }
  }


  return (
    <div onClick={props.onClick} className={`votingOption ${props.className}`}>
      <div className="filmPosterConteiner">
        <img className="filmPoster" src={props.nominee.image} />
      </div>

      <div className="filmTitle">
        <span>{ getText() }</span>
      </div>
    </div>
  );
}

export default VotingOption;