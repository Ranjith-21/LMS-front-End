import React, { useState } from "react";
import {Button,Col,Container,Form,Nav,Navbar,Row,} from "react-bootstrap";
import { useNavigate } from "react-router";

function Experience() {
  const [experinceData, setExperinceData] = useState({
    CompanyName: "",
    YearOfExperience: "",
    DateOfJoining: "",
    DateOfRelieving: "",
    Designation: "",
    Location: "",
  });

  let getExperienceData = (e) => {
    setExperinceData({ ...experinceData, [e.target.name]: e.target.value });
  };
console.log(experinceData);


let DatasentToLocalStorage = () => {
  localStorage.setItem("Experience Details", JSON.stringify(experinceData));
};
let ValidateFunction = () => {
  if (
    experinceData.CompanyName &&
    experinceData.YearOfExperience &&
    experinceData.DateOfJoining &&
    experinceData.DateOfRelieving &&
    experinceData.Designation &&
    experinceData.Location
  ) {
    DatasentToLocalStorage();
    navigateNext();
  } else {
    alert("Please Fill all the feilds");
  }
};
  let navigate = useNavigate();
  let navigateNext = () => {
    navigate("/Contact");
  };
  let navigatePrevious = () => {
    navigate("/TechnicalSkills");
  };
  return (
    <div>
      {" "}
      <div className="container fluid">
        <navbar>
          <Nav variant="scrollable"  defaultActiveKey="/Secondary">
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
                href="/Secondary"
                className='header'
              >
                Experience
              </Nav.Link>
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
              controlId="formGridPassword"
            >
              <Form.Label
                className="labelForm"
              >
                Company Name
              </Form.Label>
              <Form.Control
                className="addressForm"
                type="text"
                name="CompanyName"
                value={experinceData.CompanyName}
                onChange={getExperienceData}
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
                Years Of Experience
              </Form.Label>
              <Form.Control
                className="addressForm"
                type="text"
                name="YearOfExperience"
                value={experinceData.YearOfExperience}
                onChange={getExperienceData}
              />
            </Form.Group><hr style={{visibility:'hidden'}} />
            <Form.Group
              style={{ textAlign: "left" }}
              as={Col}
              controlId="formGridPassword"
            >
              <Form.Label
                className="labelForm"
              >
                Date Of Joining
              </Form.Label>
              <Form.Control
               className="addressForm"
                type="text"
                name="DateOfJoining"
                value={experinceData.DateOfJoining}
                onChange={getExperienceData}
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
                Date Of Relieving
              </Form.Label>
              <Form.Control
                className="addressForm"
                type="text"
                name="DateOfRelieving"
                value={experinceData.DateOfRelieving}
                onChange={getExperienceData}
              />
            </Form.Group><hr style={{visibility:'hidden'}} />
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
                value={experinceData.Designation}
                onChange={getExperienceData}
              >
                <option>Select Below</option>
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
                className="labelForm"
              >
                Location
              </Form.Label>
              <Form.Control
                 className="addressForm"
                type="text"
                name="Location"
                value={experinceData.Location}
                onChange={getExperienceData}
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
                  <Button variant="primary" size="md" onClick={ValidateFunction}>
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

export default Experience;
