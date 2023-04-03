import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import  {cocktailsServiceFactory} from '../services/cocktailService';


export const CocktailContext = createContext()

export const CocktailProvider = ({
    children,
}) => {
    const [cocktails, setCocktails] =useState([]);
    const cocktailService = cocktailsServiceFactory();//auth && auth.accessToken
    const navigate = useNavigate();


    
    useEffect(() => {
        cocktailService.getAll()
          .then(result => {
              setCocktails(result);
          })
      },[]);

    
      const onCreateCocktailSubmit = async (data) => {
    
        const newCocktail = await cocktailService.create(data,);//auth.accessToken

        setCocktails(state => [...state, newCocktail]);

        navigate('/cocktails')
    }

    const context = {
        cocktails,
        onCreateCocktailSubmit
    }

    return (
        <>
            <CocktailContext.Provider value={context}>
                {children}
            </CocktailContext.Provider>
        </>
    )
}