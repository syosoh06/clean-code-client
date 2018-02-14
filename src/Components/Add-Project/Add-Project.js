import React from 'react';
import AddProjectModal from '../Add-Project-Modal/Add-Project-Modal';

function openModal(ev) {
    ev.preventDefault();

    this.setState(prevState => ({
        modalOpen: !prevState.modalOpen
    }))
}

class AddProject extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            modalOpen: false
        }
    }

    render() {
        return (<section>
            <button onClick={openModal.bind(this)}>Add Project</button>
            <AddProjectModal isOpen={ this.state.modalOpen }/>
        </section>);
    }

}

export default AddProject;