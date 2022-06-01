import React, { useState } from "react";
import {Button,Col,Container,Form,Nav,Navbar,Row,} from "react-bootstrap";
import { useNavigate } from "react-router";
import ButtonComp from "../atoms/ButtonComp";
import FormControl from "../atoms/FormControl";
import FormSelect from "../atoms/FormSelect";

function Experience() {
  const [experinceData, setExperinceData] = useState({
    CompanyName: "",
    YearOfExperience: "",
    DateOfJoining: "",
    DateOfRelieving: "",
    Designation: "",
    Location: "",
  });

  const [exp, setexp] = useState([
    "Select Below",1,2,3,4
  ])
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
                <hr size='10' />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-8">Contact</Nav.Link>
            </Nav.Item>
          </Nav>
        </navbar>
        <Form className="container fluid  mt-3 square border border-light border-4 rounded-3 ">
          <Row className="mb-3">
            <FormControl  style={{ textAlign: "left" }}as={Col} label={'Company Name'}  type="text" name="CompanyName" value={experinceData.CompanyName} onChange={getExperienceData}  />
            <FormControl   style={{ textAlign: "left" }} as={Col} label={'Years Of Experiecnce'}  type="text" name="YearOfExperience" value={experinceData.YearOfExperience} onChange={getExperienceData} />
            <hr style={{visibility:'hidden'}} />
            <FormControl  style={{ textAlign: "left" }} as={Col}   label={'Date of Joining'}  type="date"  name="DateOfJoining"  value={experinceData.DateOfJoining}  onChange={getExperienceData} />
            <FormControl   style={{ textAlign: "left" }} as={Col} label={'Date Of Relieveing'}   type="date"  name="DateOfRelieving"  value={experinceData.DateOfRelieving}  onChange={getExperienceData}  />
            <hr style={{visibility:'hidden'}} />
            <FormSelect style={{ textAlign: "left" }}  as={Col} label={'Designation'}    name="Designation"  value={experinceData.Designation}  onChange={getExperienceData} options={exp}  />
            <FormControl  style={{ textAlign: "left" }} as={Col} label={'Location'}  type="text"  name="Location"  value={experinceData.Location}  onChange={getExperienceData}   />
          </Row>
          <Row>
            <Navbar className="container fluid  col-8 mt-5 square border border-light border-4 rounded-3 " expand="lg">
              <Container fluid>
                <ButtonComp  variant="secondary" size="md" onClick={navigatePrevious} label={'Previous'}  />
                <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll ></Nav>
                <Form className="d-flex">
                  <ButtonComp variant="primary" size="md" onClick={ValidateFunction} label={'Next'}  />
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
