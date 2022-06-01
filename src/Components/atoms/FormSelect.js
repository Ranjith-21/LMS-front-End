import React from 'react'
import { Form } from 'react-bootstrap';

const FormSelect = (
    {
        style={},
        as={},
        className='labelForm',
        label='',
        selectClass='',
        name='',
        value='',
        onChange=()=>
        {

        },
        options=[]

    }
) => {
  return (
    <>
          <Form.Group
              style={style}
              as={as}
              controlId="formGridEmail"
            >
              <Form.Label
                className={className}
              >
               {label}
              </Form.Label>
              <Form.Select
                className={selectClass}
                aria-label="Default select example"
                name={name}
                value={value}
                onChange={onChange}
              >
                  {options.map((val,ind)=>
                  {
                      return <option value={val} key={ind} >{val}</option>
                  })}
              </Form.Select>
            </Form.Group>

    </>
  )
}

export default FormSelect