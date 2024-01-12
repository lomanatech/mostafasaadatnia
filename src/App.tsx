import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

function App() {
  const [personsState, setPersonsState] = useState({
    persons: [
      { id: 'sa123-321x', name: "Mostafa", age: 31 },
      { id: '3fk4-k92sd', name: "Firoozeh", age: 32 },
      { id: '093fk-dfh32', name: "Maysam", age: 22 },
    ],
    otherState: "This is an other state"
  });

  const [showPersonsState, setShowPersonsState] = useState(false);

  const togglePersonsHander = () => {
    const doesShow = showPersonsState;
    setShowPersonsState(!doesShow);
  }

  const switchNameHandler = (newName: string) => {
    setPersonsState({
      persons: [
        { id: 'sa123-321x', name: newName, age: 31 },
        { id: '3fk4-k92sd', name: "Firoozeh", age: 32 },
        { id: '093fk-dfh32', name: "Maysam", age: 22 },
      ],
      otherState: personsState.otherState
    });
  }

  const nameChangedHandler = (event: any) => {
    setPersonsState({
      persons: [
        { id: 'sa123-321x', name: "Mostafa", age: 31 },
        { id: '3fk4-k92sd', name: event.target.value, age: 32 },
        { id: '093fk-dfh32', name: "Maysam", age: 22 },
      ],
      otherState: personsState.otherState
    });
  }

  const buttonStyle = {
    backgroundColor: "#eee",
    padding: "8px",
    border: "1px solid #102eee",
    font: "inherit",
    cursor: "pointer"
  };

  let persons: (JSX.Element | null) = null;
  if (showPersonsState === true) {
    persons = (
      <div>
        {
          personsState.persons.map((person, index) => {
            return <Person name={person.name} age={person.age} key={person.id} changed={nameChangedHandler} />
          })
        }
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Hi, It's a React App!</h1>
      <p>It works perfectly indeed.</p>
      <button style={buttonStyle} onClick={togglePersonsHander}>Toggle persons</button>
      {persons}
    </div>
  );
}

export default App;
