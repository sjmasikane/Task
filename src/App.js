import React, {Component} from 'react';
import './App.css';

import Form from "./components/Form";

class  App extends Component{
  getRecipe =(e) =>{
    const recipeName= e.target.elements.recipeName.value;
    e.preventDefault();
    console.log("Not working..."+recipeName);
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search changes</h1>
        </header>
        <Form getRecipe={this.getRecipe}></Form>
      </div>
    );
  }
}
export default App;
