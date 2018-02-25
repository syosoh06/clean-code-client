import React from 'react';
import Modal from 'react-modal';

function AddProjectModal({ isOpen, submitNewProjectForm, closeModal }) {
    let input;

    return (<Modal isOpen={ isOpen } ariaHideApp={false}>
        <div>
            <form onSubmit={e => {
                submitNewProjectForm(e, input.value);
                input.value = '';
                closeModal.call(this, e);
            }}>
                <input ref={ node => input = node }/>
                <button type="submit"> Enter Project Name </button>
                <div>
                    <button onClick={ closeModal.bind(this) }>Close</button>
                </div>
            </form>
        </div>
    </Modal>)
}

export default AddProjectModal;