import React,{Component} from 'react';
import auth from './auth';
import Input from './input';

class Form extends Component {
  state={
      data:{},
      errors:{}
  }
    validate = () => {
        let errors = {};
        const { data } = this.state;
        if (data.username.trim() == "") errors.username = "username is required";
        if (data.password.trim() == "") errors.password = "password is required";

        return Object.keys(errors).length === 0 ? null : errors;
    }
    validateProperty = ({ name, value }) => {
        if (name === "username") {
            if (value.trim() === "") return "username is required";
        }
        if (name === "password") {
            if (value.trim() === "") return "password is required"
        }
    }
    handleChange = ({ currentTarget: input }) => {
        const errors = { ...this.state.errors };
        const errorMessage = this.validateProperty(input)
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];
        const { data } = this.state;
        data[input.name] = input.value;
        this.setState({ data });
    }
    renderInput(name,label,type="text"){
        const {data,errors} = this.state;
       return <Input
         error={errors[name]}
         type={type}
          name={name}
           onChange={this.handleChange}
            label={label}
             value={data[name]} />
    }
   
}
 
export default Form;