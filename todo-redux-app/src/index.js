import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '.containers/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';

let store = createStore(todos)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
