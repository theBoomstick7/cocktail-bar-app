import { useState } from 'react';

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
  
      if(e.target.name === 'email' && (value.length < 3 || value.length > 20)) {
        errors.email = 'Email must be between 3 and 20 characters'
      }
      if(e.target.name === 'password' && (value.length < 3 || value.length > 20)) {
        errors.password = 'Password must be between 5 and 10 characters'
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
        formValidate
    }
}