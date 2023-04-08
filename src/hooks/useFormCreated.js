import { useState,useEffect } from 'react';

export const useFormCreated = (initialValues,onSubmitHandler) => {
    const [values, setValues] = useState(initialValues)
    const [errors, setFormErrors] = useState(initialValues)
    

    const changeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const type = e.target.type;
      
        if (type === "checkbox") {
          // create a new array with the current ingredients
          const currentIngredients = [...values.ingredients];
          const index = currentIngredients.indexOf(name);
      
          if (index === -1) {
            // checkbox was checked, add the ingredient to the array
            currentIngredients.push(name);
          } else {
            // checkbox was unchecked, remove the ingredient from the array
            currentIngredients.splice(index, 1);
          }
      
          // update the state with the new ingredients array
          changeValues({ ...values, ingredients: currentIngredients });
        } else {
          // update the state with the new value
          changeValues({ ...values, [name]: value });
        }
      };
      
    const formValidate = (e) => {
      const value = e.target.value;
      const errors = {}
  
      if(e.target.name === 'email' && (value.length < 3 || value.length > 25)) {
        errors.email = 'Email must be between 3 and 25 characters'
        
      }
      if(e.target.name === 'email' && value.length === 0) {
        errors.email = 'Email is required'
      }
      if(e.target.name === 'password' && value.length < 5) {
        errors.password = 'Password must be atleast 5 characters'
      }
      if(e.target.name === 'password' && value.length === 0) {
        errors.password = 'Password is required'
      }
      if(e.target.name === 'repass' && value.length < 5) {
        errors.repass = 'Repeated password must be atleast 5 characters'
      }
      if(e.target.name === 'repass' && value.length === 0) {
        errors.repass = 'Repeated password is required'
      }
      if(e.target.name === 'username' && (value.length < 5 || value.length > 15)) {
        errors.username = 'Username must be between 5 and 15 characters'
      }
      if(e.target.name === 'username' && value.length === 0) {
        errors.username = 'Username is required'
      }
      setFormErrors(errors)
     
    }
      
    const onSubmit = (e) => {
        
        e.preventDefault()
        
        onSubmitHandler(values);
    };
    const changeValues = (newValues) => {
        setValues(newValues)
    }
   

    return {
        values,
        errors,
        changeHandler,
        onSubmit,
        changeValues,
        formValidate,
        
    }
}