import React, { useState } from "react";
import {Button,Col,Form,Nav,Navbar,Row,} from "react-bootstrap";
import { useNavigate } from "react-router";
import ButtonComp from "../atoms/ButtonComp";
import FormControl from "../atoms/FormControl";
import FormSelect from "../atoms/FormSelect";


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

  const [designation, setdesignation] = useState(
    [
      'Select Below','Admin','Mentor','Trainee/Employee'
    ]
  )

    const [gender, setgender] = useState([
      'Select Below','Male','Female','Others'
    ])

    const [Nationality, setNationality] = useState([
      'Select Below','Indian','NRI'
    ])

    const [eStatus, seteStatus] = useState(
      [
        'Select Below', 'Applied','Apponited','Declined'
      ]
    )

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
              <hr size='10' />
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
          <FormControl  style={{ textAlign: "left" }} as={Col} label={'Employee ID'}  type="text"  name="EmpolyeeId"  value={primaryData.EmpolyeeId}  onChange={getPrimaryData} />
          <FormControl style={{ textAlign: "left" }} as={Col} label={'Employee Name'}  type="text"  name="EmpolyeeName" value={primaryData.EmpolyeeName}  onChange={getPrimaryData}  />
        </Row>
        <Row className="mb-3">
          <FormControl style={{ textAlign: "left" }} as={Col} label={'Date of Joining'}   type="date"  name="DateOfJoining" value={primaryData.DateOfJoining}  onChange={getPrimaryData} />
          <FormControl style={{ textAlign: "left" }} as={Col} label={'Date of Birth'}   type="date"   name="DateOfBirth" value={primaryData.DateOfBirth}  onChange={getPrimaryData} />
        </Row>
        <Row className="mb-3">
          <FormControl style={{ textAlign: "left" }} as={Col} label={'E-mail ID'}  type="email" name="EmailId"  value={primaryData.EmailId}  onChange={getPrimaryData}  />
        <FormControl style={{ textAlign: "left" }} as={Col} label={'Blood Group'}  type="text" name="BloodGroup" value={primaryData.BloodGroup}  onChange={getPrimaryData} />
        </Row>
        <Row className="mb-3">
            <FormSelect style={{ textAlign: "left" }} as={Col} label={'Designation'}   name="Designation" value={primaryData.Designation}  onChange={getPrimaryData} options={designation}  />
            <FormSelect  style={{ textAlign: "left" }}as={Col} label={'Gender'} name="Gender"   value={primaryData.Gender}  onChange={getPrimaryData} options={gender}  />
        </Row>
        <Row className="mb-3">
          <FormSelect style={{ textAlign: "left" }}as={Col} label={'Nationality'}  name="Nationality"  value={primaryData.Nationality}  onChange={getPrimaryData} options={Nationality} />
          <FormSelect   style={{ textAlign: "left" }}  as={Col} label={'Employee Status'} options={eStatus}   name="EmpolyeeStatus" value={primaryData.EmpolyeeStatus} onChange={getPrimaryData}/>
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
              <ButtonComp variant="primary" size="md" onClick={ValidateFunction} label={'Next'}/>
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
