import * as request from './requester';

const baseUrl = 'http://localhost:3030/jsonstore/cocktails';


export const getAll = async () => {
    const result = await request.get(baseUrl)
    const cocktails = Object.values(result)
    return cocktails;
}

export const create = async (cocktailData) => {
    
    const result = await request.post(baseUrl,cocktailData)
    
    return result
}