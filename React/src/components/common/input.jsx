import React from 'react';
const Input = ({type,name,value,onChange,label,error}) => {
    return ( 
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input name={name} value={value} onChange={onChange} id={name} type={type} className="form-control" />
    {error && <div className="alert alert-danger">{error}</div>}
        </div>

     );
}
 
export default Input;