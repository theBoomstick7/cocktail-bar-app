import { useEffect, useState,useContext } from 'react'
import { useParams,Link } from 'react-router-dom'
import { AuthContext } from '../../../../contexts/AuthContext'
import { cocktailsServiceFactory } from '../../../../services/cocktailService'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import styles from '../CocktailDetails/cocktailDetails.module.css'
import { CocktailContext } from '../../../../contexts/CocktailContext'
import { likeServiceFactory } from '../../../../services/likeService'
export const CocktailDetails = () => {
   
    let isOwner = false
    
    const {cocktailId} = useParams()

    const {userId,token} = useContext(AuthContext)
    const {likeCocktail} = useContext(CocktailContext)
    const likeService = likeServiceFactory(token)

    
    const [cocktail, setCocktail] = useState({
        likes:[]
    })
    
    if(userId === cocktail._ownerId) {
        isOwner = true
    }

    const cocktailService = cocktailsServiceFactory()

    useEffect(()=> {
        Promise.all(
            [cocktailService.getOne(cocktailId),
                likeService.getAllLikesForId(cocktailId)]
        )
         .then(([cocktailData,likes]) => {
             setCocktail({
                ...cocktailData,
                likes
             })
         })
    },[cocktailId])

    const onLikeClicked = async () =>{

        const response = await likeCocktail(cocktailId,userId)
        setCocktail(state => ({
            ...state,
            likes: [...state.likes,response]
        }))
       
    }
    const hasLiked = cocktail.likes.some(like => like.userId === userId);

    return (
        <>
            <div className={styles.edit}>
                <h1>{cocktail?.likes.length}</h1>
                <h2>{cocktail.name}</h2>
                {!hasLiked && userId &&  <button onClick={onLikeClicked}>
                    <FontAwesomeIcon icon={faHeart} size='lg' />
                </button>}
               
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