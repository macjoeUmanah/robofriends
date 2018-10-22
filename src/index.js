import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import {Provider} from 'react-redux';
import {createLogger} from 'redux-logger';
import {createStore,applyMiddleware} from 'redux';
import {searchRobots} from './reducers';

import CardList from './components/CardList';
import './index.css';
import {robots} from './robots';
import registerServiceWorker from './registerServiceWorker';

const logger=createLogger();

const store=createStore(searchRobots,applyMiddleware(logger));



ReactDOM.render(
	             <Provider store={store}>
	                <App/>
	             </Provider>, document.getElementById('root'));
registerServiceWorker();


