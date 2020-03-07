const loginServices = (data) => {
    return fetch('http://sdata-api-gateway.herokuapp.com/auth/login', {
        method: 'post',
        body: JSON.stringify(data),
        headers: { 'Content-type': 'application/json' },
    })
}

const registerService = (data) => {
    return fetch('http://sdata-api-gateway.herokuapp.com/auth/register', {
        method: 'post',
        body: JSON.stringify(data),
        headers: { 'Content-type': 'application/json' },
    });
}

export {loginServices, registerService}