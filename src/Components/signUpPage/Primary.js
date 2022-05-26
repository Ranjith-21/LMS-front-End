import React, { useState } from "react";
import {Button,Col,Form,Nav,Navbar,Row,} from "react-bootstrap";
import { useNavigate } from "react-router";

function Primary() {
  const [primaryData, setPrimaryData] = useState({
    EmpolyeeId: "",
    EmpolyeeName: "",
    DateOfJoining: "",
    DateOfBirth: "",
    EmailId: "",
    BloodGroup: "",
    Designation: "",
    Gender: "",
    Nationality: "",
    EmpolyeeStatus: "",
  });
  let getPrimaryData = (e) => {
    setPrimaryData({
      ...primaryData,
      [e.target.name]: e.target.value,
    });
  };
  console.log(primaryData);

  let DatasentToLocalStorage = () => {
    localStorage.setItem("PrimaryData", JSON.stringify(primaryData));
  };
  let ValidateFunction = () => {
    if (
      primaryData.EmpolyeeId &&
      primaryData.EmpolyeeName &&
      primaryData.DateOfJoining &&
      primaryData.DateOfBirth &&
      primaryData.EmailId &&
      primaryData.BloodGroup &&
      primaryData.Designation &&
      primaryData.Gender &&
      primaryData.Nationality &&
      primaryData.EmpolyeeStatus
    ) {
      DatasentToLocalStorage();
      navigateNext();
    } else {
      alert("Please Fill all the feilds");
    }
  };

  let navigate = useNavigate();
  let navigateNext = () => {
    navigate("/SecondaryInfo");
  };
  return (
    <div className="container fluid">
      <navbar>
        <Nav variant="scrollable" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link
              href="/home"
              className='header'
            >
              Primary Info
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/SecondaryInfo">Secondary Info</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/EducationDetails">Education Details</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/AddressDetails">Address Details</Nav.Link>
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
            <Nav.Link href="/Contact">Contact</Nav.Link>
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
            className="labelForm"
            >
              Empolyee ID
            </Form.Label>
            <Form.Control
            className="addressForm"
              type="text"
              name="EmpolyeeId"
              value={primaryData.EmpolyeeId}
              onChange={getPrimaryData}
            />
          </Form.Group>

          <Form.Group
            style={{ textAlign: "left" }}
            as={Col}
            controlId="formGridPassword"
          >
            <Form.Label
             className="labelForm"
            >
              Empolyee Name
            </Form.Label>
            <Form.Control
              className="addressForm"
              type="text"
              name="EmpolyeeName"
              value={primaryData.EmpolyeeName}
              onChange={getPrimaryData}
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
              Date of Joining
            </Form.Label>
            <Form.Control
             className="addressForm"
              type="date"
              name="DateOfJoining"
              value={primaryData.DateOfJoining}
              onChange={getPrimaryData}
            />
          </Form.Group>

          <Form.Group
            style={{ textAlign: "left" }}
            as={Col}
            controlId="formGridPassword"
          >
            <Form.Label
              className="labelForm"
            >
              Date of Birth
            </Form.Label>
            <Form.Control
             className="addressForm"
              type="date"
              name="DateOfBirth"
              value={primaryData.DateOfBirth}
              onChange={getPrimaryData}
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
              E-mail ID
            </Form.Label>
            <Form.Control
              className="addressForm"
              type="email"
              name="EmailId"
              value={primaryData.EmailId}
              onChange={getPrimaryData}
            />
          </Form.Group>

          <Form.Group
            style={{ textAlign: "left" }}
            as={Col}
            controlId="formGridPassword"
          >
            <Form.Label
              className="labelForm"
            >
              Blood Group
            </Form.Label>
            <Form.Control
              className="addressForm"
              type="text"
              name="BloodGroup"
              value={primaryData.BloodGroup}
              onChange={getPrimaryData}
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
              Designation
            </Form.Label>
            <Form.Select
              className="addressForm"
              aria-label="Default select example"
              name="Designation"
              value={primaryData.Designation}
              onChange={getPrimaryData}
            >
              <option>Select Below</option>
              <option value="1">Admin</option>
              <option value="2">Mentor</option>
              <option value="3">Empolyee/Trainee</option>
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
              Gender
            </Form.Label>
            <Form.Select
              className="addressForm"
              aria-label="Default select example"
              name="Gender"
              value={primaryData.Gender}
              onChange={getPrimaryData}
            >
              <option>Select Below</option>
              <option value="1">Male</option>
              <option value="2">Female</option>
              <option value="3">TransGender</option>
            </Form.Select>
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
              Nationality
            </Form.Label>
            <Form.Select
              className="addressForm"
              aria-label="Default select example"
              name="Nationality"
              value={primaryData.Nationality}
              onChange={getPrimaryData}
            >
              <option>Select Below</option>
              <option value="1">Indian</option>
              <option value="2">NRI</option>
              <option value="3">....!</option>
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
              Empolyee Status
            </Form.Label>
            <Form.Select
            className="addressForm"
              aria-label="Default select example"
              name="EmpolyeeStatus"
              value={primaryData.EmpolyeeStatus}
              onChange={getPrimaryData}
            >
              <option>Select Below</option>
              <option value="1">Applied</option>
              <option value="2">Appointed</option>
              <option value="3">Declined</option>
            </Form.Select>
          </Form.Group>
        </Row>
        <Row>
          <Navbar
            className="container fluid  col-8 mt-5 square border border-light border-4 rounded-3 "
            expand="lg"
          >
            {/* <Container fluid> */}
            <Button variant="secondary" size="md">
              Previous
            </Button>
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex">
              <Button variant="primary" size="md" onClick={ValidateFunction}>
                Next
              </Button>
            </Form>
            {/* </Container> */}
          </Navbar>
        </Row>
      </Form>
      {/* <SecondaryInfo /> */}
    </div>
  );
}

export default Primary;
