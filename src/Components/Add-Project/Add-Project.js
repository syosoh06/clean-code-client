import React from 'react';
import {connect} from "react-redux";
import { addProjectAction , getProjectsAction , deleteProjectAction} from '../../actions/project-actions/project-actions';
import ProjectsList from "../Projects-List/Projects-List";
import AddProjectModal from "../Add-Project-Modal/Add-Project-Modal";

const userObj = {
    "name": "Bebo",
    "userId": null,
    "password": "Bebo",
    "email": "Bebo@bebo.com",
    "dateCreated": "2018-01-21T07:40:01.519Z",
    "dateModified": "2018-01-21T07:40:01.519Z"

};
function openModal(ev) {
    ev.preventDefault();

    this.setState(prevState => ({
        isOpen: !prevState.isOpen
    }))
}

export class AddProject extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            projectName: ''
        };

        this.submitNewProjectForm = this.submitNewProjectForm.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.deleteProject = this.deleteProject.bind(this);
    }

    componentDidMount() {
        this.props.getProjects();
    }

    submitNewProjectForm(e, projectName) {
        e.preventDefault();
        if (!projectName.trim()) {
            return
        }
        this.props.submitProject(projectName);
    }

    closeModal(ev) {
        ev.preventDefault();

        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }))
    }

    deleteProject(ev, id) {
        debugger;
        ev.preventDefault();

        this.props.deleteProject(id);
    }

    render() {
        return (<section>
            <button onClick={openModal.bind(this)}>Add Project</button>
            <AddProjectModal isOpen = {this.state.isOpen} submitNewProjectForm = {this.submitNewProjectForm} closeModal = {this.closeModal}/>
            <ProjectsList projects = { this.props.projects } deleteProject = { this.deleteProject } />
        </section>);
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        submitProject: (name, user = userObj) => {
            dispatch(addProjectAction({name, user}));
        },
        getProjects: () => dispatch(getProjectsAction()),
        deleteProject: (id) => dispatch(deleteProjectAction(id))
    };
};

const mapStateToProps = (state) => ({
    projects: state.projects
});

export default connect(mapStateToProps, mapDispatchToProps)(AddProject);