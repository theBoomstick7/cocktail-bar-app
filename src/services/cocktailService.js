import {requestFactory} from './requester';

const baseUrl = 'http://localhost:3030/data/cocktails';

export const cocktailsServiceFactory = (token) => {
    const request = requestFactory(token)
   
    const getAll = async () => {
        const result = await request.get(baseUrl)
        const cocktails = Object.values(result)
        return cocktails;
    }
    
     const create = async (cocktailData,token) => {
        
        const result = await request.post(baseUrl,cocktailData,token)
        
        return result
    }


    return {
        getAll,
        create
    }
}