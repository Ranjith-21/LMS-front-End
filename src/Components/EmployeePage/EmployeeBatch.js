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
import { ModalComponent } from '../atoms/ModalComponent';
const text = <span>
  <tr>
    <td style={{ padding: '8px' }}>Initial Strength</td>
    <td>100</td>
  </tr>
  <tr>
    <td style={{ padding: '8px' }}>Dropout</td>
    <td>10</td>
  </tr>
  <tr>
    <td style={{ padding: '8px' }}>Terminated</td>
    <td>10</td>
  </tr>
  <tr>
    <td style={{ padding: '8px' }}>Absconding</td>
    <td>10</td>
  </tr>
  <tr>
    <td style={{ padding: '8px' }}>Present Strength</td>
    <td>70</td>
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
                  return <Chip style={{ backgroundColor: '#086288', color: 'white' }} label={val} variant="outlined" onDelete={handleDelete} />
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
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Reason</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
    </ModalComponent>



      {/* Attendance  */}

      
      <Modal size="xl" aria-labelledby="contained-modal-title-vcenter"
        centered show={showAttendance} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: '#94bbcb', fontSize: '15px' }} >Attendance for &#40;{date}&#41;</Modal.Title>
        </Modal.Header>
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
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose1}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default EmployeeBatch