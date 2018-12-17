import React from 'react';
import tachyons from 'tachyons';


const Card=({name,email,id})=>{


	return(


		<div className='bg-light-green dib br3 pa3 grow ma2 bw2 shadow-5 tc'>

		   <img src={`https://robohash.org/${id}`} alt={'robots'}/>

			   <div>

			      <h1>{name}</h1>



			      <p>{email}</p>


			   </div>



		</div>



	);
}


export default Card;