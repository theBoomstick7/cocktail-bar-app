import { useState, useEffect } from 'react'

import styles from '../Create/createCocktail.module.css'
export const CreateCocktail = () => {

    const [ingredients, setIngredients] = useState({})
    const [values, setValues] = useState({
        name: '',
        recipe: '',
        imageUrl: '',
        difficulty: ''
    })

    const onChangeHandler = (e) => {
        setValues(state => ({...state, [e.target.name]: e.target.value}))
    }

    const onIngredientsChange = (e) => {  
        setIngredients(state => ({...state, [e.target.name]: e.target.checked}))
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()
   
        let data = Object.assign({},values,{ingredients:Object.keys(ingredients)})
        console.log(data)
    }

    return(
        <form onSubmit={onSubmitHandler}>
            <div className={styles.createForm}>

                <h2>Add a cocktail to the catalogue</h2>

                <label htmlFor="name">Cocktail name</label>
                <input type="text"
                        name = "name"
                        id = "name"
                        value={values.name}
                        onChange={onChangeHandler}
                />
                
                
                <h3>Image Url</h3>
                <label htmlFor="imageUrl">Insert image URL here</label>

                <input type="text"
                        name="imageUrl"
                        id= "imageUrl"
                        value={values.image}
                        onChange={onChangeHandler} 
                />

                    <h3>Ingredients</h3>
                <div className={styles.ingredients}>    
                        
                        <label htmlFor="vodka">Vodka</label>
                        <input type="checkbox" name="vodka" id="vodka" onChange={onIngredientsChange}  checked= {ingredients['vodka'] || false}/>
                    
                    
                        <label htmlFor="rum">Rum</label>
                        <input type="checkbox" name="rum" id="rum" onChange={onIngredientsChange}  checked= {ingredients['rum'] || false}/>
                    


                    <label htmlFor="whiskey">Whiskey</label>
                    <input type="checkbox" name="whiskey" id="whiskey" onChange={onIngredientsChange}  checked= {ingredients['whiskey'] || false}/>

                    <label htmlFor="sugar">Sugar</label>
                    <input type="checkbox" name="sugar" id="sugar" onChange={onIngredientsChange}  checked= {ingredients['sugar'] || false}/>

                    <label htmlFor="lemon">Lemon juice</label>
                    <input type="checkbox" name="lemon" id="lemon" onChange={onIngredientsChange}  checked= {ingredients['lemon'] || false}/>

                    <label htmlFor="tequila">Tequila</label>
                    <input type="checkbox" name="tequila" id="tequila" onChange={onIngredientsChange}  checked= {ingredients['tequila'] || false}/>       
                </div>
                


                <h3>Recipe</h3>
                <label htmlFor="recipe ">Please write down the cocktail recipe here in steps</label>
                <textarea name="recipe" id="recipe" cols="50" rows="5" value={values.recipe} onChange ={onChangeHandler}></textarea>

                <h3>Difficulty</h3>
                <label htmlFor="difficulty">Level of difficulty</label>
                <select name="difficulty" id="difficulty" value={values.difficulty} onChange={onChangeHandler}>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                </select>

                <input type="submit" value="Create" />
            </div>


              </form>
    )
}
