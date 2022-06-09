import React, { useState } from 'react'
import {Accordion, Button,Col,Container,Form,Nav,Navbar,Row,} from "react-bootstrap";
import { useNavigate } from 'react-router';
import FormSelect from '../atoms/FormSelect';
import FormControl from './../atoms/FormControl';
import ButtonComp from './../atoms/ButtonComp';


function TechnicalSkills() {
const [inputList, setInputList] = useState([{
  SkillType:"",
  SkillRatings:"",
  YearOfExperience:"",
}])

const [exp, setexp] = useState([
  'Select Below',1,2,3,4,5
])

// HandleChange for Technical Details >>>

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

// Delete Data for Technical Details >>>

let deleteTechnicalData=(e,ind)=>
{
  e.preventDefault();
  const list = [...inputList];
  list.splice(ind, 1);
  setInputList(list);
}


// Add Data for Technical Details >>>

let addTechnicalData=()=>
{
  setInputList([...inputList,{
    ContactType:'',
    ContactNumber:''
  }])
}

  let DatasentToLocalStorage = () => {
    localStorage.setItem("TechnicalSkills", JSON.stringify(inputList));
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

    let navigate = useNavigate()
  let navigateNext =()=>
  {
    navigate('/Experience')
  }
  let navigatePrevious=()=>
  {
      navigate('/BankDetails')
  }
  return (
    <div> <div className="container fluid">
    <navbar>
      <Nav variant="scrollable" defaultActiveKey="/Secondary">
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
        <Nav.Link
            href="/Secondary"
            className='header'
          >Technical Skills
          <hr size='10' />
          </Nav.Link> 
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
    <Accordion.Header>Technical Skills</Accordion.Header>
    <Accordion.Body>
      {inputList.map((val,ind)=>
      {
        return <Form className="container fluid  mt-3 square border border-light border-4 rounded-3 ">
      <Row className="mb-3">
        <FormControl  style={{ textAlign: "left" }} as={Col} label={'Skill Type'} type="text"  name="SkillType"  value={val.SkillType}  onChange={(e)=>handleChange(e,ind)}  />
        <FormControl style={{ textAlign: "left" }} as={Col} label={'Skill Rating'}  type="text"  name='SkillRatings'  value={val.SkillRatings} onChange={(e)=>handleChange(e,ind)} />
        <FormSelect  style={{ textAlign: "left" }} as={Col} label={'Year Of Experience (Over Skill)'} name="YearOfExperience" value={val.YearOfExperience} onChange={(e)=>handleChange(e,ind)} options={exp} />
      </Row>
       <div style={{textAlign:'end'}}>
                {inputList.length !== 1 && <button  onClick={(e)=>
                {
                    deleteTechnicalData(e,ind)
                }} className="btn btn-outline-primary p-1 m-2" >Remove</button>}
              {inputList.length - 1 === ind &&  <p onClick={addTechnicalData} style={{ textAlign:'end',cursor:'pointer' }}  >
          <b>➕ Add</b>
            </p>}
            </div>
    </Form>
      })}
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
    <Row>
        <Navbar className="container fluid  col-8 mt-5 square border border-light border-4 rounded-3 " expand="lg" >
          <Container fluid>
            <ButtonComp variant="secondary" size="md" onClick={navigatePrevious}  label={'Previous'} />
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll></Nav>
          <Form className="d-flex">
            <ButtonComp variant="primary" size="md" onClick={ValidateAndNavigate} label={'Next'} />
          </Form>
          </Container>
        </Navbar>
      </Row>
  </div></div>
  )
}

export default TechnicalSkills