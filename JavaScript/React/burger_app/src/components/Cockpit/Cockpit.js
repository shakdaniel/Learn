import React from 'react';
import classes from './Cocpit.module.scss';

const cockpit = props => {
  const assignedClasses = [];
  let btnClass = '';

  if (props.showPersons) {
    btnClass = classes.Red;
  }
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }
  return (
    <div className={classes.Cockpit}>
      <h1>I'm a React App</h1>
      <p className={assignedClasses.join(' ')}>It's ready to go!!!</p>
      <button className={btnClass} onClick={props.clicked}>
        {(props.showPersons === false) ? 'Show' : 'Hide'}
      </button>
    </div>
  )
}

export default cockpit;
