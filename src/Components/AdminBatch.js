import React, { useState } from 'react'
import { Button, Container, Form, Modal, Navbar, Table } from 'react-bootstrap'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
// import './AdminBatch.css'

function AdminBatch() {
    const [showAddNewBatch, setshowAddNewBatch] = useState(false)
    const [showEditBatch, setshowEditBatch] = useState(false)

    let openEditBatch=()=>
    {
        setshowEditBatch(true)
    }

    let hideEditBatch=()=>
    {
        setshowEditBatch(false)
    }

    let handleCloseEdit=()=>
    {
        hideEditBatch()
    }


    let openAddNewBatch=()=>
    {
        setshowAddNewBatch(true)
    }

    let hideAddNewBatch=()=>
    {
        setshowAddNewBatch(false)
    }

    let handleCloseAdd=()=>
    {
        hideAddNewBatch()
    }



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
    <Button variant="warning" style={{padding:'5px 10px',color:'white'}} onClick={openAddNewBatch} > <i class="fa-solid fa-plus"></i> &nbsp; New Batch</Button>
  </Container>
</Navbar>
            <Table striped bordered hover>
                <thead>
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
                        <td><button style={{border:'none'}} onClick={openEditBatch} ><i class="fa-solid fa-pen"></i></button> &nbsp;  <button style={{border:'none'}} ><i class="fa-solid fa-trash-can"></i></button></td>
                    </tr>
                </tbody>
            </Table>
        

        
            <Modal show={showAddNewBatch} onHide={handleCloseAdd}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Batch</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Batch Name</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                autoFocus
              />
               </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
              <Form.Label>Mentor Name</Form.Label>
              <Form.Control
                list='Mentors'
                name='MentorsName'
                placeholder=""
                autoFocus
              />
              <datalist id='Mentors'>
                  <option value='Satyam'/>
                  <option value='Ranjith'/>
                  <option value='Hemanth'/>
              </datalist>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
              <Form.Label>Technologies </Form.Label>
              <Form.Control
                list='technologies'
                name='TechnologiesData'
                placeholder=""
                autoFocus
              />
              <datalist id='technologies'>
                  <option value='React'/>
                  <option value='Java'/>
                  <option value='Javascript'/>
              </datalist>
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="date"
                placeholder=""
                autoFocus
              />
               </Form.Group>
              
               <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>End Date</Form.Label>
              <Form.Control
                type="date"
                placeholder=""
                autoFocus
              />
               </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAdd}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseAdd}>
           Create
          </Button>
        </Modal.Footer>
      </Modal>


      <Modal show={showEditBatch} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Batch</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Batch Name</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                autoFocus
              />
               </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
              <Form.Label>Mentor Name</Form.Label>
              <Form.Control
                list='Mentors'
                name='MentorsName'
                placeholder=""
                autoFocus
              />
              <datalist id='Mentors'>
                  <option value='Satyam'/>
                  <option value='Ranjith'/>
                  <option value='Hemanth'/>
              </datalist>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
              <Form.Label>Technologies </Form.Label>
              <Form.Control
                list='technologies'
                name='TechnologiesData'
                placeholder=""
                autoFocus
              />
              <datalist id='technologies'>
                  <option value='React'/>
                  <option value='Java'/>
                  <option value='Javascript'/>
              </datalist>
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="date"
                placeholder=""
                autoFocus
              />
               </Form.Group>
              
               <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>End Date</Form.Label>
              <Form.Control
                type="date"
                placeholder=""
                autoFocus
              />
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

export default AdminBatch