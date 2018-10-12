import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import CardList from './components/CardList';
import './index.css';
import {robots} from './robots';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


