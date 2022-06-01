import React from 'react'
import { Form } from 'react-bootstrap';

const EmployeeDropDown = (
    {
        style={},
        as={},
        labelClass='',
        label='',
        selectClass='',
        name='',
        value,
        onChange=()=>
        {

        },
        option=[]
    }
) => {
  return (
    <div>
         <Form.Group
              style={style}
              as={as}
              controlId="formGridEmail"
            >
              <Form.Label
              className={labelClass}
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
                  {option.map((val,ind)=>
                  {
                      return <option value={val} key={ind}>{val}</option>
                  })}
              </Form.Select>
            </Form.Group>
    </div>
  )
}

export default EmployeeDropDown