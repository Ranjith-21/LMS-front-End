import { useState } from "react";
import {Button,Col,Form,Nav,Navbar,Row,} from "react-bootstrap";
import { useNavigate } from 'react-router';

function EducationDetails() {
  const [educationData, setEducationData] = useState({
    EducationType: "",
    YearOfpassing: "",
    PerCenTage: "",
    UnivercityName: "",
    InstituteName: "",
    Specilization: "",
    State: "",
  });

  let getEducationData = (e) => {
    setEducationData({
      ...educationData,
      [e.target.name]: e.target.value,
    });
  };
  console.log(educationData);
  let DatasentToLocalStorage = () => {
    localStorage.setItem("educationData", JSON.stringify(educationData));
  };
  let ValidateFunction = () => {
    if (
      educationData.EducationType &&
      educationData.YearOfpassing &&
      educationData.PerCenTage &&
      educationData.UnivercityName &&
      educationData.InstituteName &&
      educationData.Specilization &&
      educationData.State
    ) {
      DatasentToLocalStorage();
      navigateNext();
    } else {
      alert("Please Fill all the feilds");
    }
  };

  let navigate = useNavigate();
  let navigateNext = () => {
    navigate("/AddressDetails");
  };

  let navigatePrevious = () => {
    navigate("/SecondaryInfo");
  };
  return (
    <div>
      {" "}
      <div className="container fluid">
        <navbar>
          <Nav variant="scrollable" defaultActiveKey="/educationData">
            <Nav.Item>
              <Nav.Link href="/">Primary Info</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/SecondaryInfo">Secondary Info</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="/educationData"
                className='header'
              >
                Education Details
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/AddressDetails">Address Details</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="BankDetails">Bank Details</Nav.Link>
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
                Education Type
              </Form.Label>
              <Form.Select
              className="addressForm"
                aria-label="Default select example"
                name="EducationType"
                value={educationData.EducationType}
                onChange={getEducationData}
              >
                <option></option>
                <option value="1">Masters(M..tech)</option>
                <option value="2">Bachelor(B.E)</option>
                <option value="3">Post Graduate</option>
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
                Year Of Passing
              </Form.Label>
              <Form.Control
               className="addressForm"
                type="text"
                name="YearOfpassing"
                value={educationData.YearOfpassing}
                onChange={getEducationData}
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
                Percentage(%)
              </Form.Label>
              <Form.Control
                 className="addressForm"
                type="text"
                name="PerCenTage"
                value={educationData.PerCenTage}
                onChange={getEducationData}
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
                University Name
              </Form.Label>
              <Form.Control
                className="addressForm"
                type="text"
                name="UnivercityName"
                value={educationData.UnivercityName}
                onChange={getEducationData}
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
                Institute Name
              </Form.Label>
              <Form.Control
                className="addressForm"
                type="text"
                name="InstituteName"
                value={educationData.InstituteName}
                onChange={getEducationData}
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
                Specialization
              </Form.Label>
              <Form.Control
                className="addressForm"
                type="text"
                name="Specilization"
                value={educationData.Specilization}
                onChange={getEducationData}
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
                State
              </Form.Label>
              <Form.Select
                 style={{width: '49%',
                  height: '45px',
                  fontSize:' 20px'}}
                aria-label="Default select example"
                name="State"
                value={educationData.State}
                onChange={getEducationData}
              >
                <option value="1">Select Below</option>
                <option value="2">Karnataka</option>
                <option value="4">WestBengal</option>
                <option value="5">Chattisgadh</option>
                <option value="3">Odisha</option>
              </Form.Select>
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
        {/* <AddressDetails/> */}
      </div>
    </div>
  );
}

export default EducationDetails;
