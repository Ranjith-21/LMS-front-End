// import { Dropdown } from 'bootstrap';
import React from 'react'
import { Navbar, Table , Dropdown  } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

function EmployeeBatch2() {
  return (
    <div>
        <Navbar style={{height:'60px'}} >
  <Container fluid>
    <Navbar.Brand href="#home" style={{color:'orange'}}>Employee List <span style={{color:'black'}} >&#40;Batch ID&#41;</span></Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
      <div class="form-group has-search" style={{marginRight:'20px'}}>
    <span class="fa fa-search form-control-feedback"></span>
    <input type="text" class="form-control" placeholder="Search" style={{width:'400px'}} />
  </div>
      </Navbar.Text>
    </Navbar.Collapse>
    <Dropdown>
  <Dropdown.Toggle variant="secondary" id="dropdown-basic">
    Download
  </Dropdown.Toggle>
  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Employee Data</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Attendance Data</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Mock Data</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
    <Button variant="warning" style={{color:'white',marginLeft:'10px'}}  > Create Mock</Button>
  </Container>
</Navbar>
           <Table striped bordered hover>
                <thead>
                    <tr>
                        <th><input type='checkbox' /></th>
                        <th>No</th>
                        <th>Employee Id</th>
                        <th>Employee Name</th>
                        <th>Mock Taken</th>
                        <th>Mock Ratings</th>
                        <th>Attendance</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input type='checkbox' /></td>
                        <td>01</td>
                        <td>#15234654</td>
                        <td>abcd</td>
                        <td>2/3</td>
                        <td><i class="fa-solid fa-triangle-exclamation" style={{fontSize:'25px'}} ></i></td>
                        <td>13/23</td>
                        <td><select name="status" id="cars">
                            <option value="inProgress">InProgress</option>
                            <option value="pending">Pending</option>
                            <option value="completed">Completed</option>
                        </select></td>
                        <td>
                      <span style={{cursor:'pointer',color:'blue'}}  >&nbsp; Give Ratings</span><span style={{cursor:'pointer'}} >&nbsp;  &gt;</span>
                        </td>
                    </tr>
                </tbody>
            </Table>
    </div>
  )
}

export default EmployeeBatch2