import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CardList from './CardList';
import {robots} from './robots';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(

	<CardList robots={robots}/>

	



	, document.getElementById('root'));
registerServiceWorker();


