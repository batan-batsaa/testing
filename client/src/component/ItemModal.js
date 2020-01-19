import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { addItems } from '../actions/itemActions';

function ItemModal({ addItems }) {
    const [state, setState] = useState({
        modal: false,
        name: ""
    })

    const toggle = () => {
        setState({ ...state, modal: !state.modal })
    }

    const handleChange = e => {
        setState({ ...state, [e.target.name]: e.target.value });
    }

    const handleSubmit = e => {
        e.preventDefault();
        const newItem = {
            id: 3,
            name: state.name
        }
        addItems(newItem);

        toggle();
    }
    return (
        <div>
            <Button color = "dark" style = {{ marginBottom: "2rem" }} onClick = { toggle } >Add Item</Button>
            <Modal isOpen = { state.modal } toggle = { toggle }>
                <ModalHeader toggle = { toggle }>
                    Add Item to the Shopping List
                </ModalHeader>
                <ModalBody>
                    <Form onSubmit = { handleSubmit }>
                        <FormGroup>
                            <Label for = "item">Item</Label>
                            <Input type = "text" name = "name" id = "item" placeholder = "Your Item..." onChange = { handleChange } />
                            <Button color = "dark" style = {{ marginTop: "2rem" }} block >Add</Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )
}

const mapStateToProps = state => ({
    ids: state.item
})

export default connect(mapStateToProps, { addItems })(ItemModal);
