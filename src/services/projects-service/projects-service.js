const url = 'http://localhost:8080/api/projects';

export const addProject = (requestParams) => {
    const requestOptions = {
        method: 'POST',
        headers: {"Access-Control-Allow-Origin": "*"},
        body: requestParams
    };

    const request = new Request('http://localhost:8080/api/projects', {
        method: 'POST',
        mode: 'cors',
        redirect: 'follow',
        headers: new Headers({
            'Content-Type': 'text/plain'
        })
    });

    debugger;
    return fetch(request)
        .then(response => {
            debugger;
            return response.json();
        });
};