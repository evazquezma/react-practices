import React from 'react';
import './UserInput.css';

const userInput = (props) => {
	const inputStyle = {
		border: '2px solid green'
	}
	
	return (
		<div className="userInput">
			<input type="text" onChange={props.changed} value={props.defaultValue} style={inputStyle}/>
		</div>
	);
}


export default userInput;
