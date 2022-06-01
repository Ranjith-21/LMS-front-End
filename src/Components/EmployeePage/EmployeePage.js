import { Avatar } from 'antd'
import React, { useState } from 'react'
import { Breadcrumb, Button, Container, Navbar, NavDropdown, Row } from 'react-bootstrap'
import InputComponent from '../atoms/InputComponent'
import { UserOutlined } from '@ant-design/icons';
import './../AdminContent.css'
import { Link, Route, Routes } from 'react-router-dom';
import EmployeeBatch from './EmployeeBatch';
import EmployeeBatch2 from './EmployeeBatch2';
import './EmployeePage.css'

function EmployeePage() {
    const [isImage, setisImage] = useState(false)
const [isImage1, setisImage1] = useState(false)

let changeImage=()=>
{
  if(isImage===false)
  {
    setisImage(true)
    if(isImage1===true)
    {
      setisImage1(false)
    }
  }
}

let changeImage1=()=>
{
  if(isImage1===false)
  {
    setisImage1(true)
    if(isImage===true)
    {
      setisImage(false)
    }
  }
}
  return (
    <div>
            <Navbar className='navBar'>
        <Container fluid>
          <Navbar.Brand className='justify-content-start'><img src={require('./../../Assests/logob.png')} style={{ width: '150px' }} alt='Techno Elevate' /></Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Text className='justify-content-center' style={{width:'500px'}} >
            <div class="form-group has-search">
              <span class="fa fa-search form-control-feedback"></span>
              <InputComponent placeholder='Search' style={{width:"100%"}}  type='text' className='form-control'/>
            </div>
          </Navbar.Text>
          <Navbar.Text  className="d-flex avatar">
      <Avatar size="large" icon={<UserOutlined/>} />
      <NavDropdown
          id="nav-dropdown-dark-example"
          title="shalini"
          menuVariant="light"
        >
          <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Change Password</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Logput</NavDropdown.Item>
        </NavDropdown>
      </Navbar.Text>
        </Container>
      </Navbar>


      <Row>
        <div className='col-lg-1 empAdmin' >
          <br />
          {isImage?<Link  to='/Mentor/DashBoard'>
      <button  className='dashboard1' value='admin'onClick={changeImage} >
      <img  width='25px' alt='' src={require('./../../Assests/dashBoard.png')}/>
      Dashboard
      </button>
      </Link>:
      <Link  to='/Mentor/DashBoard'>
      <button className='dashboard' value='admin' style={{ backgroundColor: 'none' }}  onClick={changeImage} >
      <img  width='25px' alt='' src={require('./../../Assests/dashboard1.png')} />
      Dashboard
      </button>
      </Link>
      } <br /> <hr style={{ width: '59px' }} /> 

      {isImage1?<Link to='/Mentor/Batch' >
       <button  className='empMentor1' value='admin'onClick={changeImage1} >
       <img  width='25px' alt='' src={require('./../../Assests/Batch1.png')}/>
       Mentor
       </button>
      </Link>:
       <Link  to='/Mentor/Batch'>
      <button className='empMentor' value='admin' style={{ backgroundColor: 'none' }}  onClick={changeImage1} >
      <img  width='25px' alt='' src={require('./../../Assests/Batch.png')} />
      Mentor
      </button>
       </Link>
      }
<br /><hr style={{ width: '59px' }} />
          </div>
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
             <Routes>
           <Route path='/Mentor/Batch' element={<EmployeeBatch/>} /> 
           <Route path='/Mentor/EmployeeList' element={<EmployeeBatch2/>}/>
         </Routes> </div>
          </Row>
    </div>
  )
}

export default EmployeePage