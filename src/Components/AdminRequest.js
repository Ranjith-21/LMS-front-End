// import React, { useState } from 'react'
import { Container, Navbar, Table } from "react-bootstrap";
import "./AdminContent.css";
import { Modal } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useState } from "react";
// import { ModalComponent } from './atoms/ModalComponent';
import FormComponent from "./atoms/FormComponent";
import ModalComponent from "./atoms/ModalComponent";
// import { FormComponent } from './atoms/FormComponent';
import DropDown from "./atoms/DropDown";

function AdminRequest() {
  const [showReason, setshowReason] = useState(false);
  const [showApprove, setshowApprove] = useState(false);
  const [BatchName, setBatchName] = useState([
    "",
    "1st Batch",
    "2nd Batch",
    "3rd Batch",
    "4th Batch",
    "5th Batch",
  ]);
  const [BatchID, setBatchID] = useState(["", "#1", "#2", "#3", "#4", "#5"]);

  let openShowReason = () => {
    setshowReason(true);
  };
  let closeReason = () => {
    setshowReason(false);
  };
  let handleClose = () => {
    closeReason();
  };
  let openShowApprove = () => {
    setshowApprove(true);
  };
  let closeApprove = () => {
    setshowApprove(false);
  };
  let handleCloseApprove = () => {
    closeApprove();
  };

  let primaryData = JSON.parse(localStorage.getItem("PrimaryData"));
  let contact = JSON.parse(localStorage.getItem("contact Details"));
  let educationData = JSON.parse(localStorage.getItem("educationData"));
  let experience = JSON.parse(localStorage.getItem("Experience Details"));
  console.log(primaryData);
  console.log(contact);
  console.log(educationData);
  console.log(experience);
  let empName = primaryData.EmpolyeeName;
  let empID = primaryData.EmpolyeeId;
  let yop=educationData.map((val)=>
  {
    return val.YearOfpassing;
  })
  let percen=educationData.map((val)=>
  {
    return val.PerCenTage;
  })

  let exp=experience.map((val)=>
  {
    return val.YearOfExperience;
  })

  let contacNo=contact.map((val)=>
  {
    return val.ContactNumber;
  })

  let getDataFromLocalStorage = JSON.parse(
    localStorage.getItem("AllSignUpData")
  );
  console.log(getDataFromLocalStorage);
 
  return (
    <div>
      <Navbar style={{ height: "60px" }}>
        <Container fluid>
          <Navbar.Brand href="#home" style={{ color: "orange" }}>
            Request List
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <div
                class="form-group has-search"
                style={{ marginRight: "20px" }}
              >
                <span class="fa fa-search form-control-feedback"></span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search"
                  style={{ width: "400px" }}
                />
              </div>
            </Navbar.Text>
          </Navbar.Collapse>
          {/* <Button variant="warning" style={{ padding: '5px 10px', color: 'white' }} ><i class="fa-solid fa-plus"></i> &nbsp; New Mentor</Button> */}
        </Container>
      </Navbar>
      <Table>
        <thead style={{ backgroundColor: "#e9eef7" }}>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>No</th>
            <th>Employee ID</th>
            <th>Employee Name</th>
            <th>YOP</th>
            <th>Percentage</th>
            <th>Experince</th>
            <th>Contact No.</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            {getDataFromLocalStorage.map((val, index) => {
              return (
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>{index + 1}</td>
                  <td>{val.primary.EmpolyeeId}</td>
                  <td>{val.primary.EmpolyeeName}</td>
                  <td>
                    {val.education.map((val) => {
                      return val.YearOfpassing;
                    })}
                  </td>
                  <td>
                    {val.education.map((val) => {
                      return val.PerCenTage;
                    })}
                  </td>
                  <td>
                    {val.experience.map((val) => {
                      return val.YearOfExperience;
                    })}
                  </td>
                  <td>
                    {val.contact.map((val) => {
                      return val.ContactNumber;
                    })}
                  </td>
                  <td>
                    <button className="Approve" onClick={openShowApprove}>
                      Approve
                    </button>{" "}
                    &nbsp;{" "}
                    <button onClick={openShowReason} className="Reject">
                      Reject
                    </button>
                  </td>
                </tr>
              );
            })}
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>01</td>
            <td>{empID}</td>
            <td>{empName}</td>
            <td>{yop}</td>
            <td>{percen}</td>
            <td>{exp}</td>
            <td>{contacNo}</td>
            <td>
              <button className="Approve" onClick={openShowApprove}>
                Approve
              </button>{" "}
              &nbsp;{" "}
              <button onClick={openShowReason} className="Reject">
                Reject
              </button>
            </td>
          </tr>
        </tbody>
      </Table>

      <ModalComponent
        show={showReason}
        onHide={handleClose}
        title={"Reason For Rejection"}
        footerText={"Submit"}
        onClick={handleClose}
      >
        <Modal.Body>
          <Form>
            <FormComponent
              label={"Reason"}
              type={"text"}
              placeholder={"Enter Reason"}
              className={"mb-3"}
              controlId={"exampleForm.ControlTextarea1"}
              as={"textarea"}
              rows={3}
            />
          </Form>
        </Modal.Body>
      </ModalComponent>

      <ModalComponent
        show={showApprove}
        onHide={handleCloseApprove}
        title={"Change Status"}
        footerText={"Submit"}
        onClick={handleCloseApprove}
      >
        <Modal.Body>
          <Form>
            {/* <FormComponent label={'Reason'} type={'text'} placeholder={'Enter Reason'} className={"mb-3"} controlId={"exampleForm.ControlTextarea1"} as={"textarea"} rows={3} /> */}
            <DropDown option={BatchName} label={"Batch Name"} />
            <DropDown option={BatchID} label={"Batch ID"} />
          </Form>
        </Modal.Body>
      </ModalComponent>
    </div>
  );
}

export default AdminRequest;
