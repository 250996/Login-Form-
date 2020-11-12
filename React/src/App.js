import React, { Component } from "react";
import "./App.css";
import Persons from "./components/persons";
import {Route} from "react-router-dom";
import LoginForm from "./components/loginForm";

class App extends Component {
  render() {
    return (
      <main className="container">
        {/* <Persons /> */}
        <div className="container">
            <Route exact path="/" component={LoginForm}/>
            <Route path="/persons" component={Persons}/>
        </div>
        {/* <LoginForm/> */}
      </main>
    );
  }
}

export default App;
