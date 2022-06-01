// import { Dropdown } from 'bootstrap';
import React from 'react'
import { Navbar, Table, Dropdown, FormGroup } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { useState } from 'react';
import { Tooltip } from 'antd';
// import { ModalComponent } from '../atoms/ModalComponent';
import FormComponent from '../atoms/FormComponent';
import ModalComponent from '../atoms/ModalComponent';
import DropDown from '../atoms/DropDown';
import InputComp from '../atoms/InputComp';
// import { FormComponent } from '../atoms/FormComponent';


const text = <span>
  <tr>
    <td style={{padding:'8px'}}>Mock 1</td>
    <td style={{color:'#24b83c'}}>Excellent</td>
  </tr>
  <tr>
    <td style={{padding:'8px'}}>Mock 2</td>
    <td style={{color:'#5b99eb'}}>Good</td>
  </tr>
  <tr>
    <td style={{padding:'8px'}}>Mock 3</td>
    <td style={{color:'#dda23c'}}>Above Average</td>
  </tr>
  <tr>
    <td style={{padding:'8px'}}>Mock 4</td>
    <td style={{color:'#e0be16'}}>Average</td>
  </tr>
  <tr>
    <td style={{padding:'8px'}}>Mock 5</td>
    <td style={{color:'#ec3e66'}}>Below Average</td>
  </tr>
</span>;

function EmployeeBatch2() {
  const [showStatus, setshowStatus] = useState(false)
  const [showMock, setshowMock] = useState(false)
  const [showRating, setshowRating] = useState(false)
  const [batchid, setbatchid] = useState([1,2,3,4])
  const [technoData, settechnoData] = useState([
    "Java",'JavaScript','React'
  ])
  const [panel, setpanel] = useState([1,2,3,4])

  let openRatings = () => {
    setshowRating(true)
  }

  let closeRating = () => {
    setshowRating(false)
  }

  let handleClose2 = () => {
    closeRating()
  }


  let openStatus = () => {
    setshowStatus(true)
  }

  let closeStatus = () => {
    setshowStatus(false)
  }

  let handleClose = () => {
    closeStatus()
  }

  let openMock = () => {
    setshowMock(true)
  }

  let closeMock = () => {
    setshowMock(false)
  }

  let handleClose1 = () => {
    closeMock()
  }



  return (
    <div>
      <Navbar style={{ height: '60px' }} >
        <Container fluid>
          <Navbar.Brand href="#home" style={{ color: 'orange' }}>Employee List <span style={{ color: 'black' }} >&#40;Batch ID&#41;</span></Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <div class="form-group has-search" style={{ marginRight: '20px' }}>
                <span class="fa fa-search form-control-feedback"></span>
                <input type="text" class="form-control" placeholder="Search" style={{ width: '400px' }} />
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
          <Button variant="warning" style={{ color: 'white', marginLeft: '10px' }} onClick={openMock}  > Create Mock</Button>
        </Container>
      </Navbar>
      <Table className='batch2Table' >
        <thead style={{ backgroundColor: '#e9eef7' }}>
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
            <td>
              <Tooltip placement="bottom" title={text}>
                <button className='btntool' >
                  <i class="fa-solid fa-triangle-exclamation" style={{ fontSize: '25px' }}></i>
                </button>
              </Tooltip>
            </td>
            <td>13/23</td>
            <td><select style={{ border: 'none', backgroundColor: 'white' }} name="status" id="cars" onChange={openStatus}>
              <option value="inProgress">InProgress</option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select></td>
            <td>
              <button onClick={openRatings} className='attbtn'>Give Ratings</button> &nbsp;
              <i class="fa-solid fa-greater-than"></i>
            </td>
          </tr>
        </tbody>
      </Table>

      {/* Reason to Change status */}
      <ModalComponent show={showStatus} onHide={handleClose} title='Reason to Change Status' footerText='Submit'>
      <Modal.Body>
          <Form>
            <FormComponent className="mb-3" controlId="exampleForm.ControlTextarea1" as="textarea" rows={3} label="Reason"/>
          </Form>
        </Modal.Body>
      </ModalComponent>


      {/* Add Mock Modal */}
      <ModalComponent show={showMock} onHide={handleClose1} title='Add Mock' footerText='create'>
      <Modal.Body> 
          <Form>
          <DropDown label={'Batch ID'} option={batchid} />
          <InputComp  label={'Mock No'} className={'form-control mb-3'} type={'number'} />
            <DropDown label={'Technologies'} option={technoData} />
            <DropDown label={'Panel'} option={panel} />
            <InputComp  label={'Date & Time'} className={'form-control mb-3'} type={'datetime-local'} />
          </Form>
        </Modal.Body>
      </ModalComponent>

  
      {/* Give Ratings  */}

      <ModalComponent show={showRating} size='lg' onHide={handleClose2} title='Mock Ratings' footerText='Submit'  >
      <Modal.Body>
          <Form>
            <Form.Group className='d-flex'>
              <Form.Group style={{ width: '50%' }} >
                <Form.Label>Mock Type</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                >
                  <option></option>
                  <option value="1">Mock</option>
                  <option value="2">ReMock</option>
                </Form.Select>
              </Form.Group>

{/* <FormComponent style={{ width: '50%' }} className="mb-3 mx-2" controlId="exampleForm.ControlInput1" label='Mock Taken By'  /> */}
              <Form.Group style={{ width: '50%' }} className="mb-3 mx-2" controlId="exampleForm.ControlInput1">
                <Form.Label>Mock Taken By</Form.Label>
                <Form.Control
                  type="text"
                />
              </Form.Group>
            </Form.Group>

            <Form.Group className='d-flex'>
              <FormGroup style={{ width: '50%' }}>
                <Form.Label>Technologies</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                >
                  <option></option>
                  <option value="1">React</option>
                  <option value="2">JavaScript</option>
                  <option value="3">Java</option>
                </Form.Select>
              </FormGroup>

              <Form.Group style={{ width: '50%' }} className="mb-3 mx-2" controlId="exampleForm.ControlInput1">
                <Form.Label>Practical Knowledge &#40;out of 100&#41;</Form.Label>
                <Form.Control
                  type="text"
                />
              </Form.Group>
            </Form.Group>

            <FormGroup className='d-flex'>
              <Form.Group style={{ width: '50%' }} className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Practical Knowledge &#40;out of 100&#41;</Form.Label>
                <Form.Control
                  type="text"
                />
              </Form.Group>


              <Form.Group style={{ width: '50%' }} className="mb-3 mx-2" >
                <Form.Label>OverAll Feedback</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                >
                  <option></option>
                  <option value="1">Excellent &#40;90 Above&#41;</option>
                  <option value="2">Good &#40;80-89&#41;</option>
                  <option value="3">Above Average &#40;70-79&#41;</option>
                  <option value="3">Average &#40;60-69&#41;</option>
                  <option value="3">Below Average &#40;50-59&#41;</option>
                </Form.Select>
              </Form.Group>
            </FormGroup>

            <FormComponent className={"mb-3"} controlId={"exampleForm.ControlTextarea1"} label='Reason' as={'textarea'} rows={3} />
          </Form>
        </Modal.Body>
      </ModalComponent>
    </div>
  )
}

export default EmployeeBatch2