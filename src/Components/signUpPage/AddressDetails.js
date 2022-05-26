import React, { useState } from "react";
import {Button,Col,Container,Form,Nav,Navbar,Row,} from "react-bootstrap";
import { useNavigate } from "react-router";
import './SignUp.css'

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
            <Form.Group
              style={{ textAlign: "left" }}
              as={Col}
              controlId="formGridEmail"
            >
              <Form.Label
              className="labelForm"
              >
                Address Type
              </Form.Label>
              <Form.Select
                className="addressForm"
                aria-label="Default select example"
                name="AddressType"
                value={addressData.AddressType}
                onChange={getAddressData}
              >
                <option></option>
                <option value="1">Permanent</option>
                <option value="2">Temperory</option>
                <option value="3">office</option>
              </Form.Select>
            </Form.Group>

            <Form.Group
              style={{ textAlign: "left" }}
              as={Col}
              controlId="formGridPassword"
            >
              <Form.Label
                   className="labelForm"
              >
                Door No.
              </Form.Label>
              <Form.Control
               className="addressForm"
               
                type="text"
                name="DoorNumber"
                value={addressData.DoorNumber}
                onChange={getAddressData}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group
              style={{ textAlign: "left" }}
              as={Col}
            //   controlId="formGridEmail"
            >
              <Form.Label
                   className="labelForm"
              >
                Street
              </Form.Label>
              <Form.Control
               className="addressForm"
                type="text"
                name="Street"
                value={addressData.Street}
                onChange={getAddressData}
              />
            </Form.Group>

            <Form.Group
              style={{ textAlign: "left" }}
              as={Col}
            //   controlId="formGridPassword"
            >
              <Form.Label
                   className="labelForm"
              >
                Locality
              </Form.Label>
              <Form.Control
               className="addressForm"
                type="text"
                name="Locality"
                value={addressData.Locality}
                onChange={getAddressData}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group
              style={{ textAlign: "left" }}
              as={Col}
              controlId="formGridEmail"
            >
              <Form.Label
                  className="labelForm" 
              >
                City
              </Form.Label>
              <Form.Select
               className="addressForm"
               
                aria-label="Default select example"
                name="City"
                value={addressData.City}
                onChange={getAddressData}
              >
                <option value="1">Select Below</option>
                <option value="2">Bangalore</option>
                <option value="4">Kolkata</option>
                <option value="5">Bihar</option>
                <option value="3">Bhubaneswar</option>
              </Form.Select>
            </Form.Group>

            <Form.Group
              style={{ textAlign: "left" }}
              as={Col}
              controlId="formGridEmail"
            >
              <Form.Label
                  className="labelForm" 
              >
                State
              </Form.Label>
              <Form.Select
               className="addressForm"
               
                aria-label="Default select example"
                name="State"
                value={addressData.State}
                onChange={getAddressData}
              >
                <option value="1">Select Below</option>
                <option value="2">Karnataka</option>
                <option value="3">Odisha</option>
                <option value="5">Chattisgadh</option>
                <option value="4">WestBengal</option>
              </Form.Select>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group
              style={{ textAlign: "left" }}
              as={Col}
            >
              <Form.Label
                  className="labelForm" 
              >
                PIN Code
              </Form.Label>
              <Form.Control
               className="addressForm"
               
                type="text"
                name="pinCode"
                Value={addressData.pinCode}
                onChange={getAddressData}
              />
            </Form.Group>
            <Form.Group
              style={{ textAlign: "left" }}
              as={Col}
            >
              <Form.Label
                  className="labelForm" 
              >
                Land Mark
              </Form.Label>
              <Form.Control
               className="addressForm"
               
                type="text"
                name="LandMark"
                value={addressData.LandMark}
                onChange={getAddressData}
              />
            </Form.Group>
          </Row>
          <Row>
            <Navbar
              className="container fluid  col-8 mt-5 square border border-light border-4 rounded-3 "
              expand="lg"
            >
              <Container fluid>
                <Button
                  variant="secondary"
                  size="md"
                  onClick={navigatePrevious}
                >
                  Previous
                </Button>
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                ></Nav>
                <Form className="d-flex">
                  <Button variant="primary" size="md" onClick={ValidateData}>
                    Next
                  </Button>
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
