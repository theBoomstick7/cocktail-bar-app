import styles from '../Cocktail/cocktail.module.css'


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

            <p className="description">{recipe}</p>

            <button>Recipies & more</button>

        </article>
    )

}