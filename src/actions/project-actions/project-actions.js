import { addProject } from '../../services/projects-service/projects-service';

export const addProjectAction = (project) =>
    (dispatch) =>
        addProject(project)
            .then(res =>  {
                console.log('asdsadsad');
                dispatch({
                    type: 'ADD_PROJECT_SUCCESS'
                })
            })
            .catch(err => {
                throw err;
            });