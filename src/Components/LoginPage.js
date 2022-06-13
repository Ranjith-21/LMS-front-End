import React from 'react'
import { ButtonGroup, Form, Row } from 'react-bootstrap'
// import { Button, Card } from 'react-bootstrap'
import './Login.css' 
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

function LoginPage({loginData}) {
    const [emperror, setemperror] = useState('')
    const [passError, setpassError] = useState('')
    const [userData, setuserData] = useState({
        Employee_Id: '',
        Password: ''
    })

    let feildError=()=>
    {
        setemperror('Employee Id required')
        setpassError('Password required')
    }
    let handleChange = (e) => {
        setuserData({
            ...userData,
            [e.target.name]: e.target.value
        })
        console.log(userData)
    }

   let getData= JSON.parse(localStorage.getItem('data'))
   console.log(getData);

    let roleValidation=()=>
    {
        //inputs Validation
        if(userData.Employee_Id==='' || userData.Password==='')
        {
            userData.Employee_Id===''?(userData.Password===''?feildError():setemperror('Employee ID required')):setpassError('Password required')
        }
        //role Validation
        else if(userData.Employee_Id && userData.Password)
        {
            let roleValidate=getData.map((val)=>
            {
                if(val.employeeId===userData.Employee_Id && val.password===userData.Password)
                {
                    if(val.role==="admin")
                    {
                        // window.location.href='/AdminContent'
                        return 'admin'
                    }else if(val.role==="employee")
                    {
                        // window.location.href='/EmployeeContent'
                        return 'employee'
                    }else return 'trainee'
                }else if(userData.Password===val.password)
                {
                    setemperror('Invalid Employee ID')
                }else if(userData.Employee_Id===val.employeeId)
                {
                    setpassError('Invalid Password')
                }
            });
            //Invalid data entered
            let invalidData = roleValidate.filter((val)=>val===undefined)
            console.log('invalidData',invalidData);
            console.log('RoleValidate',roleValidate);
            let i=0;
            getData.map((val)=>
            {
                if(invalidData.length===roleValidate.length && userData.Employee_Id !==val.employeeId && userData.Password !==val.password)
                {
                    i++
                }
            })
            if(i===userData.length)
            {
                setemperror('Invalid Employee ID')
                setpassError('invalid Password')
            }

            let roleValue;
             for(let i of roleValidate)
             {
                 if(typeof (i)==='string')
                 {
                    roleValue=i
                 }
             }
             return roleValue
        }
    }
    
    let navigate=useNavigate()

    let login=(e)=>
    {
        let roleStatus=roleValidation()
        console.log('roleStatus',roleStatus);
        if(roleStatus === 'admin')
        {
            navigate('/AdminContent')
        }
        else if(roleStatus === 'employee')
        {
            navigate('/EmployeePage')
        }else if(roleStatus === 'trainee')
        {
            navigate('/Employee')
        }
            
        setuserData({
            Employee_Id:'',
            Password:''
        })
    }



    return (
        <div className='Main_div'  >
            <div className='col-lg-8 col-md-8 col-sm-8 col-xs-8 gx-0 childDiv'  >
                <Row>
                    <img className='childImage  col-lg-8 col-md-8 col-sm-8  col-xs-8 gx-0' src={require('./../Assests/image.png')} alt=''  />
                    <div  className='childContent  col-lg-4 col-sm-8 col-md-8 col-xs-8 gx-0 '   >
                        <img src={require('./../Assests/Logo.png')} alt='' style={{width:'150px'}} className='mt-4'/>
                        <h1 className='contentText  mt-2'>Login</h1>
                    <Form className='contentForm   mt-3'>
                        <Form.Group className="mb-1"  style={{marginLeft:'40px '}} controlId="formGroupEmail">
                            <Form.Label>Email address</Form.Label>  
                            <Form.Control type="email" placeholder="Enter email" className='formEmail' onChange={handleChange} name='Employee_Id' value={userData.Employee_Id}/>
                        </Form.Group>
                        {/* <p>sdsadasd</p> */}
                        {emperror && <p className='error' >{emperror}</p> }
                        <Form.Group className="mb-2" style={{marginLeft:'40px '}} controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" className='formPass' onChange={handleChange} name='Password' value={userData.Password} />
                        </Form.Group>
                        {/* <p>sdsadasd</p> */}
                        {passError && <p className='error' >{passError}</p>}
                    </Form><ButtonGroup style={{borderRadius:'5px',backgroundColor:'#FFAA17'}} >
                   <button className='btnLogin' onClick={login} >Login</button>
                   <button  className='btnCancel' >Cancel</button>
                   </ButtonGroup>
                   <p className='paraText'>Already have an account?<a className='anchorTag' href='/Primary'>Register.</a> </p>
                   <br/>
                   <p style={{marginTop:'40px'}} ><a className='changePass'  href='myntraa.com' >Change Password</a></p>
                   <hr className='hr' />
                   <p className='copyRights'  >Copyright &#169; Aleercio.com  &nbsp; &nbsp; &nbsp;  Terms & Conditions | Privacy Policy </p>
                    </div>
                </Row>
            </div>
        </div>
    )
}


export default LoginPage;