import { useState } from 'react';

export const useForm2 = (initialValues, onSubmitHandler, validate) => {
    const [values, setValues] = useState(initialValues)
    const [errors, setErrors] = useState({})

    const changeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const type = e.target.type;
      
        if (type === "checkbox") {
          const currentIngredients = [...values.ingredients];
          const index = currentIngredients.indexOf(name);
      
          if (index === -1) {
            currentIngredients.push(name);
          } else {
            currentIngredients.splice(index, 1);
          }
      
          changeValues({ ...values, ingredients: currentIngredients });
        } else {
          changeValues({ ...values, [name]: value });
        }
      };
      
    const onSubmit = (e) => {
        e.preventDefault()
        
        const errors = validate(values);
        setErrors(errors);
        
        if (Object.keys(errors).length === 0) {
            onSubmitHandler(values);
        }
    };
    
    const changeValues = (newValues) => {
        setValues(newValues)
    }
    
    return {
        values,
        changeHandler,
        onSubmit,
        errors,
        changeValues
    }
}
