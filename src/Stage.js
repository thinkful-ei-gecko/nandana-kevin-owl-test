import React from 'react';
import './Stage.css';

function Stage(props) {
  return (
    <div className="Stage">
      <h1>On Stage</h1>
      {
        props.participantsOnStage.map(p => 
        <div className= "stage-Participant">
           
         <img src={p.avatar} alt="avatar"/>
        <h2>{p.name}</h2> 
        </div>                                                                                                       
        )
      }
    </div>
  )
}

export default Stage;