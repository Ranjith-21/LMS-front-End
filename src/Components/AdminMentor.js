import React, { useState } from 'react'
import { Button, Container, Form, Modal, Navbar, Table } from 'react-bootstrap'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
// import { ModalComponent } from './atoms/ModalComponent';
import FormComponent from './atoms/FormComponent';
import ModalComponent from './atoms/ModalComponent';
import DropDown from './atoms/DropDown';
import InputComp from './atoms/InputComp';
// import { FormComponent } from './atoms/FormComponent';

function AdminMentor() {
  const [showAddNewMentor, setshowAddNewMentor] = useState(false)
  const [showEditMentor, setshowEditMentor] = useState(false)
  const [skills, setskills] = useState(['React','java','javascript'])


  let openEditMentor = () => {
    setshowEditMentor(true)
  }

  let closeEditMentor = () => {
    setshowEditMentor(false)
  }

  let handleCloseEdit = () => {
    closeEditMentor()
  }

  let openAddMentor = () => {
    setshowAddNewMentor(true)
  }

  let closeAddMentor = () => {
    setshowAddNewMentor(false)
  }

  let handleCloseAdd = () => {
    closeAddMentor()
  }


  const [chips] = useState(["react", 'java', 'python'])
 
  return (
    <div>
      <Navbar style={{ height: '60px' }} >
        <Container fluid>
          <Navbar.Brand href="#home" style={{ color: 'orange' }}>Mentor List</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <div class="form-group has-search" style={{ marginRight: '20px' }}>
                <span class="fa fa-search form-control-feedback"></span>
                <input type="text" class="form-control" placeholder="Search" style={{ width: '400px' }} />
              </div>
            </Navbar.Text>
          </Navbar.Collapse>
          <Button variant="warning" style={{ padding: '5px 10px', color: 'white' }} onClick={openAddMentor} ><i class="fa-solid fa-plus"></i> &nbsp; New Mentor</Button>
        </Container>
      </Navbar>
      <Table>
        <thead style={{ backgroundColor: '#e9eef7' }}>
          <tr>
            <th><input type='checkbox' /></th>
            <th>No</th>
            <th>Mentor Name</th>
            <th>Employee ID</th>
            <th>Email ID</th>
            <th>skills</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type='checkbox' /></td>
            <td>01</td>
            <td>Chandan</td>
            <td>#1235646</td>
            <td>abc@info.com</td>
            <td>
              <Stack direction="row" spacing={1}>
                {chips.map((val) => {
                  return <Chip style={{ backgroundColor: '#086288', color: 'white', padding: '2px 1px', fontSize: '12px' }} label={val} variant="outlined" />
                })}

              </Stack>
            </td>
            <td><button style={{ border: 'none', backgroundColor: 'white' }} onClick={openEditMentor} ><i class="fa-solid fa-pen"></i></button> &nbsp;  <button style={{ border: 'none', backgroundColor: 'white' }} ><i class="fa-solid fa-trash-can"></i></button></td>
          </tr>
        </tbody>
      </Table>

      <ModalComponent show={showAddNewMentor} onHide={handleCloseAdd} title={'Add New Mentor'} footerText={'Add'}>
        <Modal.Body>
          <Form>
            <InputComp  label={'Mentor Name'} className={'form-control mb-3'} type={'text'} />
            <InputComp  label={'Employee ID'} className={'form-control mb-3'} type={'text'} />
            <InputComp  label={'Email ID'} className={'form-control mb-3'} type={'email'} />
            <DropDown option={skills} label={'Skills'} />
          </Form>
        </Modal.Body>
      </ModalComponent>

      <ModalComponent show={showEditMentor} onHide={handleCloseEdit} title='Edit Mentor' footerText='Edit'>
        <Modal.Body>
          <Form>
          <InputComp  label={'Mentor Name'} className={'form-control mb-3'} type={'text'} />
            <InputComp  label={'Employee ID'} className={'form-control mb-3'} type={'text'} />
            <InputComp  label={'Email ID'} className={'form-control mb-3'} type={'email'} />
            <DropDown option={skills} label={'Skills'} />
          </Form>
        </Modal.Body>
      </ModalComponent>

    </div>
  )
}

export default AdminMentor