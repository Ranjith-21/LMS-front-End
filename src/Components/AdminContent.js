import React, { useState } from 'react'
import './AdminContent.css'
import { Breadcrumb, Button, Container, Navbar, Row } from 'react-bootstrap'
import { Link, Route, Routes } from 'react-router-dom';
import AdminMentor from './AdminMentor';
import AdminRequest from './AdminRequest';
import AdminBatch from './AdminBatch';
import InputComponent from './atoms/InputComponent';

// const { Sider, Content,Header } = Layout;

function AdminContent() {
  return (
    <div >
      <Navbar className='navBar'>
        <Container fluid>
          <Navbar.Brand className='justify-content-start'><img src={require('./../Assests/logob.png')} style={{ width: '150px' }} alt='Techno Elevate' /></Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Text className='justify-content-center' >
            <div class="form-group has-search">
              <span class="fa fa-search form-control-feedback"></span>
              {/* <input type="text" class="form-control" placeholder="Search" style={{ width: '500px' }} /> */}
              <InputComponent placeholder='Search' style={{width:"500px"}}  type='text' className='form-control'/>
            </div>
          </Navbar.Text>
          <Navbar.Text className='jsutify-content-end'  >
            <Button variant="outline-primary" style={{ padding: '5px 20px' }} >Logout</Button>
          </Navbar.Text>
        </Container>
      </Navbar>
      {/* <Breadcrumb style={{position:'absolute',top:'85px',left:'100px',fontSize:'12px'}} >
  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
    Library
  </Breadcrumb.Item>
  <Breadcrumb.Item active>Data</Breadcrumb.Item>
</Breadcrumb>  */}

      {/* <Layout style={{border:'1px solid red'}} >
          <Sider  style={{display:'flex',flexDirection:'column'}} >
            <br/>
            <Link to='/' ><Button variant='light' style={{backgroundColor:'none'}} ><img src={require('./../Assests/Batch.png')}  alt='' /></Button></Link>
            <br/> <hr/>
            <Link to='/Admin/Mentor' ><Button variant='light' style={{backgroundColor:'none'}} ><img src={require('./../Assests/Mentor.png')} alt='' /></Button></Link>
            <br/><hr/>
            <Link to='/Admin/Request' ><Button variant='light' style={{backgroundColor:'none'}} ><img src={require('./../Assests/Request.png')} alt='' /></Button></Link>
          </Sider>
       <Layout>
            <Content>
              <div className='site-card-border-less-wrapper' >content </div>
              
              </Content>
              </Layout>
          
      </Layout> */}

      <Row>
        <div className='col-lg-1' style={{ width: '65px', height: '85vh', boxShadow: 'rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px' }}  >
          <br />
          <Link to='/Admin/Batch' ><button className='BatchIcon' style={{ backgroundColor: 'none' }} ><img alt='' width='25px' style={{marginLeft:'8px'}}  src={require('./../Assests/Batch.png')} /></button></Link>
          <br /> <hr style={{ width: '51px' }} />
          <Link to='/Admin/Mentor' ><button className='MentorIcon' value='admin' style={{ backgroundColor: 'none' }}  ><img  width='25px' alt='' style={{marginLeft:'8px'}} src={require('./../Assests/Mentor.png')} /></button></Link>
          <br /><hr style={{ width: '51px' }} />
          <Link to='/Admin/Request' ><button className='RequestIcon' style={{ backgroundColor: 'none' }}  ><img width='25px' alt='' style={{marginLeft:'8px'}} src={require('./../Assests/Request.png')} /></button></Link>
        </div>
        {/* <div className='col-lg-1 col-md-1 col-sm-1' style={{width:'5px'}} ></div> */}
        <Breadcrumb style={{ position: 'absolute', top: '85px', left: '65px', fontSize: '12px' }} >
          <Breadcrumb.Item href="#" active>Home</Breadcrumb.Item>
          <Breadcrumb.Item href='/Admin/Batch'>Batch</Breadcrumb.Item>
          <Breadcrumb.Item href="/Admin/Mentor">
            Mentor
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/Admin/Request">
            Request
          </Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ marginTop: '40px', width: '90%', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', marginLeft: '20px', overflow: 'hidden' }} className='col-lg-10 col-md-10 col-sm-10 col-xs-10' ><Routes>
          <Route path='/Admin/Batch' element={<AdminBatch />} />
          <Route path='/Admin/Mentor' element={<AdminMentor />} />
          <Route path='/Admin/Request' element={<AdminRequest />} />
        </Routes> </div>
      </Row>

    </div>
  )
}

export default AdminContent