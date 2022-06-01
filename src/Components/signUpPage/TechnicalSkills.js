import React, { useState } from 'react'
import {Button,Col,Container,Form,Nav,Navbar,Row,} from "react-bootstrap";
import { useNavigate } from 'react-router';
import FormSelect from '../atoms/FormSelect';
import FormControl from './../atoms/FormControl';
import ButtonComp from './../atoms/ButtonComp';


function TechnicalSkills() {
const [technicalData, setTechnicalData] = useState({
  SkillType:"",
  SkillRatings:"",
  YEarOfExperience:"",
})

const [exp, setexp] = useState([
  'Select Below',1,2,3,4,5
])

let getTechnicalDetails=(e)=>{
  setTechnicalData({...technicalData,[e.target.name]:e.target.value})
}

console.log(technicalData);

let DatasentToLocalStorage = () => {
  localStorage.setItem("Technical Details", JSON.stringify(technicalData));
};
let ValidateFunction = () => {
  if (
    technicalData.SkillType &&
    technicalData.SkillRatings &&
    technicalData.YEarOfExperience
  ) {
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
    <Form className="container fluid  mt-3 square border border-light border-4 rounded-3 ">
      <Row className="mb-3">
        <FormControl  style={{ textAlign: "left" }} as={Col} label={'Skill Type'} type="text"  name="SkillType"  value={technicalData.SkillType}  onChange={getTechnicalDetails}  />
        <FormControl style={{ textAlign: "left" }} as={Col} label={'Skill Rating'}  type="text"  name='SkillRatings'  value={technicalData.SkillRatings} onChange={getTechnicalDetails} />
        <FormSelect  style={{ textAlign: "left" }} as={Col} label={'Year Of Experience (Over Skill)'} name="YEarOfExperience" value={technicalData.YEarOfExperience} onChange={getTechnicalDetails} options={exp} />
  
      </Row>
      <Row>
        <Navbar className="container fluid  col-8 mt-5 square border border-light border-4 rounded-3 " expand="lg" >
          <Container fluid>
            <ButtonComp variant="secondary" size="md" onClick={navigatePrevious}  label={'Previous'} />
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll></Nav>
          <Form className="d-flex">
            <ButtonComp variant="primary" size="md" onClick={ValidateFunction} label={'Next'} />
          </Form>
          </Container>
        </Navbar>
      </Row>
    </Form>
  </div></div>
  )
}

export default TechnicalSkills