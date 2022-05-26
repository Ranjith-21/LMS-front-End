import React, { useState } from 'react'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Navbar, Table } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
// import { Button } from 'react-bootstrap';

function EmployeeBatch() {
    const [chips] = useState(["react",'java','python'])
    const handleDelete = () => {
        console.info('You clicked the delete icon.');
      };
  return (
    <div>
          <Navbar style={{height:'60px'}} >
  <Container fluid>
    <Navbar.Brand href="#home" style={{color:'orange'}}>Batch List</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
      <div class="form-group has-search" style={{marginRight:'20px'}}>
    <span class="fa fa-search form-control-feedback"></span>
    <input type="text" class="form-control" placeholder="Search" style={{width:'400px'}} />
  </div>
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>
           <Table striped bordered hover>
                <thead>
                    <tr>
                        <th><input type='checkbox' /></th>
                        <th>No</th>
                        <th>Batch Id</th>
                        <th>Batch Name</th>
                        <th>Technologies</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Status</th>
                        <th>Batch Strength</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input type='checkbox' /></td>
                        <td>01</td>
                        <td>#15234654</td>
                        <td>abcd</td>
                        <td>
                        <Stack direction="row" spacing={1}>
                            {chips.map((val)=>
                            {
                                return <Chip label={val} variant="outlined" onDelete={handleDelete} />
                            })}
      
    </Stack>
                        </td>
                        <td>12 Mar 2022</td>
                        <td>04 Dec 2022</td>
                        <td><select name="status" id="cars">
                            <option value="inProgress">InProgress</option>
                            <option value="pending">Pending</option>
                            <option value="completed">Completed</option>
                        </select></td>
                        <td>
                        <i class="fa-solid fa-triangle-exclamation" style={{fontSize:'25px'}} ></i>
                      <span style={{cursor:'pointer'}}  >&nbsp; Attendance</span><span style={{cursor:'pointer'}} >&nbsp;  &gt;</span>
                        </td>
                    </tr>
                </tbody>
            </Table>
      
    </div>
  )
}

export default EmployeeBatch