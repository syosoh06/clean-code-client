import sinon from 'sinon';
import projectService from './projects-service';

const sandbox = sinon.createSandbox();

describe.only('projects service', () => {
   beforeEach(() => {
       sandbox.stub(window, 'fetch').resolves({
           json: sandbox.stub().returns([{ "name": "Project" }])
       });
   });

   afterEach(() => {
       sandbox.restore();
   });

    it('should return an array of projects', () => {
        projectService.addProject({}).then(response => {
            expect(response).toEqual([{ "name": "Project" }])
        })
    })
});