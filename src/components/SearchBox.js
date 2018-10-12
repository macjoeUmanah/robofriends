import React from 'react';




const SearchBox=({onSearchChange})=>{


	return(



		<input onChange={onSearchChange} className='pa3 ba b--green bg-lightest-blue' type='search' placeholder='search robots' />




	);
}


export default SearchBox;