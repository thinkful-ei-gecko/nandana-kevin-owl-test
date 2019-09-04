import React from 'react';
import './Participant.css';

function Participant(props) {
  return (
    <div className="Participant">
      <img src={props.avatar} alt="Avatar" />
      <h2>{props.name}</h2>
      <span>On Stage: {`${props.onStage}`}</span><br/>
      <span>In Session: {`${props.inSession}`}</span>
    </div>
  )
}

export default Participant;