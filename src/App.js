import React from 'react';
import './App.css';
import List from './List';
import Stage from './Stage';

function App(props) {
  const participants = props.store.participants;
  const participantsOnStage =participants.filter(p => p.onStage);
  console.log(participantsOnStage);
  return (
    <div className="App">
      <List participants={participants}/>
      <Stage participantsOnStage={participantsOnStage}/>
    </div>
  );
}

export default App;
