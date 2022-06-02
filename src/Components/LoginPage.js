import React from 'react'
import { ButtonGroup, Form, Row } from 'react-bootstrap'
// import { Button, Card } from 'react-bootstrap'
import './Login.css' 
import { useState } from 'react';

function LoginPage() {
    const [emperror, setemperror] = useState('')
    const [passError, setpassError] = useState('')
    const [userData, setuserData] = useState({
        Employee_Id: '',
        Password: ''
    })

    let handleChange = (e) => {
        setuserData({
            ...userData,
            [e.target.name]: e.target.value
        })
        console.log(userData)
    }

   let getData= localStorage.getItem('data')
   console.log(getData);

    let roleValidation=()=>
    {

    }


    return (
        <div className='Main_div'  >
            <div className='col-lg-8 col-md-8 col-sm-8 col-xs-8 gx-0 childDiv'  >
                <Row>
                    <img className='childImage  col-lg-8 col-md-8 col-sm-8  col-xs-8 gx-0' src={require('./../Assests/image.png')} alt=''  />
                    <div  className='childContent  col-lg-4 col-sm-8 col-md-8 col-xs-8 gx-0 '   >
                        <img src={require('./../Assests/Logo.png')} alt='' style={{width:'150px'}} className='mt-5'/>
                        <h1 className='contentText  mt-2'>Login</h1>
                    <Form className='contentForm   mt-3'>
                        <Form.Group className="mb-2"  style={{marginLeft:'40px '}} controlId="formGroupEmail">
                            <Form.Label>Email address</Form.Label>  
                            <Form.Control type="email" placeholder="Enter email" className='formEmail' onChange={handleChange} name='Employee_Id' value={userData.Employee_Id}/>
                        </Form.Group>
                        <Form.Group className="mb-2" style={{marginLeft:'40px '}} controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" className='formPass' onChange={handleChange} name='Password' value={userData.Password} />
                        </Form.Group>
                    </Form><ButtonGroup style={{borderRadius:'5px',backgroundColor:'#FFAA17'}} >
                   <button className='btnLogin'  >Login</button>
                   <button  className='btnCancel' >Cancel</button>
                   </ButtonGroup>
                   <p className='paraText'>Already have an account?<a className='anchorTag' href='facebook.com'>Register.</a> </p>
                   <br/>
                   <p style={{marginTop:'60px'}} ><a className='changePass'  href='myntraa.com' >Change Password</a></p>
                   <hr className='hr' />
                   <p className='copyRights'  >Copyright &#169; Aleercio.com  &nbsp; &nbsp; &nbsp;  Terms & Conditions | Privacy Policy </p>
                    </div>
                </Row>
            </div>
        </div>
    )
}


export default LoginPage;