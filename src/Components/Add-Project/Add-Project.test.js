import React from 'react';
import { shallow } from 'enzyme';
import { AddProject } from './Add-Project';
import sinon from 'sinon';

const sandbox = sinon.sandbox.create();

describe('AddProject', () => {
    afterEach(() => {
        sandbox.restore();
    });

    function anyProps() {
        return {
            getProjects: sandbox.stub()
        };
    }

    function render(props = anyProps()) {
        return shallow(<AddProject {...props}/>);
    }

    it('should contain an add button', () => {
        expect(render().find('button').text()).toEqual('Add Project');
    });


    it('should dispatch addProject action on the click of a submit button', () => {

    });

    it('should close the modal when close button is clicked', () => {

    });

    it('should take you to my projects page after successfully adding a project', () => {

    })


});
