import React from 'react'

export default function ListTask() {
    return (
       <div>
            <Row>
                <Col sm={8}>Code a todo list</Col>
                <Col sm={4} style={{ textAlign: 'right' }}>
                    <input type="checkbox" name="" class="checkbox" />
                    <a><i class="fa-solid fa-trash fa-xs"></i></a>
                </Col>
            </Row>
        </div>
    )
}
