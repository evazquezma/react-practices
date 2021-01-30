import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation.js'
import Char from './Char/Char.js'

class App extends Component {
	state = {
		inputText : '',
	}
	
	
	changeTextHandler = (event) => {
		console.log("Cambia el texto del input " + event.target.value);
		
		this.setState({
			inputText : event.target.value,			
			}
		);						
	}
	
	removeChar = (event, theChar, index) => {
		console.log("Borrar el componente " + theChar + " en la posición " + index);
		
		let textArray = this.state.inputText.split('');
		textArray.splice(index, 1);
		
		this.setState({
			inputText : textArray.join(''),			
			}
		);				
	}
	
  render() {
	let chars = null;
	
	if (this.state.inputText.length > 0) {
		const textArray = this.state.inputText.split('');
		chars = (
			textArray.map((c, index) => {
				return <Char key={c + index} theChar={c} click={(event)=> {this.removeChar(event, c, index)}}/>
			})
		);				
	}	
	  
    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
		
		<br/>
		<hr/>
		<br/>
		
		<div>
			<input type="text" onChange={(event) => this.changeTextHandler(event)}/>			
		</div>
		
		<div>
			<p>Longitud del texto: {this.state.inputText.length}</p>		
			<Validation textLength={this.state.inputText.length}/>
		</div>
		
		<div>
			{chars}
		</div>
      </div>	  	  	  
    );
  }
}

export default App;
