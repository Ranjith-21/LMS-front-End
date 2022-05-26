import React, { useState } from 'react'
import {Button,Col,Container,Form,Nav,Navbar,Row,} from "react-bootstrap";
import { useNavigate } from 'react-router';



function Contact() {
  
  const [contactData, setContactData] = useState({
    ContactType:"",
    ContactNumber:"+91",
  })

let getContactData=(e)=>{
  setContactData({
    ...contactData,[e.target.name]:e.target.value
  })
}
console.log(contactData);

let DatasentToLocalStorage = () => {
  localStorage.setItem("contact Details", JSON.stringify(contactData));
};
let ValidateFunction = () => {
  if (
    contactData.ContactType &&
   contactData.ContactNumber
  ) {
    DatasentToLocalStorage();
    // navigateNext();
  } else {
    alert("Please Fill all the feilds");
  }
};
 
    let navigate = useNavigate()

    let navigatePrevious=()=>
    {
        navigate('/TechnicalSkills')
    }
    
    return (
      <div> <div className="container fluid">
      <navbar>
        <Nav variant="scrollable" defaultActiveKey="/Secondary">
          <Nav.Item>
            <Nav.Link href="/">Primary Info</Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link href="/SecondaryInfo">Secondary Info</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/SecondaryInfo">Education Details</Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link href="/TechnicalSkills">Address Details</Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link href="/BankDetails">Bank Details</Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link href="/TechnicalSkills">Technical Skills</Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link
              href="/Contact"
              className='header'
            >Contact
            </Nav.Link> 
          </Nav.Item>
        </Nav>
      </navbar>
      <Form className="container fluid  mt-3 square border border-light border-4 rounded-3 ">
        <Row className="mb-3">

          
        <Form.Group
            style={{ textAlign: "left" }}
            as={Col}
            controlId="formGridEmail"
          >
            <Form.Label
             className='labelForm'
            >
            Contact Type
            </Form.Label>
            <Form.Select
            className='addressForm'
              aria-label="Default select example"
              name="ContactType"
              value={contactData.ContactType}
              onChange={getContactData}
            >
              <option></option>
                  <option >Select Below</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="3">4</option>
                  <option value="3">5</option>
            </Form.Select>
          </Form.Group>
          <Form.Group
            style={{ textAlign: "left" }}
            as={Col}
            controlId="formGridPassword"
          >
            <Form.Label
              className='labelForm'
            >
     Contact Number
            </Form.Label>
            <Form.Control
              className='addressForm'
              type="tel"
              name="ContactNumber"
              value={contactData.ContactNumber}
              onChange={getContactData}
              
            />
          </Form.Group>
        </Row>
        <Row>
          <p style={{ textAlign:'end',cursor:'pointer' }} >
          <i class="fa-solid fa-plus"></i>
          <b> Add</b>
            </p>
          <Navbar
            className="container fluid  col-8 mt-5 square border border-light border-4 rounded-3 "
            expand="lg"
          >
            <Container fluid>
            <Button variant="secondary" size="md" onClick={navigatePrevious} >
              Previous
            </Button>
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex">
              <Button variant="primary" size="md" onClick={ValidateFunction}>
                Submit
              </Button>
            </Form>
            </Container>
          </Navbar>
        </Row>
      </Form>
    </div></div>
    )
}

export default Contact
