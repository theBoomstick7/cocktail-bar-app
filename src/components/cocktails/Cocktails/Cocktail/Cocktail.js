import styles from '../Cocktail/cocktail.module.css'
import { Link } from 'react-router-dom'

export const Cocktail = ({
    _id,
    name,
    imageUrl,
    difficulty,
    recipe
}) => {

    return(
        <article className={styles.cocktail}>
            <h4>{name}</h4>

            <img src={imageUrl} alt="any" />

            <p className={styles.description}>{recipe}</p>

            <Link to={`/cocktails/${_id}`}>Recipies & more </Link>

        </article>
    )

}