import { useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom'
import { cocktailsServiceFactory } from '../../../../services/cocktailService'

export const CocktailDetails = () => {
    const {cocktailId} = useParams()

    const [cocktail, setCocktail] = useState({})

    const cocktailService = cocktailsServiceFactory()

    useEffect(()=> {
         cocktailService.getOne(cocktailId)
         .then(result => {
             setCocktail(result)
         })
    },[cocktailId])

    return (
        <>
            <h1>{cocktail.name}</h1>

            <p>{cocktail.difficulty}</p>

            <img src={cocktail.imageUrl} alt={cocktail._id} />

            <ul>
                {cocktail.ingredients && (cocktail?.ingredients).map(x => 
                    <li key={x}>{x}</li>)}
                {/* {} */}
            </ul>

            <p>{cocktail.recipe}</p>

            <Link to= {`/catalog/${cocktailId}/delete`}>Delete</Link>
            <Link to= {`/catalog/${cocktailId}/edit`}>Edit</Link>

        </>

    )
}