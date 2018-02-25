import { addProject, getProjects, deleteProject, updateProject } from '../../services/projects-service/projects-service';

export const addProjectAction = (project) =>
    (dispatch) =>
        addProject(project)
            .then((res) =>  {
                dispatch({
                    type: 'ADD_PROJECT_SUCCESS',
                    project: res.data.project
                })
            })
            .catch(err => {
                throw err;
            });

export const getProjectsAction = () =>
    (dispatch) =>
        getProjects()
            .then((res) =>  {
                dispatch({
                    type: 'GET_PROJECTS_SUCCESS',
                    projects: res.data
                })
            })
            .catch(err => {
                throw err;
            });

export const deleteProjectAction = (projectId) =>
    (dispatch) =>
        deleteProject(projectId)
            .then((res) =>  {
                dispatch({
                    type: 'DELETE_PROJECT_SUCCESS',
                    deletedProjectId: res.data.deletedProjectId
                })
            })
            .catch(err => {
                throw err;
            });

export const updateProjectAction = (project) =>
    (dispatch) =>
        updateProject(project)
            .then((res) =>  {
                dispatch({
                    type: 'DELETE_PROJECT_SUCCESS',
                    project: res.data.project
                })
            })
            .catch(err => {
                throw err;
            });