import React from 'react';
import { shallow } from 'enzyme';
import { AddProject } from './Add-Project';
import Modal from 'react-modal';

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
        expect(addProject.state().isOpen).toBe(true);
    });

    it('should contain a Modal Component', () => {
        expect(addProject.find(Modal).exists()).toBe(true);
    });

    it('should contain a form component', () => {
        expect(addProject.find('form').exists()).toBe(true);
    });

    it('should dispatch addProject action on the click of a submit button', () => {

    });

    it('should close the modal when close button is clicked', () => {

    });

    it('should take you to my projects page after successfully adding a project', () => {

    })


});
