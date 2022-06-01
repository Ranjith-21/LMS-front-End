import React, { useState } from "react";
import { Button, Col, Container, Form, Nav, Navbar, Row,} from "react-bootstrap";
import { useNavigate } from "react-router";
import './SignUp.css'
import FormControl from './../atoms/FormControl';
import FormSelect from './../atoms/FormSelect';
import ButtonComp from "../atoms/ButtonComp";

function BankDetails() {
  const [branch, setbranch] = useState(
    [
      'Select Below','Bangalore','Hyderabad'
    ]
  )
  const [state, setstate] = useState(
    [
      'Select Below','Karnataka','Kerala','TamilNadu'
    ]
  )
  const [bankType, setbankType] = useState(
    [
      'Select Below','Savings','Salary','Current'
    ]
  )
  const [bankData,   setBankData] = useState({
    AccountNumber: "",
    BankName: "",
    AccountType: "",
    IfscCode: "",
    Branch: "",
    State: "",
  });
  let getBankData = (e) => {
      setBankData({ ...bankData, [e.target.name]: e.target.value });
  };
console.log(bankData);


let DatasentToLocalStorage = () => {
  localStorage.setItem("Bank Details", JSON.stringify(bankData));
};
let ValidateFunction = () => {
  if (
    bankData.AccountNumber &&
    bankData.BankName &&
    bankData.AccountType &&
    bankData.IfscCode &&
    bankData.Branch &&
    bankData.State
  ) {
    DatasentToLocalStorage();
    navigateNext();
  } else {
    alert("Please Fill all the feilds");
  }
};

  let navigate = useNavigate();
  let navigateNext = () => {
    navigate("/TechnicalSkills");
  };
  let navigatePrevious = () => {
    navigate("/AddressDetails");
  };

  return (
    <div>
      {" "}
      <div className="container fluid">
        <navbar>
          <Nav variant="scrollable" defaultActiveKey="/Secondary">
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
              <Nav.Link href="/AddressDetails">Address Details</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="/Secondary"
                className='header'
              >
                Bank Details
                <hr size='10' />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/TechnicalSkills">Technical Skills</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-7">Experience</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-8">Contact</Nav.Link>
            </Nav.Item>
          </Nav>
        </navbar>
        <Form className="container fluid  mt-3 square border border-light border-4 rounded-3 ">
          <Row className="mb-3">
            <FormControl style={{ textAlign: "left" }}  as={Col} label={'Account No.'}  type="text" name="AccountNumber" value={bankData.AccountNumber} onChange={getBankData} />
            <FormControl  style={{ textAlign: "left" }} as={Col} label={'Bank Name'}  type="text" name="BankName"  value={bankData.BankName} onChange={getBankData} />
           <FormSelect style={{ textAlign: "left" }} as={Col}  name="AccountType"  value={bankData.AccountType} onChange={getBankData} options={bankType} label={'Account Type'} />
            <FormControl style={{ textAlign: "left" }} as={Col} label={'IFSC Code'} type="text" name="IfscCode"  value={bankData.IfscCode} onChange={getBankData}  />
          </Row>
          <Row className="mb-3">
            <FormSelect style={{ textAlign: "left" }}as={Col} label={'Branch'}  name="Branch" value={bankData.Branch}  onChange={getBankData}  options={branch}  />
          
          <FormSelect   style={{ textAlign: "left" }}
              as={Col} label={'State'}  name="State"
              valuue={bankData.State}
              onChange={getBankData} options={state}  />
          </Row>
          <Row>
            <Navbar
              className="container fluid  col-8 mt-5 square border border-light border-4 rounded-3 " expand="lg">
              <Container fluid>
                <ButtonComp variant="secondary"  size="md" onClick={navigatePrevious} label={'Previous'}   />
                <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll></Nav>
                <Form className="d-flex">
                  <ButtonComp  variant="primary" size="md" onClick={ValidateFunction} label={'Next'} /> 
                </Form>
              </Container>
            </Navbar>
          </Row>
        </Form>
      </div>
    </div>
  );
}

export default BankDetails;
