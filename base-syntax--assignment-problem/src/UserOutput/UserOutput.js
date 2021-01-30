import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
	return (
		<div className="userOutput">
			<p>Párrafo 1: Usuario {props.username}</p>
			<p>Párrafo 2</p>
		</div>
	);
}


export default userOutput;