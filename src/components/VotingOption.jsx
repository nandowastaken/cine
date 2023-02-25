import React from "react";

import '../styles/oscar/VotingOption.css';

function VotingOption(props) {
  return (
    <div onClick={props.onClick} className={`votingOption ${props.className}`}>
      <div>
        <img className="filmPoster" src={props.nominee.image} />
      </div>

      <div className="filmTitle">
        <span>{ props.nominee.nominated }</span>
      </div>
    </div>
  );
}

export default VotingOption;