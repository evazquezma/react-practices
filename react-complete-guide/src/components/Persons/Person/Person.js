import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Aux from '../../../hoc/Auxiliary';
import AuthContext from '../../../context/AuthContext';
import classes from './Person.css';


class Person extends Component {
	constructor(props) {
		super(props);
		//Se inicializa a un objeto general creado por React, para luego asociarlo a un input con el "ref"
		this.inputElementRef = React.createRef();
		//La otra opción es no usar el constructor y que el propio input se referenci con "ref={(inputEl) => {this.inputElement = inputEl}}"
	}
	
	componentDidMount() {
		console.log("[Person.js] componentDidMount...")
		//this.inputElement.focus();
		this.inputElementRef.current.focus();
		console.log('Autenticado: ', this.context.authenticated);
	}
	
	// Sólo para class-based components
	static contextType = AuthContext;
	
	
	render() {
		console.log("[Person.js] rendering...")
		//Usando el hack de Aux se permitiría devolver múltiples elementos HTML en el JSX de return sin tener que meterlos dentro de un elemento padre. 		
		//Se puede usar "React.Fragment" en vez de Aux.
		return (
			<Aux>
				{
					this.context.authenticated ? <p>Autenticado</p> : <p>No autenticado</p>
				}
				<div className={classes.Person}>
					<p onClick={this.props.click}>Soy {this.props.name} de edad {this.props.age} años.</p>			
					<p>{this.props.children}</p>
					<input type="text" onChange={this.props.changed} defaultValue={this.props.name}
							ref = {this.inputElementRef}
							/>
				</div>
				<div>
					<p>Segundo elemento de person</p>
				</div>
			</Aux>
		);
	}
}

Person.propTypes = {
	click : PropTypes.func,
	name : PropTypes.string,
	age : PropTypes.number,
	changed : PropTypes.func	
}

export default Person;