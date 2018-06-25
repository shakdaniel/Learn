import React from 'react';
import Person from './Person/Person'

const persons = props =>

  <ul>
    {props.persons.map((person, index) =>
      <Person
        key={person.id}
        name={person.name}
        age={person.age}
        position={index}
        click={() => props.clicked(index)}
        changed={(event) => props.changed(event, person.id)} />
    )}
  </ul>

export default persons;