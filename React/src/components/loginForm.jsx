import React, { Component } from 'react';
import Input from './common/input';
import Form from './common/form';
import axios from "axios";
import auth from './common/auth';
class LoginForm extends Form {
    state={
        DBuser:[],
        data:{username:"",password:""},
        errors:{},
        login:false
    }
 
   handleSubmit=e=>{
       e.preventDefault();
       const errors = this.validate();
       this.setState({ errors:errors || {} })
       if(errors)return;
       this.doSubmit()
   }
   doSubmit=()=>{
       const { DBuser,data} = this.state;
       axios.get("http://localhost:9000/projects")
           .then(res => {
               const persons = res.data;
               console.log(persons)
             let DBuser = persons.map(name => name.UserName)
               this.setState({ DBuser})
           })
           console.log(data.username)
        DBuser.map(user => {
            if(user === data.username){
                this.setState({login:true})
            }
        })
   }
 
   
    render() { 
       const {data,errors} = this.state;
  
        return ( 
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("username","Username")}
                    {this.renderInput("password", "Password","password")}
                    <button onClick={() => {
                        auth.login(() => {
                            {this.state.login === true ? this.props.history.push("/persons"):null}
                        })
                    }} type="submit" class="btn btn-primary">Log In</button>
                </form>
            </div>
         );
    }
}
 
export default LoginForm;