import React, { useEffect, useState } from 'react'
import {Accordion, Button,Col,Container,Form,Nav,Navbar,Row,} from "react-bootstrap";
import { useNavigate } from 'react-router';
import ButtonComp from '../atoms/ButtonComp';
import FormControl from '../atoms/FormControl';
import FormSelect from './../atoms/FormSelect';

function Contact() {
const [inputList, setInputList] = useState([{
        ContactType:'',
        ContactNumber:''
    }])

  const [contactType, setcontactType] = useState([
   'Select Below', 1,2,3,4,5
  ])

let DatasentToLocalStorage = () => {
  localStorage.setItem("contact Details", JSON.stringify(inputList));
};

let navigate = useNavigate()
 
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

// Detele Contact Details
let deleteContactData=(e,ind)=>
{
  e.preventDefault();
  const list = [...inputList];
  list.splice(ind, 1);
  setInputList(list);
}

//Add Contact Details
let addContactData=()=>
{
  setInputList([...inputList,{
    ContactType:'',
    ContactNumber:''
  }])
}

//Submit Contact Details
let submitData=()=>
{
  if(inputList.length>0)
  {
    DatasentToLocalStorage();
    navigate('/RecordStatus')
     addData();
  }else
  {
    alert("Please Fill all the feilds");
  }
}

    let navigatePrevious=()=>
    {
        navigate('/TechnicalSkills')
    }


    let getPrimaryData = JSON.parse(localStorage.getItem("PrimaryData"));
    let getSecondaryData = JSON.parse(localStorage.getItem("SecondaryData"));
    let getEducationData = JSON.parse(localStorage.getItem("educationData"));
    let getAddressData = JSON.parse(localStorage.getItem("AddressDetails"));
    let getBankData = JSON.parse(localStorage.getItem("Bank Details"));
    let getTechnicalData = JSON.parse(localStorage.getItem("TechnicalSkills"));
    let getExperience = JSON.parse(localStorage.getItem("Experience Details"));
    let getContactData = JSON.parse(localStorage.getItem("contact Details"));

    
    let mediumPhase = {
      primary: getPrimaryData,
      secondary: getSecondaryData,
      education: getEducationData,
      address: getAddressData,
      bank: getBankData,
      technical: getTechnicalData,
      experience: getExperience,
      contact: getContactData,
    };
    console.log(mediumPhase);
    
    if(getPrimaryData && getSecondaryData && getEducationData && getAddressData && getBankData && getTechnicalData && getExperience && getContactData)
    {
      localStorage.setItem('mediumPhase',JSON.stringify(mediumPhase))
    }
    // const [data, setdata] = useState([mediumPhase]);
    let getMediumPhase=JSON.parse(localStorage.getItem('mediumPhase'));
    let getAllData = JSON.parse(localStorage.getItem("AllSignUpData"));
    let addData=()=>
    {
      // let dataCopy=[]
      // dataCopy.push(getMediumPhase);
      // setdata(dataCopy);
      getAllData.push(getMediumPhase);
      localStorage.setItem("AllSignUpData", JSON.stringify(getAllData));
      // console.log(dataCopy);
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
          <Nav.Link href="/TechnicalSkills">Technical Skills</Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link
              href="/Contact"
              className='header'
            >Contact
            <hr size='10' />
            </Nav.Link> 
          </Nav.Item>
        </Nav>
      </navbar>
      <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>Contact</Accordion.Header>
    <Accordion.Body>
         {inputList.map((val,ind)=>
        {
            return <Form className="container fluid  mt-3 square border border-light border-4 rounded-3" >
                <Row className="mb-3">
                     <FormSelect style={{ textAlign: "left" }} as={Col} label={'Contact Type'}  name='ContactType' value={val.ContactType} onChange={(e)=>handleChange(e,ind)} options={contactType}  />
          <FormControl style={{ textAlign: "left" }} as={Col} label={'Contact Number'}  type="tel" name='ContactNumber' value={val.ContactNumber}   onChange={(e)=>handleChange(e,ind)} />
            <div style={{textAlign:'end'}}>
                {inputList.length !== 1 && <button  onClick={(e)=>
                {
                    deleteContactData(e,ind)
                }} className="btn btn-outline-primary p-1 m-2" >Remove</button>}
              {inputList.length - 1 === ind &&  <p onClick={addContactData} style={{ textAlign:'end',cursor:'pointer' }}  >
          <b>➕ Add</b>
            </p>}
            </div>
                </Row>
            </Form>
        })}
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
      <Row>
          <Navbar className="container fluid  col-8 mt-5 square border border-light border-4 rounded-3 "expand="lg">
            <Container fluid>
              <ButtonComp  variant="secondary" size="md" onClick={navigatePrevious} label={'Previous'}  />
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll></Nav>
            <Form className="d-flex">
              <ButtonComp variant="primary" size="md" onClick={submitData} label={'Submit'}  />
            </Form>
            </Container>
          </Navbar>
        </Row>
    </div></div>
    )
}

export default Contact
