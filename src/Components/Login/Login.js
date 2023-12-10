import "./Login.css"
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Validation from "./Validation";
const Login=()=>{
  const[values,setValues]=useState({
    email:"",
    password:"",
});
const[error,setError]=useState({});
const handleChange=(event)=>{
  setValues({
     ...values,
     [event.target.name]:event.target.value,
  })
 
 }
 const handleFormSubmit= (event)=>{
   event.preventDefault();
   setError(Validation(values));
 }
 const handleSubmit=(e)=>{
  e.preventDefault();
 }
    return(
<div class="container">
        <div className="login-grid">
          <div className="login-text">
            <h2>Login</h2>
          </div>
          <div className="login-text">
            Are you a new member?
             <span><Link to="sign_up" style={{color: "#2190FF"}}> Sign Up Here</Link></span>
          </div>
          <br />
          <div className="login-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                        <label htmlFor="email">Email</label>
                         <input type="email"
                         name="email" 
                         id="email"
                         className="form-control" 
                         placeholder="Enter your email"
                         value={values.email}
                        onChange={handleChange}
                         /> 
                          {error.email && <p className="error">{error.email}</p>}
                    </div>
              <div className="form-group">
                <label htmlFor="password" >Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="form-control"
                  placeholder="Enter your password"
                  value={values.password}
                  onChange={handleChange}
                />
                 {error.password && <p className="error">{error.password}</p>}
              </div>


              <div className="btn-group">
                <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light" onClick={handleFormSubmit} >Login</button> 
                <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light">Reset</button>
              </div>
              <br />
              <div className="login-text forget-text">
                Forgot Password?
              </div>
            </form>
          </div>
        </div>
      </div>
      );
}

export default Login;