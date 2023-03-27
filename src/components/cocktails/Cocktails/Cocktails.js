import { Cocktail } from "./Cocktail/Cocktail"

import styles from '../Cocktails/cocktails.module.css'

export const Cocktails = ({
    cocktails
}) => {


    return(
        <section className={styles.cocktailsSelection}>
            <div className={styles.titles}>
                <h1>COCKTAILS PAGE</h1>
                <h2>Take a look at our variety of cocktails</h2>
            </div>
            <div className={styles.cocktailList}>
                {cocktails.map( x=>
                    <Cocktail key={x._id} {...x}/>
                )}

                {cocktails.length === 0 && (
                    <h3>NO COCKTAILS YET</h3>
                )}
            </div>

        </section>
    )
}