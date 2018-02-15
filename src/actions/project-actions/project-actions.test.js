import * as projectsService from '../../services/projects-service/projects-service';
import { addProjectAction } from './project-actions';
import sinon from 'sinon';

describe('async actions', () => {

    let sandbox,
        dispatchStub,
        addProjectStub;

    beforeEach(() => {
        sandbox = sinon.createSandbox();
        dispatchStub = sandbox.stub();
        addProjectStub = sandbox.stub(projectsService, 'addProject')
            .resolves({});
    });


    afterEach(() => {
        sandbox.restore();
    });

    it.only('creates ADD_PROJECT_SUCCESS when adding a project has been successfully completed', () => {


        const expectedActions =
            { type: 'ADD_PROJECT_SUCCESS' }
        ;
        const project = {
          name: 'project1'
        };

        addProjectAction(project)(dispatchStub).then(()=>{

            sinon.assert.calledOnce(dispatchStub);
            sinon.assert.calledWithExactly(dispatchStub, expectedActions);
        });

    });
});