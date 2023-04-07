const requester = async (method,token,url,data) => {

    const options = {};

    if(method !== 'GET') {
        options.method = method;

        
            if (data !== undefined) {
                options.headers = {
                    'content-type': 'application/json',
                };
            
            
            options.body = JSON.stringify(data);
        };
    }

    try {
        
        if(token){
            
            options.headers = {
                ...options.headers,
                'X-Authorization': token
            }
        };
        const res = await fetch(url, options);

        if (res.ok === false)
        {
            const error = await res.json()
            throw new Error(error.message);
        }

        if (res.status === 204) {
            return {};
        } else 
        {
            return res.json()
        }
    } catch (error) {
        alert(error.message);
        throw error
    }
}

// export const get = async (url) => {
//     return request('get',url); 
// }

// export const post = async (url,data,token) => {
//     return request('post', url ,data,token);
// }
// export const put = async (url,data) => {
//     return request('put', url,  data);
// }
// export const del = async (url) => {
//     return request('put',url, 'delete')
// }

export const requestFactory = (token) => {
    
    if(!token) {
        const serializedAuth = localStorage.getItem('auth');
        if(serializedAuth) {
            const auth = JSON.parse(serializedAuth)
            token = auth.accessToken
        }
    }
    
    return {
         get: requester.bind(null, 'GET',token),
         post : requester.bind(null, 'POST',token),
         put : requester.bind(null, 'PUT',token),
         patch : requester.bind(null, 'PATCH',token),
         del :requester.bind(null, 'DELETE',token),
        
    }
}

