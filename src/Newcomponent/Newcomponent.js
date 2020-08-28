import React from 'react';
import './Person.css';

const Newcomponent = (props) => {
	return 	<div className='Person'>
				<p onClick={props.click}>Мое имя {props.name} и мой возраст {props.age}</p>
				<p>  {props.children}</p>
				<input type='text' onChange={props.changed} />
			</div>
};
export default Newcomponent;