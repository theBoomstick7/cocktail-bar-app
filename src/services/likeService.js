import{requestFactory} from './requester'

const baseUrl = 'http://localhost:3030/data/likes'

export const likeServiceFactory = (token) => {
    const request = requestFactory(token)

    return {
        getAllLikesForId: async (cocktailId) => {
            const query = encodeURIComponent(`cocktailId="${cocktailId}"`);

            const result = await request.get(`${baseUrl}?where=${query}`)
            return result
        },
        create : async (cocktailId,userId) => {
            const result = await request.post(baseUrl, {cocktailId,userId})
             return result
        },
        getAllLikesOfUser: async(userId) => {
            const query = encodeURIComponent(`userId="${userId}"`);
            const result = await request.get(`${baseUrl}?where=${query}`)
            return result
        }
    }
}



// export const getAllLikesForId = async (cocktailId) => {
//     const query = encodeURIComponent(`cocktailId="${cocktailId}"`);

//     const result = await request.get(`${baseUrl}?where=${query}`)
//     return result
// }

// export const create = async (cocktailId,userId) => {
//     const result = await request.post(baseUrl, {cocktailId,userId})
//     return result
// }