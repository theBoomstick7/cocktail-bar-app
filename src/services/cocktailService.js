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

    const getOne = async (id) => {
        const result = await request.get(`${baseUrl}/${id}`)
        return result
    }
    const deleteOne = async(id) => {
        const result = await request.del(`${baseUrl}/${id}`)
        return result
    }
    const edit = (id,data) => request.put(`${baseUrl}/${id}`,data)


    return {
        getAll,
        create,
        getOne,
        deleteOne,
        edit
    }
}