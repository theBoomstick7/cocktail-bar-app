import { useEffect, useState,useContext } from 'react'
import { useParams,Link } from 'react-router-dom'
import { AuthContext } from '../../../../contexts/AuthContext'
import { cocktailsServiceFactory } from '../../../../services/cocktailService'

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
            <h1>{cocktail.name}</h1>

            <p>{cocktail.difficulty}</p>

            <img src={cocktail.imageUrl} alt={cocktail._id} />

            <ul>
                {cocktail.ingredients && (cocktail?.ingredients).map(x => 
                    <li key={x}>{x}</li>)}
               
            </ul>

            <p>{cocktail.recipe}</p>
            
            {isOwner && 
                <>
                        <Link to= {`/cocktails/${cocktailId}/delete`}>Delete</Link>
                        <Link to= {`/cocktails/${cocktailId}/edit`}>Edit</Link>
                </>
            }

        </>

    )
}