import React, { useState } from "react";
import {Accordion, Button,Col,Container,Form,Nav,Navbar,Row,} from "react-bootstrap";
import { useNavigate } from "react-router";
import ButtonComp from "../atoms/ButtonComp";
import FormControl from "../atoms/FormControl";
import FormSelect from "../atoms/FormSelect";

function Experience() {
  const [inputList, setInputList] = useState([{
    CompanyName: " ",
    YearOfExperience: " ",
    DateOfJoining: " ",
    DateOfRelieving: " ",
    Designation: " ",
    Location: " ",
  }]);

  const [exp, setexp] = useState([
    "Select Below",1,2,3,4
  ])

// HandleChange for Experience Details >>>

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

// Delete Data for Experience Details >>>

let deleteExperienceData=(e,ind)=>
{
  e.preventDefault();
  const list = [...inputList];
  list.splice(ind, 1);
  setInputList(list);
}


// Add Data for Experience Details >>>

let addExperienceData=()=>
{
  setInputList([...inputList,{
    ContactType:'',
    ContactNumber:''
  }])
}

let DatasentToLocalStorage = () => {
  localStorage.setItem("Experience Details", JSON.stringify(inputList));
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
    navigate("/Contact");
  };
  let navigatePrevious = () => {
    navigate("/TechnicalSkills");
  };
  return (
    <div>
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
        <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>Experience</Accordion.Header>
    <Accordion.Body>
      {inputList.map((val,ind)=>
      {
        return <Form className="container fluid  mt-3 square border border-light border-4 rounded-3 ">
          <Row className="mb-3">
            <FormControl  style={{ textAlign: "left" }}as={Col} label={'Company Name'}  type="text" name="CompanyName" value={val.CompanyName}  onChange={(e)=>handleChange(e,ind)}  />
            <FormControl   style={{ textAlign: "left" }} as={Col} label={'Years Of Experiecnce'}  type="text" name="YearOfExperience" value={val.YearOfExperience}  onChange={(e)=>handleChange(e,ind)} />
            <hr style={{visibility:'hidden'}} />
            <FormControl  style={{ textAlign: "left" }} as={Col}   label={'Date of Joining'}  type="date"  name="DateOfJoining"  value={val.DateOfJoining}   onChange={(e)=>handleChange(e,ind)} />
            <FormControl   style={{ textAlign: "left" }} as={Col} label={'Date Of Relieveing'}   type="date"  name="DateOfRelieving"  value={val.DateOfRelieving}   onChange={(e)=>handleChange(e,ind)}  />
            <hr style={{visibility:'hidden'}} />
            <FormSelect style={{ textAlign: "left" }}  as={Col} label={'Designation'}    name="Designation"  value={val.Designation}   onChange={(e)=>handleChange(e,ind)} options={exp}  />
            <FormControl  style={{ textAlign: "left" }} as={Col} label={'Location'}  type="text"  name="Location"  value={val.Location}   onChange={(e)=>handleChange(e,ind)}  />
          </Row>
           <div style={{textAlign:'end'}}>
                {inputList.length !== 1 && <button  onClick={(e)=>
                {
                    deleteExperienceData(e,ind)
                }} className="btn btn-outline-primary p-1 m-2" >Remove</button>}
              {inputList.length - 1 === ind &&  <p onClick={addExperienceData} style={{ textAlign:'end',cursor:'pointer' }}  >
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
              <Container fluid>
                <ButtonComp  variant="secondary" size="md" onClick={navigatePrevious} label={'Previous'}  />
                <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll ></Nav>
                <Form className="d-flex">
                  <ButtonComp variant="primary" size="md" onClick={ValidateAndNavigate} label={'Next'}  />
                </Form>
              </Container>
            </Navbar>
          </Row>
      </div>
    </div>
  );
}

export default Experience;
