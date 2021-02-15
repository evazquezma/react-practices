import React, {useEffect, useRef, useContext} from 'react';
import AuthContext from '../../context/AuthContext';
import classes from './Cockpit.css';


//ES6 equivalent function
const cockpit = (props) => {
	const toggleButtonRef = useRef(null);
	const context = useContext(AuthContext);
	/*
	//Combinación de component did mount and componet did update
	//Se ejecuta cuando cambia el segundo argumento.
	useEffect(() => {
		console.log("[cockpit.js] useEffect")
		//Lanzar http request
		setTimeout( () => {
			alert('Simulado efecto de llamada HTTP para guardar datos');
		},1000);
	}, [props.personsLength]);
	*/
	
	//Se ejecutará sólo la primera vez que se crea el componente
	useEffect(() => {
		console.log("[cockpit.js] useEffect")
		//Lanzar http request
		/*
		const timer = setTimeout( () => {
			alert('Simulado efecto de llamada HTTP para guardar datos');
		},1000);
		*/
		toggleButtonRef.current.click();
	
		return () => {
			//clearTimeout(timer);
			console.log('[cockpit.js] cleanup work in useEffect');
		}
	}, []);
	
	
	useEffect(() => {
		console.log("[cockpit.js] 2nd useEffect");
		return () => {
			console.log('[cockpit.js] cleanup work in 2nd useEffect');
		}
	});
	
	
	
	
	let btnClass = '';	
	if (props.showPersons) {
		btnClass = classes.Red;
	}
	
	//Calcular la clase CSS dinámicamente
	const assignedClasses = [];
	if (props.personsLength <= 2) {
		assignedClasses.push(classes.red);
	}
	if (props.personsLength <= 1) {
		assignedClasses.push(classes.bold);
	}
	

	

			
		
	//El resultado deve ser un único componente, así que, de momento, se mete todo dentro de un div
	return (
		<div className={classes.Cockpit}>
			<h1>{props.title}</h1>
			<p className={assignedClasses}>This is really working!!</p>		
			<button ref={toggleButtonRef} className={btnClass} onClick={props.clicked}>Visibilizar/Ocultar personas</button>
			
			<AuthContext.Consumer> 
			{(context) => 
				<button onClick={context.login}>Login</button>
			}
			</AuthContext.Consumer> 
		</div>
	);
}

//Haciendo wrap con memo el componente sólo se refresca cuando hay cambios en sus props
export default React.memo(cockpit);