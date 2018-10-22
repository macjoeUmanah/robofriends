import React,{Component} from 'react';

import {connect} from 'react-redux';
import {setSearchField} from '../actions';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from './ErrorBoundry';
import './App.css';

const mapDispatchToProps=(dispatch)=>{


		return {

			onSearchChange:(event)=>dispatch(setSearchField(event.target.value))
		}
	}

	const mapStateToProps=state=>{


		return {
			searchField:state.searchField
		}
	}

class App extends Component{


	constructor(){

		super();


		this.state={



		robots:[]
	}

	}


    




	componentDidMount(){
		//console.log(this.props.store.getState())

		fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json()).then(users=>this.setState({robots:users}));


	}


	



	
  render(){

  	const {robots}=this.state;
  	const {searchField,onSearchChange}=this.props;
  	 const filteredRobots=robots.filter(robot=>{

			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		});

  	 return !robots.length ? <h1>Loading.....</h1> :


  	 	 (

		<div className='tc'>


		    <h1 className='f2'>RoboFriends</h1>
		    <SearchBox onSearchChange={onSearchChange}/>
		    <Scroll>
		       <ErrorBoundry>

			       <CardList robots={filteredRobots}/>


		       </ErrorBoundry>

			    


		    </Scroll>
		    


		</div>



	);
  	 

  	



  }
	
}


export default connect(mapStateToProps,mapDispatchToProps)(App);