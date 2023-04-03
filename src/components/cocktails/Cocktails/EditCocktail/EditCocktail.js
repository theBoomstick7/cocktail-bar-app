import { useForm } from '../../../../hooks/useForm'
import { useEffect, useContext } from 'react'
import  styles from '../Create/createCocktail.module.css'
import { useParams } from 'react-router-dom'
import { cocktailsServiceFactory } from '../../../../services/cocktailService'
import { CocktailContext } from '../../../../contexts/CocktailContext'

export const EditCocktail = () => {

    const {cocktailId} = useParams()
    const cocktailService = cocktailsServiceFactory()
    const {onCocktailEditSubmit} = useContext(CocktailContext)
    const {values,changeHandler,onSubmit,changeValues} = useForm({
        _id: '',
        name: '',
        imageUrl: '',
        recipe: '',
        difficulty: '',
        ingredients: []
    },onCocktailEditSubmit)

    useEffect(() => {
        cocktailService.getOne(cocktailId)
            .then(result => {
                changeValues(result)
            })
    },[cocktailId])
    
    return(
            <form onSubmit={onSubmit}>
                <div className={styles.createForm}>
    
                    <h2>Edit a cocktail from the catalogue</h2>
    
                    <label htmlFor="name">Cocktail name</label>
                    <input type="text"
                            name = "name"
                            id = "name"
                            value={values.name}
                            onChange={changeHandler}
                    />
                    
                    
                    <h3>Image Url</h3>
                    <label htmlFor="imageUrl">Insert image URL here</label>
    
                    <input type="text"
                            name="imageUrl"
                            id= "imageUrl"
                            value={values.imageUrl}
                            onChange={changeHandler} 
                    />
    
                        <h3>Ingredients</h3>
                    <div className={styles.ingredients}>    
                            
                            <label htmlFor="vodka">Vodka</label>
                            {/* <input type="checkbox" name="vodka" id="vodka" onChange={changeHandler}  checked= {values.ingredients['vodka'] || false}/> */}
                            <input type="checkbox" name="vodka" id="vodka" onChange={changeHandler} checked={values.ingredients.includes('vodka')} />

                        
                            <label htmlFor="rum">Rum</label>
                            {/* <input type="checkbox" name="rum" id="rum" onChange={changeHandler}  checked= {values.ingredients['rum'] || false}/> */}
                            <input type="checkbox" name="vodka" id="vodka" onChange={changeHandler} checked={values.ingredients.includes('rum')} />

    
    
                        <label htmlFor="whiskey">Whiskey</label>
                        {/* <input type="checkbox" name="whiskey" id="whiskey" onChange={changeHandler}  checked= {values.ingredients['whiskey'] || false}/> */}
                        <input type="checkbox" name="vodka" id="vodka" onChange={changeHandler} checked={values.ingredients.includes('whiskey')} />
                        
    
                        <label htmlFor="sugar">Sugar</label>
                        <input type="checkbox" name="vodka" id="vodka" onChange={changeHandler} checked={values.ingredients.includes('sugar')} />

    
                        <label htmlFor="lemon">Lemon juice</label>
                        {/* <input type="checkbox" name="lemon" id="lemon" onChange={changeHandler}  checked= {values.ingredients['lemon'] || false}/> */}
                        <input type="checkbox" name="vodka" id="vodka" onChange={changeHandler} checked={values.ingredients.includes('lemon')} />

                        <label htmlFor="tequila">Tequila</label>
                        {/* <input type="checkbox" name="tequila" id="tequila" onChange={changeHandler}  checked= {values.ingredients['tequila'] || false}/>        */}
                        <input type="checkbox" name="vodka" id="vodka" onChange={changeHandler} checked={values.ingredients.includes('tequila')} />

                    </div>
                    
    
    
                    <h3>Recipe</h3>
                    <label htmlFor="recipe ">Please write down the cocktail recipe here in steps</label>
                    <textarea name="recipe" id="recipe" cols="50" rows="5" value={values.recipe} onChange ={changeHandler}></textarea>
    
                    <h3>Difficulty</h3>
                    <label htmlFor="difficulty">Level of difficulty</label>
                    <select name="difficulty" id="difficulty" value={values.difficulty} onChange={changeHandler}>
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                    </select>
    
                    <input type="submit" value="Edit" />
                </div>
    
    
                  </form>
    )
}