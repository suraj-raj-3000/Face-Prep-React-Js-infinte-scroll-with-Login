const Validation = (values) =>{
    let errors = {}
      
    if(!values.username){
        errors.username = "empty"
    }
    else if(values.username === "foo"){
        errors.username = "Wrong username"
    }

    if(!values.password){
        errors.password = "empty"
    }
    else if(values.password === "bar"){
        errors.password = "Wrong Password"
    }
return errors;
}

export default Validation;
