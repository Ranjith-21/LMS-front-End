import React from 'react'
import { Form } from 'react-bootstrap';

function FormComponent(
  {
    children,
    className='',
    controlId='',
    type='',    
    placeholder="", 
    list='',
    label='',
    name='',
    as={},
    rows={},
    style={},
    value={},
    onChange=()=>{}
  }
) {
  return (
    <div>
       <Form.Group className={className} controlId={controlId} style={style}>
              <Form.Label>{label}</Form.Label>
              <Form.Control
                type={type}
                placeholder={placeholder}
                autoFocus
                list={list}
                name={name}
                as={as}
                rows={rows}
                value={value}
                onChange={onChange}
              />{children}   
              </Form.Group>
    </div>
  )
}

export default FormComponent
