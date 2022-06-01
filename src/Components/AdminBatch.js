import React, { useState } from 'react'
import { Button, Container, Form, Modal, Navbar, Table } from 'react-bootstrap'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import FormComponent from './atoms/FormComponent';
import ModalComponent from './atoms/ModalComponent';
import DropDown from './atoms/DropDown';
import InputComponent from './atoms/InputComponent';
import InputComp from './atoms/InputComp';

function AdminBatch() {

  const [showAddNewBatch, setshowAddNewBatch] = useState(false)
  const [showEditBatch, setshowEditBatch] = useState(false)
  const [showStatus, setshowStatus] = useState(false)
  const [technoData, settechnoData] = useState(['React', 'java', 'Technologies'])
  const [mentor, setmentor] = useState(['satyam', 'shantala'])

  let openStatus = () => {
    setshowStatus(true)
  }

  let closeStatus = () => {
    setshowStatus(false)
  }

  let handleClose = () => {
    closeStatus()
  }

  let openEditBatch = () => {
    setshowEditBatch(true)
  }

  let hideEditBatch = () => {
    setshowEditBatch(false)
  }

  let handleCloseEdit = () => {
    hideEditBatch()
  }


  let openAddNewBatch = () => {
    setshowAddNewBatch(true)
  }

  let hideAddNewBatch = () => {
    setshowAddNewBatch(false)
  }

  let handleCloseAdd = () => {
    hideAddNewBatch()
  }

  const [chips] = useState(["react", 'java', 'python'])

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
                <input type="text" className="form-control" placeholder="Search" style={{ width: '400px' }} />
              </div>
            </Navbar.Text>
          </Navbar.Collapse>
          <Button variant="warning" style={{ padding: '5px 10px', color: 'white' }} onClick={openAddNewBatch} > <i class="fa-solid fa-plus"></i> &nbsp; New Batch</Button>
        </Container>
      </Navbar>

      <Table>
        <thead style={{ backgroundColor: '#e9eef7' }}>
          <tr>
            <th><input type='checkbox' /></th>
            <th>No</th>
            <th>Batch Id</th>
            <th>Batch Name</th>
            <th>Mentor Name</th>
            <th>Technologies</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type='checkbox' /></td>
            <td>01</td>
            <td>#15234654</td>
            <td>abcd</td>
            <td>Satyam</td>
            <td>
              <Stack direction="row" spacing={1}>
                {chips.map((val) => {
                  return <Chip style={{ backgroundColor: '#086288', color: 'white', padding: '2px 1px', fontSize: '12px' }} label={val} variant="outlined" />
                })}
              </Stack>
            </td>
            <td>12 Mar 2022</td>
            <td>04 Dec 2022</td>
            <td><select name="status" id="cars" style={{ border: 'none' }} onChange={openStatus}>
              <option value="inProgress">InProgress</option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select></td>
            <td><button style={{ border: 'none', backgroundColor: 'white' }} onClick={openEditBatch} ><i class="fa-solid fa-pen"></i></button> &nbsp;  <button style={{ border: 'none', backgroundColor: 'white' }} ><i class="fa-solid fa-trash-can"></i></button></td>
          </tr>
        </tbody>
      </Table>

      <ModalComponent show={showAddNewBatch} onHide={handleCloseAdd} title='Add New Batch' footerText='Create' handleClose={handleCloseAdd}>
        <Modal.Body>
          <Form>
            <InputComp label={'Batch Name'} type={'text'} className={'form-control mb-3'} />
            <DropDown option={mentor} label={'Mentor Name'} />
            <DropDown option={technoData} label={'Technologies'} />
            <InputComp label={'Start Date'} type={'date'} className={'form-control mb-3'} />
            <InputComp label={'End Date'} type={'date'} className={'form-control'} />
          </Form>
        </Modal.Body>
      </ModalComponent>

      <ModalComponent show={showEditBatch} onHide={handleCloseEdit} title={'Edit Batch'} footerText={'Edit'} handleClose={handleCloseEdit}>
        <Modal.Body>
          <Form>
            <InputComp label={'Batch Name'} type={'text'} className={'form-control mb-3'} />
            <DropDown option={mentor} label={'Mentor Name'} />
            <DropDown option={technoData} label={'Technologies'} />
            <InputComp label={'Start Date'} type={'date'} className={'form-control mb-3'} />
            <InputComp label={'End Date'} type={'date'} className={'form-control'} />
          </Form>
        </Modal.Body>
      </ModalComponent>

      <ModalComponent show={showStatus} onHide={handleClose} title={'Reason to Change Status'} footerText={'Submit'}>
        <Modal.Body>
          <Form>
            <FormComponent className={"mb-3"} controlId={"exampleForm.ControlTextarea1"} label='Reason' as={'textarea'} rows={3} />
          </Form>
        </Modal.Body>
      </ModalComponent>

    </div>
  )
}

export default AdminBatch