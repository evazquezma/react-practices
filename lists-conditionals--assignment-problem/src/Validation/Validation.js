import React from 'react';

const validation = (props) => {
	const lengthThreshold = 5;
	
	let message = "";
	if (props.textLength < lengthThreshold) {
		message = "Texto muy corto";
	}
	else {
		message = "Texto adecuado";
	}
	
	return (
		<p>{message}</p>		
	);
}

export default validation;