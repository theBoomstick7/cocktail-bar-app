import styles from '../Cocktail/cocktail.module.css'


export const Cocktail = () => {

    return(
        <article className={styles.cocktail}>
            <h4>Cocktail name</h4>

            <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29ja3RhaWx8ZW58MHx8MHx8&w=1000&q=80" alt="any" />

            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia cum non autem maiores quod necessitatibus?</p>

            <button>Recipies & more</button>

        </article>
    )

}