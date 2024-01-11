import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

function App() {
  const [state, setState] = useState({
    persons: [
      { name: "Mostafa", age: 31 },
      { name: "Firoozeh", age: 32 },
      { name: "Maysam", age: 22 },
    ]
  });
  return (
    <div className="App">
      <h1>Hi, It's a React App!</h1>
      <p>It works perfectly indeed.</p>
      <Person name={state.persons[0].name} age={state.persons[0].age} />
      <Person name={state.persons[1].name} age={state.persons[1].age}>I like React!</Person>
      <Person name={state.persons[2].name} age={state.persons[2].age} />
    </div>
  );
}

export default App;
