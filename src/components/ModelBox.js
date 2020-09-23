import React, {useState} from 'react';
import Modal from 'react-modal'

const ModelBox = () => {
    const [modalIsOpen, setModelIsOpen] = useState(false)    
    return (
        <div>
            <button onClick={() => {setModelIsOpen(true)}}>Click me</button>
            <Modal isOpen = {modalIsOpen} >
                <h2> Modal Text </h2>
                <p> Hello React </p>

                <button onClick={() => {setModelIsOpen(false)}}>Close </button>
            </Modal>
        </div>
    );
}
 
export default ModelBox;