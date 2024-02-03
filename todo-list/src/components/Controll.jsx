import React from 'react'
import Form from 'react-bootstrap/Form';
export default function () {
    return (
        <div className='d-flex'>
            <p>Move done items at the end?</p>
            <Form.Check
              type="switch"
              id="custom-switch"
            />
          </div>

    )
}
