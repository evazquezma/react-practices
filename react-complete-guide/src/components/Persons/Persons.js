import React, { PureComponent } from 'react';
import Person from './Person/Person.js';




class Persons extends PureComponent {
	/*
	Como no se utiliza state salta un warning al ejecutarse
	static getDerivedStateFromProps(props, state) {
		console.log('[Persons.js] getDerivedStateFromProps - Actualizando estado del estado', props);
		return state;		
	}
	*/
	/*
	componentWillReceiveProps(props) {
		console.log('[Persons.js] componentWilReceiveProps', props);
	}
	*/
	
	/*
	Extendiendo de pureComponent internamente ya implementa un método shouldComponentUpdate que evalua todas las props que recibe el componente
	shouldComponentUpdate(nextProps, nextState) {
		console.log('[Persons.js] shouldComponentUpdate', nextProps);
		 //Ojo, estamos comparando punteros. Cuando cambia una persona en App.js se genera un nuevo array.
		if (nextProps.persons !== this.props.persons || 
			nextProps.changed !== this.props.changed || 
			nextProps.clicked != this.props.clicked) {
			return true;
		}
		else {			
			return false;
		}
	}
	*/
	
	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('[Persons.js] getSnapshotBeforeUpdate');
		return {message: 'Esto es un snapshot de Persons!!'};
	}
	
	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('[Persons.js] componentDidUpdate', snapshot);		
	}
	
	//Hock para hacer limpieza
	componentWillUnmount() {
		console.log('[Persons.js] componentWilUnmount');		
	}
	
	
	render() {
		console.log("[Persons.js] rendering...")
		return (
			
			this.props.persons.map( (person, index) => {
				return (
					<Person  key={person.id} 
									 name={person.name} 
									 age={person.age}
									 click={() => this.props.clicked(index)}
									 changed={(event) => this.props.changed(event, person.id)} />
					)
			})
		)			
	}	
	
}


export default Persons;
