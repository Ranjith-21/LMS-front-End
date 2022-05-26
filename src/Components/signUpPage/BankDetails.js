import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
import { useNavigate } from "react-router";

function BankDetails() {
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
            <Form.Group
              style={{ textAlign: "left" }}
              as={Col}
              controlId="formGridPassword"
            >
              <Form.Label
              className="labelForm"
              >
                Account No.
              </Form.Label>
              <Form.Control
              className="addressForm"
                type="text"
                name="AccountNumber"
                value={bankData.AccountNumber}
                onChange={getBankData}
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
                Bank Name
              </Form.Label>
              <Form.Control
                className="addressForm"
                type="text"
                name="BankName"
                value={bankData.BankName}
                onChange={getBankData}

              />
            </Form.Group>
            <Form.Group
              style={{ textAlign: "left" }}
              as={Col}
              controlId="formGridEmail"
            >
              <Form.Label
                  className="labelForm"
              >
                Account Type
              </Form.Label>
              <Form.Select
                className="addressForm"
                aria-label="Default select example"
                name="AccountType"
                value={bankData.AccountType}
                onChange={getBankData}
              >
                <option>Select Below</option>
                <option value="1">Savings</option>
                <option value="2">Current</option>
                <option value="3">Salary</option>
              </Form.Select>
            </Form.Group>
            <Form.Group
              style={{ textAlign: "left" }}
              as={Col}
              //   controlId="formGridEmail"
            >
              <Form.Label
                  className="labelForm"
              >
                IFSC Code
              </Form.Label>
              <Form.Control
                 className="addressForm"
                type="text"
                name="IfscCode"
                value={bankData.IfscCode}
                onChange={getBankData}
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
                Branch
              </Form.Label>
              <Form.Select
                 className="addressForm"
                aria-label="Default select example"
                name="Branch"
                value={bankData.Branch}
                onChange={getBankData}
              >
                <option value="1">Select Below</option>
                <option value="2">Karnataka</option>
                <option value="5">Chattisgadh</option>
                <option value="3">Odisha</option>
                <option value="4">WestBengal</option>
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
                valuue={bankData.State}
                onChange={getBankData}
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

export default BankDetails;
