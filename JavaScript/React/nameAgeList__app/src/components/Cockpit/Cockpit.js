import React from 'react';
import classes from './Cocpit.css';

const cockpit = props => {
  const assignedClasses = [];
  let btnClass = classes.Button;

  if (props.showPersons) {
    btnClass = [classes.Button, classes.Red].join(' ');
  }
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }
  return (
    <React.Fragment>
      <h1>I'm a React App</h1>
      <p className={assignedClasses.join(' ')}>It's ready to go!!!</p>
      <button className={btnClass} onClick={props.clicked}>
        {(props.showPersons === false) ? 'Show' : 'Hide'}
      </button>
    </React.Fragment>
  )
}

export default cockpit;
