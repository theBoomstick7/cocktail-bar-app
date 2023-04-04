import { useEffect, useState,useContext } from 'react'
import { useParams,Link } from 'react-router-dom'
import { AuthContext } from '../../../../contexts/AuthContext'
import { cocktailsServiceFactory } from '../../../../services/cocktailService'

import styles from '../CocktailDetails/cocktailDetails.module.css'
export const CocktailDetails = () => {
    const {cocktailId} = useParams()

    const {userId} = useContext(AuthContext)

    const [cocktail, setCocktail] = useState({})

    let isOwner = false

    if(userId === cocktail._ownerId) {
        isOwner = true
    }

    const cocktailService = cocktailsServiceFactory()

    useEffect(()=> {
         cocktailService.getOne(cocktailId)
         .then(result => {
             setCocktail(result)
         })
    },[cocktailId])

    return (
        <>
            <div className={styles.edit}>
                
                <h2>{cocktail.name}</h2>

                <p className={styles.title}> Difficulty: {cocktail.difficulty}</p>                
                <img src={cocktail.imageUrl} alt={cocktail._id} />

                <ul>
                    <p className={styles.title}>Ingredients -</p>
                    {cocktail.ingredients && cocktail?.ingredients.map(x => 
                        <li className={styles.ingredients} key={x}>{x}</li>)}
                </ul>
                <p className={styles.title}>Recipe</p>
                <p className={styles.recipe}>{cocktail.recipe}</p>
                
                {isOwner && 
                    <div className={styles.buttons}>
                            <Link to= {`/cocktails/${cocktailId}/delete`}>Delete</Link>
                            <Link to= {`/cocktails/${cocktailId}/edit`}>Edit</Link>
                    </div>
                }
            </div>

        </>

    )
}