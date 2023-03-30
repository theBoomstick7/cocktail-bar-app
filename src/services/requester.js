const request = async (method,url,data,token,) => {
    
    
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
    debugger
    if(token){
    

        options.headers = {
            ...options.headers,
            'X-Authorization': token
        }
    };
    
    try {
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

export const get = async (url) => {
    return request('get',url); 
}

export const post = async (url,data,token) => {
    return request('post', url ,data,token);
}
export const put = async (url,data) => {
    return request('put', url,  data);
}
export const del = async (url) => {
    return request('put',url, 'delete')
}