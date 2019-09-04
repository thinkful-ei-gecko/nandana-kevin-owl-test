import React from 'react';
import './App.css';
import List from './List';

function App(props) {
  return (
    <div className="App">
      <List participants={props.store.participants}/>
    </div>
  );
}

export default App;
