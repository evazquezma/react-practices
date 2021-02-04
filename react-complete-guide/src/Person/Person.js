import React from 'react';
import classes from './Person.css';


//ES6 equivalent function
const person = (props) => {	
	
	return (
		<div className={classes.Person}>
			<p onClick={props.click}>Soy {props.name} de edad {props.age} años. Random: {Math.floor(Math.random() * 30)}  !!</p>			
			<p>{props.children}</p>
			<input type="text" onChange={props.changed} defaultValue={props.name}/>
		</div>
	);
}

export default person;