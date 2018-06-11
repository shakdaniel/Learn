import React, { Component, Fragment } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Toggle from './ToggleRPC';
import Portal from './Portal';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Toggle>
          {({ on, toggle }) => (
            <Fragment>
              <button onClick={toggle}>Show/Hide</button>
              {on && <h1>Show me!</h1>}
              <Portal>
                {on && <Fragment>Hi, I'm in a Portal!</Fragment>}
              </Portal>
            </Fragment>
          )}
        </Toggle>

      </Fragment>
    );
  }
}

export default App;
