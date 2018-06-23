import React from 'react'
import classes from './Person.module.scss'

const Person = props => {
  return (
    <div className={classes.person}>
      <p onClick={props.click}>My name is {props.name} and I'm {props.age} {(props.age > 1) ? "years" : "year"} old.</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  )
}
export default Person
