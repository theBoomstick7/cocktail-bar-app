import { useContext, useEffect } from 'react'
import { useParams ,Navigate } from 'react-router-dom'
import { CocktailContext } from '../../../../contexts/CocktailContext'

export const DeleteCocktail = () => {
    const {cocktailId} = useParams()
    const {onDeleteCocktail} = useContext(CocktailContext)

    useEffect(() => {
        onDeleteCocktail(cocktailId)
    },[onDeleteCocktail])
    return(
        <Navigate to='/cocktails' />
    )
}