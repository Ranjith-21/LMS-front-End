import React from 'react'
import { Breadcrumb, Navbar, NavDropdown, Row } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import InputComponent from '../atoms/InputComponent';
// import { Button } from 'react-bootstrap';
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import './../AdminContent.css'

function EmployeeMainPage() {
  return (
    <div>
        <Navbar style={{ boxShadow:'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px'}}>
  <Container>
    <Navbar.Brand href="#home" className='justify-content-start'><img src={require('./../../Assests/logob.png')} style={{ width: '150px' }} alt='Techno Elevate' /></Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Text className='justify-content-center' >
            <div class="form-group has-search">
              <span class="fa fa-search form-control-feedback"></span>
              {/* <input type="text" class="form-control" placeholder="Search" style={{ width: '500px' }} /> */}
              <InputComponent placeholder='Search' style={{width:"500px"}}  type='text' className='form-control'/>
            </div>
          </Navbar.Text>
      <Navbar.Text  className="justify-content-end  d-flex">
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
    <div className='col-lg-1 col-sm-1 col-xs-1' style={{height:'86vh',backgroundColor:'#f8f8f8'}} >
    <div style={{width:'50px',height:'100%', boxShadow: 'rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px',backgroundColor:'white'}}>
    <br />
          <Link to='/Mentor/DashBoard' ><button className='BatchIcon' style={{ backgroundColor: 'none' }} ><img alt='' width='25px' style={{marginLeft:'8px'}}  src={require('./../../Assests/Batch.png')} /></button></Link>
          <br /> <hr style={{ width: '51px' }} />
          <Link to='/Mentor/Batch' ><button className='MentorIcon' value='admin' style={{ backgroundColor: 'none' }}  ><img  width='25px' alt='' style={{marginLeft:'8px'}} src={require('./../../Assests/Mentor.png')} /></button></Link>
          <br /><hr style={{ width: '51px' }} />
    </div>
            </div>
    <div className='col-lg-11 col-sm-11 col-xs-11' style={{marginTop:'5px',height:'86vh',backgroundColor:'#f8f8f8',position:'relative',right:'20px'}} >
    <Breadcrumb  >
          <Breadcrumb.Item href="#" active>Home</Breadcrumb.Item>
          <Breadcrumb.Item href='/Mentor/Dashboard'>Dashboard</Breadcrumb.Item>
          <Breadcrumb.Item href="/Mentor/Batch">
            Batch
          </Breadcrumb.Item>
        </Breadcrumb>
       <div className='col-lg-12 col-sm-12 col-xs-12'style={{height:'90%',backgroundColor:'white',marginTop:'-10px'}}>

       </div>
       
    </div>
    </Row>



    </div>
  )
}

export default EmployeeMainPage