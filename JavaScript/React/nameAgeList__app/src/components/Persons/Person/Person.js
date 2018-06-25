import React from 'react';
import PropTypes from 'prop-types';
import classes from './Person.module.scss';

class Person extends React.Component {
  constructor(props) {
    super(props)
    console.log('[Person.js] Inside constructure()', props);
  }

  componentWillMount() {
    console.log('[Person.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[Person.js] Inside componentDidMount()');
    if (this.props.position === 0) {
      this.inputElement.focus();
    }
  }


  render() {
    return (
      <li className={classes.person}>
        <p onClick={this.props.click}>My name is {this.props.name} and I'm {this.props.age} {(this.props.age > 1) ? "years" : "year"} old.</p>
        <p>{this.props.children}</p>
        <input
          ref={(inp) => { this.inputElement = inp }}
          type="text"
          onChange={this.props.changed}
          value={this.props.name} />
      </li>
    )
  }
}
Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  click: PropTypes.func,
  changed: PropTypes.func
}
export default Person
