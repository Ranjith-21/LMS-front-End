import React, { useState } from 'react'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Navbar, Table, Modal } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
// import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import './EmployeePage.css'
import { Tooltip } from 'antd';
// import { ModalComponent } from '../atoms/ModalComponent';
import FormComponent from '../atoms/FormComponent';
import ModalComponent from '../atoms/ModalComponent';
import InputComp from '../atoms/InputComp';
// import { FormComponent } from './../atoms/FormComponent';
const text = <span className='emptext'>
  <tr>
    <td>Initial Strength</td>
    <td style={{color:'#5593ad'}}>100</td>
  </tr>
  <tr>
    <td>Dropout</td>
    <td style={{color:'#ee5074'}}>10</td>
  </tr>
  <tr>
    <td>Terminated</td>
    <td style={{color:'#ee5074'}}>10</td>
  </tr>
  <tr>
    <td>Absconding</td>
    <td style={{color:'#ee5074'}}>10</td>
  </tr>
  <tr>
    <td>Present Strength</td>
    <td style={{color:'#5593ad'}}>70</td>
  </tr>
</span>;

function EmployeeBatch() {
  const [showStatus, setshowStatus] = useState(false)
  const [showAttendance, setshowAttendance] = useState(false)
  let date = new Date()
  date = date.toLocaleDateString()

  let openStatus = () => {
    setshowStatus(true)
  }

  let closeStatus = () => {
    setshowStatus(false)
  }

  let handleClose = () => {
    closeStatus()
  }

  let openAttendance = () => {
    setshowAttendance(true)
  }

  let closeAttendance = () => {
    setshowAttendance(false)
  }

  let handleClose1 = () => {
    closeAttendance()
  }



  const [chips] = useState(["react", 'java', 'python'])
  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  let navigate = useNavigate()

  let navigateToBatch2 = () => {
    navigate('/Mentor/EmployeeList')
  }


  return (
    <div>
      <Navbar style={{ height: '60px' }} >
        <Container fluid>
          <Navbar.Brand href="#home" style={{ color: 'orange' }}>Batch List</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <div class="form-group has-search" style={{ marginRight: '20px' }}>
                <span class="fa fa-search form-control-feedback"></span>
                <input type="text" class="form-control" placeholder="Search" style={{ width: '400px' }} />
              </div>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Table className='batchTable' >
        <thead style={{ backgroundColor: '#e9eef7' }}>
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
                {chips.map((val) => {
                  return <Chip style={{ backgroundColor: '#086288', color: 'white' }} label={val} variant="outlined"  />
                })}

              </Stack>
            </td>
            <td>12 Mar 2022</td>
            <td>04 Dec 2022</td>
            <td><select style={{ border: 'none', backgroundColor: 'white' }} name="status" id="cars" onChange={openStatus} >
              <option value="inProgress">InProgress</option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select></td>
            <td>

              <Tooltip placement="bottom" title={text}> 
                <button className='btntool' >
                  <i class="fa-solid fa-triangle-exclamation" style={{ fontSize: '25px' }}></i>
                </button>
              </Tooltip>

              &nbsp;
              <button className='attbtn' onClick={openAttendance}  >&nbsp; Attendance</button> &nbsp;
              {/* <span style={{cursor:'pointer'}} onClick={navigateToBatch2} >&nbsp;  &gt;</span> */}
              <i onClick={navigateToBatch2} class="fa-solid fa-greater-than"></i>
            </td>
          </tr>
        </tbody>
      </Table>


    <ModalComponent show={showStatus} onHide={handleClose} title='Reason to Change Status' footerText='Submit' handleClose={handleClose}>
    <Modal.Body>
          <Form>
          <FormComponent className={"mb-3"} controlId={"exampleForm.ControlTextarea1"} label='Reason' as={'textarea'} rows={3} />
          </Form>
        </Modal.Body>
    </ModalComponent>



      {/* Attendance  */}

      <ModalComponent show={showAttendance} onHide={handleClose1} size='xl' title={`Attendance for (${date})`} footerText='Submit' handleClose={handleClose1} arialabelledby='contained-modal-title-vcenter'>
      <Modal.Body>
          <Table striped>
            <thead>
              <tr>
                <th>No.</th>
                <th>Employee ID</th>
                <th>Employee Name</th>
                <th>Attendance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>123654646</td>
                <td>AVSDFS</td>
                <td>
                  <div className='d-flex'>
                    <p style={{ color: '#888888', fontSize: '15px' }} > M &nbsp;</p>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                      />
                    </div>
                    &nbsp;
                    <div className="form-check form-switch form-check1 form-switch1">
                      <span style={{ color: '#888888', fontSize: '15px' }} >&nbsp;N</span>
                      <input
                        className="form-check-input form-check-input1 "
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                      />
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
      </ModalComponent>

    </div>
  )
}

export default EmployeeBatch