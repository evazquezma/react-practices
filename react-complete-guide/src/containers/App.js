import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import WithClass from '../hoc/WithClass'
import AuthContext from '../context/AuthContext';

		
class App extends Component {
	
	constructor(props) {
		super(props);
		console.log('[App.js] Constructor');
		/*
		this.state = {...};
		*/
	}
	
	
	//Equivalente a inicializarlo en el constructor con this.state, pero más simple
	state = {
		persons : [
			{id: 1, name: 'Juan', age: 30},
			{id: 2, name: 'Paco', age: 15},
			{id: 3, name: 'María', age: 20},
		],
		otherState: 'un valor aquí',
		showPersons: false,
		showCockpit: true,
		changeCounter: 0,
		authenticated : false
	};
	
	
	static getDerivedStateFromProps(props, state) {
		console.log('[App.js] getDerivedStateFromProps - Actualizando estado del estado', props);
		return state;
		
	}
	
	//No muy usado
	/*
	componentWillMount() {
		console.log('[App.js] componentWillMount');
	}
	*/
	
	componentDidMount() {
		console.log('[App.js] componentDidMount - Para hacer llamadas Ajax');
	}
		
	
	shouldComponentUpdate(nextProps, nextState) {
		console.log('[App.js] shouldComponentUpdate', nextProps);
		return true;		
	}
	
	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('[App.js] componentDidUpdate', snapshot);		
	}
		
		
		
		
	cambiarNombreHandler = (event, id) => {
		console.log("[Cambiar nombre de persona " + id + " a " +  event.target.value);
		//Buscar la posición de la persona que hay que actualizar
		const personIndex = this.state.persons.findIndex((p) => {
			return p.id === id;
		})
		
		//Copiar el objeto para dejarlo inmutable
		const person = {...this.state.persons[personIndex]};
		
		person.name = event.target.value;
		
		
		const persons = [...this.state.persons];
		persons[personIndex] = person;
		
		/*
		//Actualizar el contador así no es seguro. El estado no se refresca de forma inmediata, con lo que si hay accesos concurrentes su valor podría no estar actualizado
		this.setState({
				persons: persons,
				changeCounter : this.state.changeCounter + 1
			});
		*/
		
		this.setState((prevState, props) => {
			return {
				persons: persons,
				changeCounter : prevState.changeCounter + 1
			}
		});
		
	}
	
	
	togglePersonHandler = () => {
		const doesShow = this.state.showPersons;
		
		this.setState({showPersons: !doesShow});
	}
	
	
	deletePersonHandler =(personIndex) => {
		console.log("Borrando person " + personIndex );	
		//Crear una copia del array para no referenciarlo directamente
		//const personas = this.state.persons.slice();
		const personas = [...this.state.persons];		
				
		personas.splice(personIndex, 1);
		this.setState({persons: personas});
	}
	
	loginHandler = () => {
		alert('Haciendo login');
		this.setState({authenticated : true});
	}
	
	
	
	render() {
		console.log("[App.js] - Haciendo render de App");
	
		let persons = null;				
		if (this.state.showPersons) {
			persons = <Persons persons={this.state.persons} clicked={this.deletePersonHandler} changed={this.cambiarNombreHandler} isAuthenticated={this.state.authenticated}/>							
		}
	
		let cockpit = null;
		if (this.state.showCockpit) {
			cockpit = <Cockpit title={this.props.appTitle} personsLength={this.state.persons.length} showPersons={this.state.showPersons} clicked={this.togglePersonHandler} login={this.loginHandler}/>		
		}
		
		return (
		 <WithClass classes={classes.App}>		  
			 <button onClick={() => {this.setState({showCockpit: !this.state.showCockpit});}}>Toggle Cockpit</button>
			<AuthContext.Provider value={{authenticated: this.state.authenticated, login : this.loginHandler}}>
				{cockpit}	
				{persons}
			</AuthContext.Provider>			
		  </WithClass>			  
		);	
			//return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hola mundo React App2!!!!'));
  }
}

export default App;
