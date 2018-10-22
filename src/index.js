import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {searchRobots} from './reducers';

import CardList from './components/CardList';
import './index.css';
import {robots} from './robots';
import registerServiceWorker from './registerServiceWorker';



const store=createStore(searchRobots);



ReactDOM.render(
	             <Provider store={store}>
	                <App/>
	             </Provider>, document.getElementById('root'));
registerServiceWorker();


