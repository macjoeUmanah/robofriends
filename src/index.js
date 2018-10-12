import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CardList from './CardList';
import './index.css';
import {robots} from './robots';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


