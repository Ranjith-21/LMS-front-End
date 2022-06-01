import { useState } from "react";
import {Button,Col,Form,Nav,Navbar,Row,} from "react-bootstrap";
import { useNavigate } from 'react-router';
import FormSelect from './../atoms/FormSelect';
import './SignUp.css'
import FormControl from './../atoms/FormControl';
import ButtonComp from "../atoms/ButtonComp";

function EducationDetails() {
  const [eduType, seteduType] = useState(
    [
      'Select Below','Masters(M..tech)','Bachelor(B.E)','Post Graduate'
    ]
  )
const [state, setstate] = useState([
  'Select Below','Karnataka','Kerala','TamilNadu'
])

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
                <hr size='10' />
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
            <FormSelect style={{ textAlign: "left" }} as={Col} label={'Education Type'} name="EducationType" value={educationData.EducationType} onChange={getEducationData}  options={eduType}  />
            <FormControl style={{ textAlign: "left" }} as={Col} label={'Year Of Passing'} type={"text"} name={"YearOfpassing"}  value={educationData.YearOfpassing}   onChange={getEducationData}  />
          </Row>
          <Row className="mb-3">
            <FormControl  style={{ textAlign: "left" }}as={Col} label={'Percentage (%)'} type="text"name="PerCenTage"  value={educationData.PerCenTage} onChange={getEducationData} />
            <FormControl style={{ textAlign: "left" }} as={Col} label={'University Name'}  type="text" name="UnivercityName" value={educationData.UnivercityName} onChange={getEducationData}  />
          </Row>
          <Row className="mb-3">
            <FormControl style={{ textAlign: "left" }} as={Col} label={'Institue Name' }  type="text" name="InstituteName"  value={educationData.InstituteName}   onChange={getEducationData} />
            <FormControl style={{ textAlign: "left" }} as={Col} label={'Specializataion'}   type="text" name="Specilization" value={educationData.Specilization}   onChange={getEducationData} />
          </Row>
          <Row className="mb-3">
            <FormSelect style={{ textAlign: "left" }}  as={Col} label={'State'} name="State" value={educationData.State}  onChange={getEducationData} options={state}   />
          </Row>
          <Row>
          <p style={{ textAlign:'end',cursor:'pointer' }} >
          <i class="fa-solid fa-plus"></i>
          <b> Add</b>
            </p>
            <Navbar className="container fluid  col-8 mt-5 square border border-light border-4 rounded-3 " expand="lg">
              {/* <Container fluid> */}
              <ButtonComp variant="secondary" size="md" onClick={navigatePrevious} label={'Previous'} />
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              ></Nav>
              <Form className="d-flex">
                <ButtonComp variant="primary" size="md" onClick={ValidateFunction}  label={'Next'}/>
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
