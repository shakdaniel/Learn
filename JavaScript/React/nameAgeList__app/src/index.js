import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.scss';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
