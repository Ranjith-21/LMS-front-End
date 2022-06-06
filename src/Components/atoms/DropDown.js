import React from 'react'
import { Form } from 'react-bootstrap';

const DropDown = (
    {
        option=[],
        label='',
        style={},
        name='',
        value={},
        onChange=()=>{}
    }
) => {
  return (
    <div>
         <Form.Group style={style} className='mb-3' >
              <Form.Label>{label} </Form.Label>
                    <Form.Select
            aria-label="Default select example"
            name={name}
            value={value}
            onChange={onChange}
          >
              {option.map((val,ind)=>
              {
                return  <option key={ind} value={val} >{val}</option>
              })}
            </Form.Select>
            </Form.Group>
    </div>
  )
}

export default DropDown