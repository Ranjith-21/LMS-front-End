import React, { useState } from "react";
import {Button,Col,Form,Nav,Navbar,Row} from "react-bootstrap";
import { useNavigate } from "react-router";


function SecondaryInfo() {
  const [secondaryData, setSecondaryinfo] = useState({
    PanNo: "",
    Aadharno: "",
    FathersName: "",
    MotherName: "",
    SpouseName: "",
    PassportNo: "",
    MaritalStatus: "",
  });

  let getSecondaryData = (e) => {
    setSecondaryinfo({
      ...secondaryData,
      [e.target.name]: e.target.value,
    });
  };
  console.log(secondaryData);

  let DatasentToLocalStorage = () => {
    localStorage.setItem("SecondaryData", JSON.stringify(secondaryData));
  };
  let ValidateFunction = () => {
    if (
      secondaryData.PanNo &&
      secondaryData.Aadharno &&
      secondaryData.FathersName &&
      secondaryData.MotherName &&
      secondaryData.SpouseName &&
      secondaryData.PassportNo &&
      secondaryData.MaritalStatus
    ) {
      DatasentToLocalStorage();
      navigateNext();
    } else {
      alert("Please Fill all the feilds");
    }
  };

  let navigate = useNavigate();
  let navigateNext = () => {
    navigate("/EducationDetails");
  };

  let navigatePrevious = () => {
    navigate("/");
  };

  return (
    <div className="container fluid">
      <navbar>
        <Nav variant="scrollable" defaultActiveKey="/Secondary">
          <Nav.Item>
            <Nav.Link href="/">Primary Info</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="/Secondary"
              className='header'
            >
              Secondary Info
            </Nav.Link>
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
            <Nav.Link eventKey="link-8">Contact</Nav.Link>
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
              PAN No.
            </Form.Label>
            <Form.Control
            className="addressForm"
              type="text"
              name="PanNo"
              value={secondaryData.PanNo}
              onChange={getSecondaryData}
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
              Aadhar No.
            </Form.Label>
            <Form.Control
              className="addressForm"
              type="text"
              name="Aadharno"
              value={secondaryData.Aadharno}
              onChange={getSecondaryData}
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
              Father Name
            </Form.Label>
            <Form.Control
              className="addressForm"
              type="text"
              name="FathersName"
              value={secondaryData.FathersName}
              onChange={getSecondaryData}
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
              Mother Name
            </Form.Label>
            <Form.Control
              className="addressForm"
              type="text"
              name="MotherName"
              value={secondaryData.MotherName}
              onChange={getSecondaryData}
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
              Spouse Name
            </Form.Label>
            <Form.Control
               className="addressForm"
              type="text"
              name="SpouseName"
              value={secondaryData.SpouseName}
              onChange={getSecondaryData}
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
              Passport No.
            </Form.Label>
            <Form.Control
               className="addressForm"
              type="text"
              name="PassportNo"
              value={secondaryData.PassportNo}
              onChange={getSecondaryData}
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
              Marital Status
            </Form.Label>
            <Form.Select
              className="addressForm"
              style={{width:'49%'}}
              aria-label="Default select example"
              name="MaritalStatus"
              value={secondaryData.MaritalStatus}
              onChange={getSecondaryData}
            >
              <option>Select Below</option>
              <option value="1">Single</option>
              <option value="2">Married</option>
              <option value="3">Divorced</option>
            </Form.Select>
          </Form.Group>
        </Row>
        <Row>
          <Navbar
            className="container fluid  col-8 mt-5 square border border-light border-4 rounded-3 "
            expand="lg"
          >
            {/* <Container fluid> */}
            <Button variant="secondary" size="md" onClick={navigatePrevious}>
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
      {/* <EducationDetails/> */}
    </div>
  );
}
export default SecondaryInfo;
