import React, { useState } from "react";
import {Button,Col,Form,Nav,Navbar,Row} from "react-bootstrap";
import { useNavigate } from "react-router";
import ButtonComp from "../atoms/ButtonComp";
import FormControl from "../atoms/FormControl";
import FormSelect from "../atoms/FormSelect";


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

  const [martial, setmartial] = useState([
    'Select Below', 'Married','Un-Married'
  ])

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
              <hr size='10' />
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
          <FormControl  style={{ textAlign: "left" }}as={Col} label={'Pan No.'} type="text" name="PanNo" value={secondaryData.PanNo} onChange={getSecondaryData}  />
          <FormControl style={{ textAlign: "left" }} as={Col} label={'Aadhar No.'}  type="text"  name="Aadharno" value={secondaryData.Aadharno} onChange={getSecondaryData} />
        </Row>
        <Row className="mb-3">
          <FormControl style={{ textAlign: "left" }} as={Col} label={'Father Name'} type="text" name="FathersName"  value={secondaryData.FathersName}   onChange={getSecondaryData} />
         <FormControl style={{ textAlign: "left" }} as={Col} label={'Mother Name'}   type="text" name="MotherName"  value={secondaryData.MotherName} onChange={getSecondaryData} />
         
        </Row>
        <Row className="mb-3">
          <FormControl  style={{ textAlign: "left" }}
            as={Col} label={'Spouse Name'} type="text"
            name="SpouseName"
            value={secondaryData.SpouseName}
            onChange={getSecondaryData} />


          <FormControl  style={{ textAlign: "left" }} as={Col} label={'Passport No.'}  type="text" name="PassportNo" value={secondaryData.PassportNo}  onChange={getSecondaryData}  />
        </Row>
        <Row className="mb-3">
          <FormSelect style={{ textAlign: "left" }} as={Col} label={'Martial Status'} options={martial}   name="MaritalStatus"   value={secondaryData.MaritalStatus}  onChange={getSecondaryData} />
        </Row>
        <Row>
          <Navbar className="container fluid  col-8 mt-5 square border border-light border-4 rounded-3 " expand="lg">
            {/* <Container fluid> */}
            <ButtonComp variant="secondary" size="md" onClick={navigatePrevious} label={'Previous'} />
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex">
              <ButtonComp variant="primary" size="md" onClick={ValidateFunction} label={'Next'} />
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
