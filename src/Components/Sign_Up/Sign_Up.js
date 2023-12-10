import "./Sign_Up.css";
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';
import React, { useState } from 'react';
import Validation from "./Validation";
const Sign_Up=()=>{
 /*    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [showerr, setShowerr] = useState(''); */
    const[values,setValues]=useState({
        username:"",
        phone:"",
        email:"",
        password:"",

    });
    const[error,setError]=useState({

    });
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
return(
    <div className="container" >
    <div className="signup-grid">
        <div className="signup-text">
            <h1>Sign Up</h1>

        </div>
        <div className="signup-text1" >
            Already a member? <span><Link to="login" style={{color: "#2190FF"}}> Login</Link></span>
        </div>
        <div className="signup-form">
            <form>
            <div className="form-group">
                  <div className="form-group">
                    <label htmlFor="username">Name</label>
                    <input type="text"
                     name="username"
                      id="username"
                       required 
                       className="form-control" 
                       placeholder="Enter your name" 
                       aria-describedby="helpId"
                       value={values.username} 
                       onChange={handleChange}/>
                       {error.username && <p className="error">{error.username}</p>}
                  </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="tel" 
                    name="phone"
                     id="phone"
                      required
                       className="form-control" 
                       placeholder="Enter your phone number" 
                       aria-describedby="helpId"
                       value={values.phone}
                       onChange={handleChange} />
                       {error.phone && <p className="error">{error.phone}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email"
                     name="email"
                      id="email" 
                      required className="form-control" 
                      placeholder="Enter your email" 
                      aria-describedby="helpId"
                      value={values.email}
                      onChange={handleChange} />
                     {error.email && <p className="error">{error.email}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" 
                    name="password"
                     id="password"
                      required className="form-control" 
                      placeholder="Enter your password" 
                      aria-describedby="helpId"
                      value={values.password} 
                      onChange={handleChange}/>
                   {error.password && <p className="error">{error.password}</p>}

                </div>
                <div className="btn-group">
                    <button type="submit" 
                    className="btn btn-primary mb-2 mr-1 waves-effect waves-light"
                    onClick={handleFormSubmit}
                    >Submit</button>
                    <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light">Reset</button>
                </div>
                </div>
            </form>
        </div>
    </div>
  </div>
  
);
}

export default Sign_Up;