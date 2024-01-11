import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

function App() {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Mostafa", age: 31 },
      { name: "Firoozeh", age: 32 },
      { name: "Maysam", age: 22 },
    ],
    otherState: "This is an other state"
  });

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: "Mostafa Saadatnia", age: 31 },
        { name: "Firoozeh", age: 32 },
        { name: "Maysam", age: 23 },
      ],
      otherState: personsState.otherState
    })
  }
  return (
    <div className="App">
      <h1>Hi, It's a React App!</h1>
      <p>It works perfectly indeed.</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>I like React!</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );
}

export default App;
