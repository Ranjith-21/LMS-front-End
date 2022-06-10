import React,{useState} from "react";
import { Container, Navbar, Row ,NavDropdown, Breadcrumb,Modal} from "react-bootstrap";
import InputComponent from './../Components/atoms/InputComponent';
import { Button } from "react-bootstrap";
// import './AdminContent.css'
import './../Components/AdminContent.css'
import { Avatar } from "antd";
import { UserOutlined } from '@ant-design/icons';
import ModalComponent from './../Components/atoms/ModalComponent';
import EmployeeInitialPage from "./EmployeeInitialPage";
import { useNavigate } from 'react-router';
import EmployeeDetails from './EmployeeDetails';


function Employee() {
    const [showModal, setshowModal] = useState(true)

    let handleClose = () => {
        setshowModal(false)
    }

    let navigate=useNavigate()
    let logout=()=>
    {
        navigate('/')
    }
  return (
    <div>
      <Navbar className="navBar">
        <Container fluid>
          <Navbar.Brand className="justify-content-start">
            <img
              src={require("./../Assests/logob.png")}
              style={{ width: "150px" }}
              alt="Techno Elevate"
            />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Text
            className="justify-content-center"
            style={{ width: "500px" }}
          >
            <div class="form-group has-search">
              <span
                class="fa fa-search form-control-feedback"
                style={{ marginTop: "-3px" }}
              ></span>
              <InputComponent
                placeholder="Search"
                style={{ width: "100%" }}
                type="text"
                className="form-control"
              />
            </div>
          </Navbar.Text>
          <Navbar.Text className="d-flex avatar">
            <Avatar size="large" icon={<UserOutlined />} />
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="shalini"
              menuVariant="light"
            >
              <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Change Password
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" onClick={logout}  >Logout</NavDropdown.Item>
            </NavDropdown>
          </Navbar.Text>
        </Container>
      </Navbar>
      <Row>
        <div className="col-lg-1 mainAdmin">
          <br />
          <button className="dashboard1" value="admin">
            <img
              width="25px"
              alt=""
              src={require("./../Assests/dashBoard.png")}
              //   onClick={() => setpage("batch")}
            />
            Dashboard
          </button>
          <br /> <hr style={{ width: "51px" }} />
        </div>
        <Breadcrumb className="adminBread">
          <Breadcrumb.Item href="#" active>
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/Admin/Batch">Profile</Breadcrumb.Item>
        </Breadcrumb>

        <div className=" adminRoutes col-lg-10 col-md-10 col-sm-10 col-xs-10">
          {/* {page === "Batch" && <AdminBatch />}
          {page === "Mentor" && <AdminMentor />}
          {page === "Request" && <AdminRequest />} */}
          {/* <EmployeeInitialPage/> */}
          <EmployeeDetails/>
        </div>
      </Row>

      <Modal
        show={showModal}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title
            style={{ fontSize: "30px", color: "#086288", textAlign: "center" }}
          >
            Your Request Will be Approved in Sometime, Please Wait
          </Modal.Title>
        </Modal.Header>
        <Modal.Header className="justify-content-center">
          <button
            className="btn btn-primary"
            style={{ padding: "2px 30px", fontSize: "25px" }}
            onClick={handleClose}
          >
            Return
          </button>
        </Modal.Header>
      </Modal>
    </div>
  );
}

export default Employee;
