import React,{Component} from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox';
import './App.css';


class App extends Component{


	constructor(){

		super();


		this.state={



		robots:robots,
		searchfield:''
	}

	}

	onSearchChange=(event)=>{

		this.setState({searchfield:event.target.value})

		
		

		//this.setState({robots:filteredRobots});
		//console.log(filteredRobots);
	}

	
  render(){
  	 const filteredRobots=this.state.robots.filter(robot=>{

			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		});

  	 return(

		<div className='tc'>

		    <h1 className='f2'>RoboFriends</h1>
		    <SearchBox onSearchChange={this.onSearchChange}/>
		    <CardList robots={filteredRobots}/>


		</div>



	);



  }
	
}


export default App;