import React, { useState } from 'react'
import { Button, Container, Form, Modal, Navbar, Table } from 'react-bootstrap'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

function AdminMentor() {
  const [showAddNewMentor, setshowAddNewMentor] = useState(false)
  const [showEditMentor, setshowEditMentor] = useState(false)


  let openEditMentor=()=>
  {
    setshowEditMentor(true)
  }

  let closeEditMentor=()=>
  {
    setshowEditMentor(false)
  }

  let handleCloseEdit=()=>
  {
    closeEditMentor()
  }

  let openAddMentor=()=>
  {
    setshowAddNewMentor(true)
  }

  let closeAddMentor=()=>
  {
    setshowAddNewMentor(false)
  }

  let handleCloseAdd=()=>
  {
    closeAddMentor()
  }


  const [chips] = useState(["react",'java','python'])
  const handleDelete = () => {
      console.info('You clicked the delete icon.');
    };
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
      <Table striped bordered hover>
        <thead>
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
                  return <Chip label={val} variant="outlined" onDelete={handleDelete} />
                })}

              </Stack>
            </td>
            <td><button style={{ border: 'none' }} onClick={openEditMentor} ><i class="fa-solid fa-pen"></i></button> &nbsp;  <button style={{ border: 'none' }} ><i class="fa-solid fa-trash-can"></i></button></td>
          </tr>
        </tbody>
      </Table>

      

      <Modal show={showAddNewMentor} onHide={handleCloseAdd}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Mentor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Mentor Name</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                autoFocus
              />
               </Form.Group>

               <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Employee ID</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                autoFocus
              />
               </Form.Group>

               <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email ID</Form.Label>
              <Form.Control
                type="email"
                placeholder=""
                autoFocus
              />
               </Form.Group>
             
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
              <Form.Label>Skills</Form.Label>
              <Form.Control
                list='skills'
                name='Skills'
                placeholder=""
                autoFocus
              />
              <datalist id='skills'>
                  <option value='React'/>
                  <option value='Java'/>
                  <option value='Javascript'/>
              </datalist>
              </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAdd}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseAdd}>
           Add
          </Button>
        </Modal.Footer>
      </Modal>





      <Modal show={showEditMentor} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Mentor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Mentor Name</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                autoFocus
              />
               </Form.Group>

               <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Employee ID</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                autoFocus
              />
               </Form.Group>

               <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email ID</Form.Label>
              <Form.Control
                type="email"
                placeholder=""
                autoFocus
              />
               </Form.Group>
             
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
              <Form.Label>Skills</Form.Label>
              <Form.Control
                list='skills'
                name='Skills'
                placeholder=""
                autoFocus
              />
              <datalist id='skills'>
                  <option value='React'/>
                  <option value='Java'/>
                  <option value='Javascript'/>
              </datalist>
              </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEdit}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseEdit}>
           Edit
          </Button>
        </Modal.Footer>
      </Modal>


    </div>
  )
}

export default AdminMentor