import React, { useState } from "react";
import { Accordion, Button, Col, Container, Form, Nav, Navbar, Row, } from "react-bootstrap";
import { useNavigate } from "react-router";
import './SignUp.css'
import EmployeeDropDown from './../atoms/EmployeeDropDown';
import FormSelect from "../atoms/FormSelect";
import FormControl from "../atoms/FormControl";
import ButtonComp from "../atoms/ButtonComp";

function AddressDetails() {
  const [inputList, setInputList] = useState([{
    AddressType: "",
    DoorNumber: "",
    Street: "",
    Locality: "",
    City: "",
    State: "",
    pinCode: "",
    LandMark: "",
  }]);
  const [option, setoption] = useState([
    'Select Below','Permanant', 'Temporary', 'Office'
  ])

  const [city, setcity] = useState([
    'Select Below','Bangalore','Hyderabad','Pune'
  ])
  const [state, setstate] = useState([
    'Select Below','Karnataka','Kerala','TamilNadu'
  ])

// HandleChange for Address Details >>>

  let handleChange=(e,ind)=>
{
  const {name,value}=e.target;
  let newInputList=inputList.map((item,index)=>{
    if(index===ind)
    {
      console.log(item);
      return {...item,[name]:value}
    }
    console.log(item);
    return item;
  }
  )
  setInputList(newInputList);
}

// Delete Data for Address Details >>>

let deleteAddressData=(e,ind)=>
{
  e.preventDefault();
  const list = [...inputList];
  list.splice(ind, 1);
  setInputList(list);
}


// Add Data for Address Details >>>

let addAddressData=()=>
{
  setInputList([...inputList,{
    ContactType:'',
    ContactNumber:''
  }])
}

  let DatasentToLocalStorage = () => {
    localStorage.setItem("AddressDetails", JSON.stringify(inputList));
  };

  
// Validating and Navigating to next Page >>>

  let ValidateAndNavigate = () => {
    if (inputList.length > 0) {
      DatasentToLocalStorage();
      navigateNext();
    } else {
      alert("Please Fill all the feilds");
    }
  };

  let navigate = useNavigate();
  let navigateNext = () => {
    navigate("/BankDetails");
  };
  let navigatePrevious = () => {
    navigate("/EducationDetails");
  };
  return (
    <div>
      <div className="container fluid">
        <navbar>
          <Nav variant="scrollable" defaultActiveKey="/AddressDetails">
            <Nav.Item>
              <Nav.Link href="/">Primary Info</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/SecondaryInfo">Secondary Info</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/EducationDetails">Education Details</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="/AddressDetails"
                className='header'
              >
                Address Details
                <hr size='10'/>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/BankDetails">Bank Details</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/TechnicalSkills">Technical Skills</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/Experience">Experience</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-8">Contact</Nav.Link>
            </Nav.Item>
          </Nav>
        </navbar>
        <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>Address Details</Accordion.Header>
    <Accordion.Body>
    {inputList.map((val,ind)=>
    {
      return <Form className="  mt-3 square border border-light border-4 rounded-3 p-2 ">
          <Row className="mb-3">
            <FormSelect  style={{ textAlign: "left", width: '50%' }} as={Col} label={'Address Type'}  name="AddressType"
                value={val.AddressType}
               onChange={(e)=>handleChange(e,ind)} options={option}  />
                <FormControl   style={{ textAlign: "left", width: '50% ' }} as={Col} label={'Door No.'}  type="text" name="DoorNumber" value={val.DoorNumber}  onChange={(e)=>handleChange(e,ind)}/>
          </Row>
          <Row className="mb-3">
            <FormControl style={{ textAlign: "left" }} as={Col} label={'Street'}  type="text" name="Street" value={val.Street} onChange={(e)=>handleChange(e,ind)}  />
            <FormControl style={{ textAlign: "left" }} as={Col} label={'Locality'}  type="text" name="Locality" value={val.Locality} onChange={(e)=>handleChange(e,ind)}  />
          </Row>
          <Row className="mb-3">
            <FormSelect  style={{ textAlign: "left" }} as={Col} label={'City'}   name="City" value={val.City} onChange={(e)=>handleChange(e,ind)} options={city}  />
            <FormSelect    style={{ textAlign: "left" }}  as={Col} label={'State'}  name="State" value={val.State} onChange={(e)=>handleChange(e,ind)} options={state}  />
          </Row>
          <Row className="mb-3">
            <FormControl style={{ textAlign: "left" }}  as={Col}   type={"text"} name={"pinCode"}  value={val.pinCode} onChange={(e)=>handleChange(e,ind)} label={'PIN Code'}/>
            <FormControl   style={{ textAlign: "left" }} as={Col} label={'Land Mark'}  type={"text"} name={"LandMark"} value={val.LandMark} onChange={(e)=>handleChange(e,ind)}/>
          </Row>
          <div style={{textAlign:'end'}}>
                {inputList.length !== 1 && <button  onClick={(e)=>
                {
                    deleteAddressData(e,ind)
                }} className="btn btn-outline-primary p-1 m-2" >Remove</button>}
              {inputList.length - 1 === ind &&  <p onClick={addAddressData} style={{ textAlign:'end',cursor:'pointer' }}  >
          <b>➕ Add</b>
            </p>}
            </div>
      </Form>
    })}
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
          <Row>
            <Navbar
              className="container fluid  col-8 mt-5 square border border-light border-4 rounded-3 "
              expand="lg"
            >
              <Container fluid>
                <ButtonComp variant="secondary" size="md"  onClick={navigatePrevious} label={'Previous'} />
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                ></Nav>
                <Form className="d-flex">
                <ButtonComp variant="primary" size="md"  onClick={ValidateAndNavigate} label={'Next'} />
                </Form>
              </Container>
            </Navbar>
          </Row>
      </div>
    </div>
  );
}

export default AddressDetails;
