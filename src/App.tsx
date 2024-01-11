import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

function App() {
  return (
    <div className="App">
      <h1>Hi, It's a React App!</h1>
      <p>It works perfectly indeed.</p>
      <Person name="Mostafa" age="31" />
      <Person name="Firoozeh" age="32" />
      <Person name="Maysam" age="22" />
    </div>
  );
}

export default App;
