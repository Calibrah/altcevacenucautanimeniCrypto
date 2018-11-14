function* localAPI ( credentials ) {
    console.tron.log(credentials);
    const response = yield fetch('http://localhost:3000/users', {
        method: 'GET',
        headers: {
            "Content-type": "application/json",
            "Authorization": credentials,
        }
    })
    const data = response.status = 200 ? JSON.parse(response._bodyInit) : [];
    console.tron.log('LOGIN SUCCESSFUL');
    return data

}

export const Api = {
    localAPI,
}