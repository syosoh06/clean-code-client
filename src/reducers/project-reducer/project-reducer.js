import Immutable from 'immutable';

export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_PROJECT_SUCCESS':
            return [...state, action.project];
        case 'GET_PROJECTS_SUCCESS':
            return action.projects;
        case 'DELETE_PROJECT_SUCCESS':
            return state.filter(project => project._id !== action.deletedProjectId);
        case 'UPDATE_PROJECT_SUCCESS':
            return Immutable.update(state,
                (state.findIndex(project => project === action.project)), () => action.project);
        default:
            return state;
    }
}