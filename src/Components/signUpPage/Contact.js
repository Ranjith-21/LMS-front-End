import React, { useState } from 'react'
import {Button,Col,Container,Form,Nav,Navbar,Row,} from "react-bootstrap";
import { useNavigate } from 'react-router';
import ButtonComp from '../atoms/ButtonComp';
import FormControl from '../atoms/FormControl';
import FormSelect from './../atoms/FormSelect';
import LoginPage from './../LoginPage';



function Contact() {
  const [contactType, setcontactType] = useState([
   'Select Below', 1,2,3,4,5
  ])
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


let navigate = useNavigate()
let ValidateFunction = () => {
  if (
    contactData.ContactType &&
   contactData.ContactNumber
  ) {
    DatasentToLocalStorage();
    navigate('/LoginPage')
    // navigateNext();
  } else {
    alert("Please Fill all the feilds");
  }
};
 

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
            <hr size='10' />
            </Nav.Link> 
          </Nav.Item>
        </Nav>
      </navbar>
      <Form className="container fluid  mt-3 square border border-light border-4 rounded-3 ">
        <Row className="mb-3">

          <FormSelect style={{ textAlign: "left" }} as={Col} label={'Contact Type'}  name="ContactType" value={contactData.ContactType} onChange={getContactData} options={contactType}  />
          <FormControl style={{ textAlign: "left" }} as={Col} label={'Contact Number'}  type="tel" name="ContactNumber" value={contactData.ContactNumber}   onChange={getContactData} />
        </Row>
        <Row>
          <p style={{ textAlign:'end',cursor:'pointer' }} >
          <i class="fa-solid fa-plus"></i>
          <b> Add</b>
            </p>
          <Navbar className="container fluid  col-8 mt-5 square border border-light border-4 rounded-3 "expand="lg">
            <Container fluid>
              <ButtonComp  variant="secondary" size="md" onClick={navigatePrevious} label={'Previous'}  />
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll></Nav>
            <Form className="d-flex">
              <ButtonComp variant="primary" size="md" onClick={ValidateFunction} label={'Submit'}  />
            </Form>
            </Container>
          </Navbar>
        </Row>
      </Form>
    </div></div>
    )
}

export default Contact
