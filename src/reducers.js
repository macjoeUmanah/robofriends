import {CHANGE_SEARCH_FIELD} from './constants.js';

const initialState={


	searchField:''
}



export const searchRobots=(state=initialState,actions={})=>{

	//console.log(actions.type);

	switch(actions.type){

		case CHANGE_SEARCH_FIELD:
		    return Object.assign({},state,{searchField:actions.payload});
		default:
		    return state;
	}
}