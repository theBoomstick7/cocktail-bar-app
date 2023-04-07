import { useState } from 'react';

export const useForm = (initialValues,onSubmitHandler) => {
    const [values, setValues] = useState(initialValues)

    // const changeHandler = (e) => {
    //     setValues(state => ({...state, [e.target.name]: e.target.value}))
    // }
    
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
      
      
      
    const onSubmit = (e) => {
        
        e.preventDefault()
        
        onSubmitHandler(values);
    };
    const changeValues = (newValues) => {
        setValues(newValues)
    }

    return {
        values,
        changeHandler,
        onSubmit,
        changeValues
    }
}