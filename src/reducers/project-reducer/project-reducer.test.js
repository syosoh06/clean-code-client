import projectReducer from './project-reducer';

describe('projects educer', () => {
    it('should return the initial state when no recognized action is emitted', () => {
        expect(projectReducer([], {})).toEqual([]);
    });

    it('should return the initial state when `ADD_PROJECT_SUCCESS` action is emitted', () => {
        expect(projectReducer([], { type: 'ADD_PROJECT_SUCCESS'})).toEqual([]);
    });
});