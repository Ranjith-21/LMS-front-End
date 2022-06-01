import React, { useState } from "react";
import { Button, Col, Container, Form, Nav, Navbar, Row, } from "react-bootstrap";
import { useNavigate } from "react-router";
import './SignUp.css'
import EmployeeDropDown from './../atoms/EmployeeDropDown';
import FormSelect from "../atoms/FormSelect";
import FormControl from "../atoms/FormControl";
import ButtonComp from "../atoms/ButtonComp";

function AddressDetails() {
  const [addressData, setAddressData] = useState({
    AddressType: "",
    DoorNumber: "",
    Street: "",
    Locality: "",
    City: "",
    State: "",
    pinCode: "",
    LandMark: "",
  });
  const [option, setoption] = useState([
    'Select Below','Permanant', 'Temporary', 'Office'
  ])

  const [city, setcity] = useState([
    'Select Below','Bangalore','Hyderabad','Pune'
  ])
  const [state, setstate] = useState([
    'Select Below','Karnataka','Kerala','TamilNadu'
  ])

  let getAddressData = (e) => {
    setAddressData({ ...addressData, [e.target.name]: e.target.value });
  };



  let DatasentToLocalStorage = () => {
    localStorage.setItem("AddressDetails", JSON.stringify(addressData));
  };
  let ValidateData = () => {
    if (
      addressData.AddressType &&
      addressData.DoorNumber &&
      addressData.Street &&
      addressData.Locality &&
      addressData.City &&
      addressData.State &&
      addressData.pinCode &&
      addressData.LandMark
    ) {
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
      {" "}
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
        <Form className="  mt-3 square border border-light border-4 rounded-3 ">
          <Row className="mb-3">
            <FormSelect  style={{ textAlign: "left", width: '50%' }} as={Col} label={'Address Type'}  name={"AddressType"}
                value={addressData.AddressType}
                onChange={getAddressData} options={option}  />
                <FormControl   style={{ textAlign: "left", width: '50% ' }} as={Col} label={'Door No.'}  type="text" name="DoorNumber" value={addressData.DoorNumber}  onChange={getAddressData}/>
          </Row>
          <Row className="mb-3">
            <FormControl style={{ textAlign: "left" }} as={Col} label={'Street'}  type="text" name="Street" value={addressData.Street} onChange={getAddressData}  />
            <FormControl style={{ textAlign: "left" }} as={Col} label={'Locality'}  type="text" name="Locality" value={addressData.Locality} onChange={getAddressData}  />
          </Row>
          <Row className="mb-3">
            <FormSelect  style={{ textAlign: "left" }} as={Col} label={'City'}   name="City" value={addressData.City} onChange={getAddressData} options={city}  />
            <FormSelect    style={{ textAlign: "left" }}  as={Col} label={'State'}  name="State" value={addressData.State}onChange={getAddressData} options={state}  />
          </Row>
          <Row className="mb-3">
            <FormControl style={{ textAlign: "left" }}  as={Col}   type={"text"} name={"pinCode"}  value={addressData.pinCode} onChange={getAddressData} label={'PIN Code'}/>
            <FormControl   style={{ textAlign: "left" }} as={Col} label={'Land Mark'}  type={"text"} name={"LandMark"} value={addressData.LandMark} onChange={getAddressData}/>
          </Row>
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
                <ButtonComp variant="primary" size="md"  onClick={ValidateData} label={'Next'} />
                </Form>
              </Container>
            </Navbar>
          </Row>
        </Form>
      </div>
    </div>
  );
}

export default AddressDetails;
