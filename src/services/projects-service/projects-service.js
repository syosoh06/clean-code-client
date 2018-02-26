import axios from 'axios';

const url = 'https://clean-code-api.now.sh/api/projects';

export const addProject = (requestParams) => axios ({
        method: 'post',
        url: url,
        data: requestParams
    });

export const getProjects = () => axios.get(url);

export const deleteProject = (projectId) => axios({
    method: 'delete',
    url: url + '/' + projectId
});

export const updateProject = (project) => axios({
    method: 'put',
    url: url + '/' + project._id,
    data: project
});

