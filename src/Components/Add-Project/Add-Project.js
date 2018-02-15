import React from 'react';
import Modal from 'react-modal';

function openModal(ev) {
    ev.preventDefault();

    this.setState(prevState => ({
        isOpen: !prevState.isOpen
    }))
}

class AddProject extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        }
    }

    render() {
        return (<section>
            <button onClick={openModal.bind(this)}>Add Project</button>
            <Modal isOpen={ this.state.isOpen }>
                <section>
                    <form>
                        <div>
                            Enter Project Name
                        </div>
                        <div>
                            <input type="text"/>
                        </div>
                        <div>
                            <input type="submit"/>
                        </div>
                    </form>
                </section>
            </Modal>
        </section>);
    }

}

export default AddProject;