import styles from '../Cocktail/cocktail.module.css'
import { Link } from 'react-router-dom'

export const Cocktail = ({
    _id,
    name,
    imageUrl,    
    recipe
}) => {

    return(
        <article className={styles.cocktail}>
            <h4>{name}</h4>

            <img src={imageUrl} alt="any" />

            <div className={styles.description}>
                <div>{recipe}</div>
            </div>

            <Link to={`/cocktails/${_id}`}>Recipies & more </Link>

        </article>
    )

}