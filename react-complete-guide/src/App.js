import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person.js'


		
class App extends Component {
	//Cuando cambia state, react refresca el DOM
	state = {
		persons : [
			{id: 1, name: 'Juan', age: 30},
			{id: 2, name: 'Paco', age: 15},
			{id: 3, name: 'María', age: 20},
		],
		otherState: 'un valor aquí',
		showPersons: false
	};
	
	
		
	cambiarNombreHandler = (event, id) => {
		console.log("Cambiar nombre de persona " + id + " a " +  event.target.value);
		//Buscar la posición de la persona que hay que actualizar
		const personIndex = this.state.persons.findIndex((p) => {
			return p.id === id;
		})
		
		//Copiar el objeto para dejarlo inmutable
		const person = {...this.state.persons[personIndex]};
		
		person.name = event.target.value;
		
		
		const persons = [...this.state.persons];
		persons[personIndex] = person;
		
		this.setState({persons: persons});
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
	
	
	
	
	
	render() {
		console.log("Haciendo render de App");
	
		let persons = null;
		let btnClass = '';
		
		if (this.state.showPersons) {
			persons = (
				<div>
				{
					this.state.persons.map( (person, index) => {
						return <Person key={person.id} name={person.name} age={person.age} 
								changed={(event) => this.cambiarNombreHandler(event, person.id)} 
								click={() => this.deletePersonHandler(index)}/>
					})
				}
				</div>
			);	

			btnClass = classes.Red;
			
		}
	
		//Calcular la clase CSS dinámicamente
		const assignedClasses = [];
		if (this.state.persons.length <= 2) {
			assignedClasses.push(classes.red);
		}
		if (this.state.persons.length <= 1) {
			assignedClasses.push(classes.bold);
		}
		
		
		return (
		  <div className={classes.App}>
			<h1>Hola mundo React App</h1>
			<p className={assignedClasses.join(' ')}>This is really working!!</p>
			{/*Mejor usar el bind()*/}
			<button className={btnClass} onClick={this.togglePersonHandler}>Visibilizar/Ocultar personas</button>
			
			{persons}																	
		  </div>			  
		);	
			//return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hola mundo React App2!!!!'));
  }
}

export default App;
