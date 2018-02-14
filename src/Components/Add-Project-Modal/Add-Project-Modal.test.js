import React from 'react';
import { shallow } from 'enzyme';
import AddProjectModal from './Add-Project-Modal';
import Modal from 'react-modal';

let addProjectModal;

describe('AddProjectModal', () => {
    beforeEach(() => {
        addProjectModal = shallow(<AddProjectModal />);
    });

    it('should contain a Modal Component', () => {
        expect(addProjectModal.find(Modal).exists()).toBe(true);
    });

    it('should contain a form component', () => {

    });

    it('should dispatch addProject action on the click of a submit button', () => {

    })
});
