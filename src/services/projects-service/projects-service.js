const url = 'http://localhost:8080/api/projects';

export const addProject = (requestParams) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: requestParams
    };

    return fetch(url, requestOptions)
        .then(response => {
            return response.json();
        });
};