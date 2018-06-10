import React from 'react';

const Hobbies = props =>
  <div>
    <h2>My hobbies:</h2>
    <ul>
      {props.hobbyList.map(
        (hobby, index) =>
          <li key={index}>
            {hobby}
          </li>
      )}
    </ul>
  </div>

export default Hobbies;