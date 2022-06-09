import { useState } from "react";
import {Accordion, Button,Col,Form,Nav,Navbar,Row,} from "react-bootstrap";
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

// Initaila Data for Education Details >>>

  const [inputList, setInputList] = useState([{
    EducationType: "",
    YearOfpassing: "",
    PerCenTage: "",
    UnivercityName: "",
    InstituteName: "",
    Specilization: "",
    State: "",
  }]);

// HandleChange for Education Details >>>

  let handleChange=(e,ind)=>
{
  const {name,value}=e.target;
  let newInputList=inputList.map((item,index)=>{
    if(index===ind)
    {
      console.log(item);
      return {...item,[name]:value}
    }
    console.log(item);
    return item;
  }
  )
  setInputList(newInputList);
}

// Delete Data for Education Details >>>

let deleteEducationData=(e,ind)=>
{
  e.preventDefault();
  const list = [...inputList];
  list.splice(ind, 1);
  setInputList(list);
}


// Add Data for Education Details >>>

let addEducationData=()=>
{
  setInputList([...inputList,{
    ContactType:'',
    ContactNumber:''
  }])
}

// Submit Data for Education Details into LocalStorage >>>

  let DatasentToLocalStorage = () => {
    localStorage.setItem("educationData", JSON.stringify(inputList));
  };

// Validating and Navigating to next Page >>>

  let ValidateAndNavigate = () => {
    if (inputList.length > 0) {
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
        <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>Education Details</Accordion.Header>
    <Accordion.Body>
      {inputList.map((val,ind)=>
      {
        return <Form className="container fluid  mt-3 square border border-light border-4 rounded-3" >
             <Row className="mb-3">
            <FormSelect style={{ textAlign: "left" }} as={Col} label={'Education Type'} name="EducationType" value={val.EducationType} onChange={(e)=>handleChange(e,ind)}  options={eduType}  />
            <FormControl style={{ textAlign: "left" }} as={Col} label={'Year Of Passing'} type={"text"} name="YearOfpassing"  value={val.YearOfpassing}   onChange={(e)=>handleChange(e,ind)}  />
          </Row>
           <Row className="mb-3">
            <FormControl  style={{ textAlign: "left" }}as={Col} label={'Percentage (%)'} type="text"name="PerCenTage"  value={val.PerCenTage} onChange={(e)=>handleChange(e,ind)} />
            <FormControl style={{ textAlign: "left" }} as={Col} label={'University Name'}  type="text" name="UnivercityName" value={val.UnivercityName} onChange={(e)=>handleChange(e,ind)}  />
          </Row>
           <Row className="mb-3">
            <FormControl style={{ textAlign: "left" }} as={Col} label={'Institue Name' }  type="text" name="InstituteName"  value={val.InstituteName}   onChange={(e)=>handleChange(e,ind)} />
            <FormControl style={{ textAlign: "left" }} as={Col} label={'Specializataion'}   type="text" name="Specilization" value={val.Specilization}  onChange={(e)=>handleChange(e,ind)} />
          </Row>
           <Row className="mb-3">
            <FormSelect style={{ textAlign: "left" }}  as={Col} label={'State'} name="State" value={val.State}  onChange={(e)=>handleChange(e,ind)} options={state}   />
          </Row>
           <div style={{textAlign:'end'}}>
                {inputList.length !== 1 && <button  onClick={(e)=>
                {
                    deleteEducationData(e,ind)
                }} className="btn btn-outline-primary p-1 m-2" >Remove</button>}
              {inputList.length - 1 === ind &&  <p onClick={addEducationData} style={{ textAlign:'end',cursor:'pointer' }}  >
          <b>➕ Add</b>
            </p>}
            </div>
        </Form>
      })}
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
  <Row>
            <Navbar className="container fluid  col-8 mt-5 square border border-light border-4 rounded-3 " expand="lg">
              <ButtonComp variant="secondary" size="md" onClick={navigatePrevious} label={'Previous'} />
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              ></Nav>
              <Form className="d-flex">
                <ButtonComp variant="primary" size="md" onClick={ValidateAndNavigate}  label={'Next'}/>
              </Form>
            </Navbar>
          </Row>
      </div>
    </div>
  );
}

export default EducationDetails;
