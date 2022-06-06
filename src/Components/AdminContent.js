import React, { useState } from 'react'
import './AdminContent.css'
import { Breadcrumb, Button, Container, Navbar, Row } from 'react-bootstrap'
import { Link, Route, Routes } from 'react-router-dom';
import AdminMentor from './AdminMentor' ;
import AdminRequest from './AdminRequest';
import AdminBatch from './AdminBatch';
import InputComponent from './atoms/InputComponent';
import { useNavigate } from 'react-router';

// const { Sider, Content,Header } = Layout;

function AdminContent() {
const [isBatch, setisBatch] = useState(false)
const [isMentor, setisMentor] = useState(false)
const [isSignup, setisSignup] = useState(false)
const [page, setPage] = useState("Batch")

let changeBatchImage=()=>
{
  if(isBatch===false)
  {
    setisBatch(true)
    setPage("Batch")
    if(isMentor || isSignup)
    {
      setisMentor(false)
      setisSignup(false)
    }
  }
}

let changeMentorImage=()=>
{
  setisMentor(true)
  setPage("Mentor")
  if(isBatch || isSignup)
  {
    setisBatch(false)
    setisSignup(false)
  }
}

let changeSignupImage=()=>
{
  setisSignup(true)
  setPage("Request")
  if(isBatch || isMentor)
  {
    setisBatch(false)
    setisMentor(false)
  }
}

let navigate=useNavigate()
let logout=()=>
{
  navigate('/')
}

  return (
    <div >
      <Navbar className='navBar'>
        <Container fluid>
          <Navbar.Brand className='justify-content-start'><img src={require('./../Assests/logob.png')} style={{ width: '150px' }} alt='Techno Elevate' /></Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Text className='justify-content-center' style={{width:'500px'}} >
            <div class="form-group has-search">
              <span class="fa fa-search form-control-feedback"></span>
              {/* <input type="text" class="form-control" placeholder="Search" style={{ width: '500px' }} /> */}
              <InputComponent placeholder='Search' style={{width:"100%"}}  type='text' className='form-control'/>
            </div>
          </Navbar.Text>
          <Navbar.Text className='jsutify-content-end'  >
            <Button variant="outline-primary" style={{ padding: '5px 20px' }} onClick={logout} >Logout</Button>
          </Navbar.Text>
        </Container>
      </Navbar>
  
      <Row>
        <div className='col-lg-1 mainAdmin' >
          <br />
          {isBatch?
          // <Link to='/Admin/Batch'>
           <button className='BatchIcon1' value='admin' onClick={changeBatchImage} >
      <img  width='25px' alt='' style={{marginLeft:'10px'}} src={require('./../Assests/Batch1.png')} />Batch
      </button>
          // </Link>
          :
          // <Link to='/Admin/Batch'>
          <button className='BatchIcon' onClick={changeBatchImage}>
          <img alt='' width='25px' style={{marginLeft:'10px'}}  src={require('./../Assests/Batch.png')} />Batch
          </button>
          // </Link>
          }
          <br /> <hr style={{ width: '51px' }} />
          {isMentor?
          // <Link to='/Admin/Mentor' >
            <button className='MentorIcon1' value='admin'  onClick={changeMentorImage}  >
            <img  width='25px' alt=''src={require('./../Assests/Mentor1.png')} />
          
            Mentor
            </button>
          // </Link>
          :
          // <Link  to='/Admin/Mentor' >
          <button className='MentorIcon' value='admin'  onClick={changeMentorImage}  >
            <img  width='25px' alt=''  src={require('./../Assests/Mentor.png')} />
            &nbsp;
            Mentor
            </button>
          // </Link>
          }
<br /><hr style={{ width: '51px' }} />

          {isSignup?
          // <Link to='/Admin/Request'>
            <button className='RequestIcon1' onClick={changeSignupImage}  >
            <img width='25px' alt='' style={{marginLeft:'0px'}} src={require('./../Assests/Request1.png')} />
            &nbsp;
            Request
            </button>
          // </Link>
          :
            <button className='RequestIcon'  onClick={changeSignupImage}  >
            <img width='25px' alt='' style={{marginLeft:'0px'}} src={require('./../Assests/Request.png')} />
            &nbsp;
            Request
            </button>

          }

        </div>
        {/* <div className='col-lg-1 col-md-1 col-sm-1' style={{width:'5px'}} ></div> */}
        <Breadcrumb className='adminBread'>
          <Breadcrumb.Item href="#" active>Home</Breadcrumb.Item>
          <Breadcrumb.Item href='/Admin/Batch'>Batch</Breadcrumb.Item>
          <Breadcrumb.Item href="/Admin/Mentor">
            Mentor
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/Admin/Request">
            Request
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className=' adminRoutes col-lg-10 col-md-10 col-sm-10 col-xs-10' >
          {page==="Batch" && <AdminBatch /> }
          {page==="Mentor" && <AdminMentor /> }
          {page==="Request" && <AdminRequest /> }
        </div>
      </Row>

    </div>
  )
}

export default AdminContent