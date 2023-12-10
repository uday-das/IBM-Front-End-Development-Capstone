
const Validation=(values)=>{
let error={};
if(!values.username){
    error.username="Name is required"
}
if(!values.phone){
    error.phone="Phone is required"
}
else if(values.phone.length>10 || values.phone.length<10){
    error.phone="Phone number must equals 10 digit"
}
if(!values.email){
    error.email="Email is required"
} 
if(!values.password){
    error.password="Password is required"
}
return error;
}

export default Validation;