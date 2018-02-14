import React from 'react';
import Modal from 'react-modal';

class AddProjectModal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            <Modal isOpen={ this.props.isOpen }/>
        </div>);
    }
}

export default AddProjectModal;