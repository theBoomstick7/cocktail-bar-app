import { useContext, useEffect,useState } from 'react'
import { AuthContext } from '../../../contexts/AuthContext'
import { cocktailsServiceFactory } from '../../../services/cocktailService'
import { likeServiceFactory } from '../../../services/likeService'
import { Cocktail } from '../Cocktails/Cocktail/Cocktail'
import styles from '../Cocktails/cocktails.module.css'
export const FavouriteCocktails = () => {

    const {userId,token} = useContext(AuthContext)
    const likeService = likeServiceFactory(token)
    const cocktailService = cocktailsServiceFactory(token)
    const [res, setRes] = useState([]);
    const [cocktail,setCocktail] = useState([])

    useEffect(()=> {
        likeService.getAllLikesOfUser(userId)
          .then(result => {
            const cocktailIds = result.map(x => x.cocktailId);
            setRes(cocktailIds);
          });
      },[userId]);
      
      useEffect(() => {
        if (res.length === 0) {
          return;
        }
        Promise.all(res.map(cocktailId => cocktailService.getOne(cocktailId)))
          .then(results => {
            setCocktail(results);
          });
      }, [res]);
      

      return (
        <>
        <section className={styles.cocktailsSelection}>
            <div className={styles.titles}>
                < h1>Favourite Cocktails</h1>
                <h2>Take a look at your favourite cocktails</h2>
            </div>

            <div className={styles.cocktailList}>
                
                {cocktail.map((x) => (
                    <Cocktail key={x._id} {...x} />
                ))}
            </div>
        </section>
        </>
        
      );
    };
