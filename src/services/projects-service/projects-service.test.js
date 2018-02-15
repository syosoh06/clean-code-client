import sinon from 'sinon';
import { addProject } from './projects-service';

const sandbox = sinon.createSandbox();

describe('projects service', () => {
   beforeEach(() => {
       sandbox.stub(window, 'fetch').resolves({
           json: sandbox.stub().returns([{ "name": "Project" }])
       });
   });

   afterEach(() => {
       sandbox.restore();
   });

    it('should return an array of projects', () => {
        addProject({}).then(response => {
            expect(response).toEqual([{ "name": "Project" }])
        })
    })
});