import React from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends React.Component {
  state = {
    persons: [
      { id: 1, name: 'Shak', age: 32 },
      { id: 2, name: 'Alicha', age: 31 },
      { id: 3, name: 'Ariana', age: 1 }
    ],
    showPersons: true,
    toggleClicked: 0
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
    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      }
    });
  }

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons =
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler} />
    }

    return (
      <React.Fragment>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonHandler} />
        {persons}
      </React.Fragment>
    );
  }
}

export default App
