import React from 'react';
import { shallow } from 'enzyme';
import AddProject from './Add-Project';
import AddProjectModal from '../Add-Project-Modal/Add-Project-Modal';

let addProject;

describe('AddProject', () => {
    beforeEach(() => {
        addProject = shallow(<AddProject />);
    });

    it('should contain an add button', () => {
        expect(addProject.find('button').text()).toEqual('Add Project');
    });

    it('should set `modalOpen` to true on the click of an add button', () => {
        addProject.find('button').simulate('click', { preventDefault: jest.fn() });
        expect(addProject.state().modalOpen).toBe(true);
    });

    it('should contain a `Add-Project-Modal` component', () => {
        expect(addProject.find(AddProjectModal).exists()).toBe(true);
    });

    it('should send a boolean flag to `Add-Project-Modal`', () => {

    });
});
