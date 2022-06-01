import React from 'react'
import { Form } from 'react-bootstrap';

const FormControl = (
    {
        style={},
        as={},
        className='labelForm',
        classControl='addressForm',
        type='',
        name='',
        value={},
        onChange=()=>
        {

        },
        label=''
    }
) => {
  return (
    <>
         <Form.Group
              style={style}
              as={as}
              controlId="formGridPassword"
            >
              <Form.Label
                className={className}
              >
                {label}
              </Form.Label>
              <Form.Control
                className={classControl}

                type={type}
                name={name}
                value={value}
                onChange={onChange}
              />
            </Form.Group>
    </>
  )
}

export default FormControl