import { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import  {cocktailsServiceFactory} from '../services/cocktailService';
import { AuthContext } from './AuthContext';
import { likeServiceFactory } from '../services/likeService';
export const CocktailContext = createContext()

export const CocktailProvider = ({
    children,
}) => {
    const [cocktails, setCocktails] =useState([]);
    const {token} = useContext(AuthContext)
    const cocktailService = cocktailsServiceFactory(token);//auth && auth.accessToken
    const likeService = likeServiceFactory(token)
    // const[loaded, setLoaded] = useState(true)
    
    const navigate = useNavigate();

    // useEffect(() => {
    //     cocktailService.getAll()
    //       .then(result => {
    //         console.log(result);
    //           if(result.length >0){
    //           setLoaded(false)
    //           }else{
    //           setLoaded(true)
    //               }
    //           setCocktails(result);
    //       })
    //   },[]); 
    
    useEffect(() => {
        cocktailService.getAll()
          .then(result => {
                console.log(result);
              setCocktails(result);
          }).catch((error) => {
         setCocktails([])})
      },[]);

    
      const onCreateCocktailSubmit = async (data) => {
    
        const newCocktail = await cocktailService.create(data,);//auth.accessToken

        setCocktails(state => [...state, newCocktail]);

        navigate('/cocktails')
    }

    const onDeleteCocktail = async (id) => {
        
        setCocktails((prevCocktails) => prevCocktails.filter((cocktails) => cocktails._id !== id));
        await cocktailService.deleteOne(id)
    }
    const onCocktailEditSubmit = async (values) => {
        const result = await cocktailService.edit(values._id,values)

        setCocktails(state => state.map(x=> x._id === values._id ? result : x))
        navigate(`/cocktails/${values._id}`)
    }
    const likeCocktail = async (cocktailId,userId) => {
       const result = await likeService.create(cocktailId,userId)
       return result
    }

    const context = {
        cocktails,
        onCreateCocktailSubmit,
        onDeleteCocktail,
        onCocktailEditSubmit,
        likeCocktail
    }

    return (
        <>
            <CocktailContext.Provider value={context}>
                {children}
            </CocktailContext.Provider>
        </>
    )
}