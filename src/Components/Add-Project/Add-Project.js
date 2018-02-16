import React from 'react';
import Modal from 'react-modal';
import {connect} from "react-redux";
// import createHistory from "history/createBrowserHistory";
import { addProjectAction } from '../../actions/project-actions/project-actions';

const userObj = {
    "name": "Bebo",
    "userId": null,
    "password": "Bebo",
    "email": "Bebo@bebo.com",
    "dateCreated": "2018-01-21T07:40:01.519Z",
    "dateModified": "2018-01-21T07:40:01.519Z"

};
// const history = createHistory();

function openModal(ev) {
    ev.preventDefault();

    this.setState(prevState => ({
        isOpen: !prevState.isOpen
    }))
}

function closeModal(ev) {
    ev.preventDefault();

    this.setState(prevState => ({
        isOpen: !prevState.isOpen
    }))
}

function handleChange(event) {
    this.setState({value: event.target.value});
}

export class AddProject extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            projectName: ''
        }
    }

    render() {
        return (<section>
            <button onClick={openModal.bind(this)}>Add Project</button>
            <Modal isOpen={ this.state.isOpen }>
                <section>
                    <form onSubmit={this.props.submitProject(this.state.projectName)}>
                        <div>
                            Enter Project Name
                        </div>
                        <div>
                            <input type="text" value={this.state.projectName} onChange={handleChange.bind(this)}/>
                        </div>
                        <div>
                            <input type="submit" value="Submit"/>
                        </div>
                        <div>
                            <button onClick={closeModal.bind(this)}>Close</button>
                        </div>
                    </form>
                </section>
            </Modal>
        </section>);
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        submitProject: (name, user = userObj) => {
            debugger;
            dispatch(addProjectAction({name, user}));
            // history.push("/projects");
        }
    };
};

export default connect(null, mapDispatchToProps)(AddProject);