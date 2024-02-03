import React from 'react'

export default function AddNewTask() {
    return (
        <div className='footer'>
            <span>Add to the todo list</span>
            <InputGroup className="mb-3">
                <Form.Control
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <Button variant="outline-light" id="button-addon2">
                    Button
                </Button>
            </InputGroup>
        </div>
    )
}

