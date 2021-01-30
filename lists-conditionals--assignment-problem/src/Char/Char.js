import React from 'react';
import './Char.css';

const char = (props) => {
	
	return (
		<input type="text" value={props.theChar} onClick={props.click} className="CharComponent" readOnly="readonly"/>	
	);
}

export default char;