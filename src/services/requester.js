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

        if (res.status === 204) {
            return {};
        } else if (res.status === 404){
            return [];
        } else if (res.ok === false) {
            
             const error = await res.json()
            throw new Error(error.message); 
        }
        else 
        {
            return res.json()
        }
       
    } catch (error) {
        alert(error.message);
        throw error
    }
}


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

