
const Validation=(values)=>{
    let error={};
    
    if(!values.email){
        error.email="Email is required"
    } 
    if(!values.password){
        error.password="Password is required"
    }
    return error;
    }
    
    export default Validation;