import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Shak', age: 32 },
      { id: 2, name: 'Alicha', age: 32 },
      { id: 3, name: 'Ariana', age: 1 }
    ],
    showPersons: true
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(
      uniqePerson => uniqePerson.id === id
    );
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    const style = {
      backgroundColor: 'limegreen',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px 16px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) =>
            <Person
              key={person.id}
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              changed={(event) => this.nameChangeHandler(event, person.id)} />
          )}
        </div>
      );
      style.backgroundColor = 'red';
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className='App'>
        <h1>I'm a React App</h1>
        <p className={classes.join(' ')}>It's ready to go!!!</p>
        <button style={style} onClick={this.togglePersonHandler}>
          {(this.state.showPersons === false) ? 'Show' : 'Hide'}
        </button>
        {persons}
      </div>
    );
  }
}

export default App
