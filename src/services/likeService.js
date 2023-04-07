import{requestFactory} from './requester'

const baseUrl = 'http://localhost:3030/data/likes'

const request = requestFactory()

export const getAllLikesForId = async (cocktailId) => {
    const query = encodeURIComponent(`cocktailId="${cocktailId}"`);

    const result = await request.get(`${baseUrl}?where=${query}`)
    return result
}

export const create = async (cocktailId,userId) => {
    const result = await request.post(baseUrl, {cocktailId,userId})
    return result
}