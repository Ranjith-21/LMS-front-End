import React, { useState } from 'react'
import { Button, Container, Form, Modal, Navbar, Table } from 'react-bootstrap'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
// import { ModalComponent } from './atoms/ModalComponent';
import FormComponent from './atoms/FormComponent';
import ModalComponent from './atoms/ModalComponent';
import DropDown from './atoms/DropDown';
import InputComp from './atoms/InputComp';
// import { Select } from '@mui/material';
// import { FormComponent } from './atoms/FormComponent';
import  Select  from 'react-select';

function AdminMentor() {
  const [showAddNewMentor, setshowAddNewMentor] = useState(false)
  const [showEditMentor, setshowEditMentor] = useState(false)
  // const [skills, setskills] = useState(['Select Below','React','java','javascript'])
  const [rowNo, setRowNo] = useState()
  const [adminMentorData, setAdminMentorData] = useState([{
    MentorName:'',
    EmployeeID:'',
    EmailId:'',
    Skills:[]
  }])
  const [data, setdata] = useState([])
  
  const options=[
    {value:'react',label:'react'},
    {value:'Java',label:'Java'},
    {value:'JavaScript',label:'JavaScript'},
    {value:'Angular',label:'Angular'},
    {value:'HTML & CSS',label:'HTML & CSS'},
]

  let handleChange=(e)=>
  {
    setAdminMentorData({
      ...adminMentorData,
      [e.target.name]:e.target.value
    })
  }

  //To Add mentor Data

  let addMentor=()=>
  {
    let dataCopy=[...data]
    dataCopy.push(adminMentorData)
    setdata(dataCopy)
    localStorage.setItem('AddMentorData',JSON.stringify(dataCopy))
    setAdminMentorData([{
      MentorName:'',
      EmployeeID:'',
      EmailId:'',
      Skills:[]
    }])
    closeAddMentor()
  }
  
  //To Edit Mentor Data
  let openEditMentor = (i) => {
    console.log(i);
   setAdminMentorData({...getdataFromLocalStorage[i]})
    setRowNo(i)
   setshowEditMentor(true)
  }

  let saveEditData=()=>
  {
    let editDataCopy=[...data]
    editDataCopy.splice(rowNo,1,adminMentorData)
    setdata(editDataCopy)
    handleCloseEdit()
  }
  
//To Delete Mentor Data
let deleteMentorData=()=>
{
  
}

  let closeEditMentor = () => setshowEditMentor(false)
  let handleCloseEdit = () => closeEditMentor()
  let openAddMentor = () => setshowAddNewMentor(true)
  let closeAddMentor = () => setshowAddNewMentor(false)
  let handleCloseAdd = () => closeAddMentor()
  let mentorData=[]
  mentorData=JSON.parse(localStorage.getItem('AddMentorData'))
  // console.log(mentorData);
  // console.log(mentorData);

  

let getdataFromLocalStorage=JSON.parse(localStorage.getItem('AddMentorData'))

  const [chips] = useState(["react", 'java', 'python'])
 
  return (
    <div>
      <Navbar style={{ height: '60px' }} >
        <Container fluid>
          <Navbar.Brand href="#home" style={{ color: 'orange' }}>Mentor List</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <div class="form-group has-search" style={{ marginRight: '20px' }}>
                <span class="fa fa-search form-control-feedback"></span>
                <input type="text" class="form-control" placeholder="Search" style={{ width: '400px' }} />
              </div>
            </Navbar.Text>
          </Navbar.Collapse>
          <Button variant="warning" style={{ padding: '5px 10px', color: 'white' }} onClick={openAddMentor} ><i class="fa-solid fa-plus"></i> &nbsp; New Mentor</Button>
        </Container>
      </Navbar>
      <Table>
        <thead style={{ backgroundColor: '#e9eef7' }}>
          <tr>
            <th><input type='checkbox' /></th>
            <th>No</th>
            <th>Mentor Name</th>
            <th>Employee ID</th>
            <th>Email ID</th>
            <th>skills</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
       {mentorData.map((val,ind)=>
       {
         return <tr>
           <td><input type='checkbox' /></td>
           <td>{ind+1}</td>
           <td>{val.MentorName}</td>
           <td>{val.EmployeeID}</td>
           <td>{val.EmailId}</td>
           <td>
           {val.Skills.map((val,ind)=>
                {
                  return <Chip key={ind} className='ChipDesign' label={val.label} style={{backgroundColor:'#086288',color:'white'}}  />
                })}
           </td>
           <td><button style={{ border: 'none', backgroundColor: 'white' }} onClick={()=>
          {
            openEditMentor(ind)
          }} ><i class="fa-solid fa-pen"></i></button> &nbsp;  <button style={{ border: 'none', backgroundColor: 'white' }} onClick={deleteMentorData} ><i class="fa-solid fa-trash-can"></i></button></td>
         </tr>
       })}
       

          <tr>
            <td><input type='checkbox' /></td>
            <td>01</td>
            <td>Chandan</td>
            <td>#1235646</td>
            <td>abc@info.com</td>
            <td>
              <Stack direction="row" spacing={1}>
                {chips.map((val) => {
                  return <Chip style={{ backgroundColor: '#086288', color: 'white', padding: '2px 1px', fontSize: '12px' }} label={val} variant="outlined" />
                })}

              </Stack>
            </td>
            <td><button style={{ border: 'none', backgroundColor: 'white' }} onClick={openEditMentor} ><i class="fa-solid fa-pen"></i></button> &nbsp;  <button style={{ border: 'none', backgroundColor: 'white' }} ><i class="fa-solid fa-trash-can"></i></button></td>
          </tr>
        </tbody>
      </Table>

      <ModalComponent show={showAddNewMentor} onHide={handleCloseAdd} title={'Add New Mentor'} footerText={'Add'} onClick={addMentor}>
        <Modal.Body>
          <Form>
            <InputComp  label={'Mentor Name'} className={'form-control mb-3'} type={'text'} name='MentorName' value={adminMentorData.MentorName} onChange={handleChange} />
            <InputComp  label={'Employee ID'} className={'form-control mb-3'} type={'text'} name='EmployeeID' value={adminMentorData.EmployeeID} onChange={handleChange} />
            <InputComp  label={'Email ID'} className={'form-control mb-3'} type={'email'} name='EmailId' value={adminMentorData.EmailId} onChange={handleChange} />
            {/* <DropDown option={skills} label={'Skills'} name='Skills' value={adminMentorData.Skills} onChange={handleChange} /> */}
            <label className='mb-2'>Technologies</label>
            <Select isMulti name='Skills' options={options} className='basic-multi-select mb-2' classNamePrefix='select' onChange={(e)=>
            {
              setAdminMentorData({
                ...adminMentorData,
                Skills:e
              })
            }} />
          </Form>
        </Modal.Body>
      </ModalComponent>

      <ModalComponent show={showEditMentor} onHide={handleCloseEdit} title='Edit Mentor' footerText='Edit' onClick={saveEditData}>
        <Modal.Body>
          <Form>
          <InputComp  label={'Mentor Name'} className={'form-control mb-3'} type={'text'} name='MentorName' value={adminMentorData.MentorName} onChange={handleChange} />
            <InputComp  label={'Employee ID'} className={'form-control mb-3'} type={'text'} name='EmployeeID' value={adminMentorData.EmployeeID} onChange={handleChange}/>
            <InputComp  label={'Email ID'} className={'form-control mb-3'} type={'email'} name='EmailId' value={adminMentorData.EmailId} onChange={handleChange} />
            {/* <DropDown option={skills} label={'Skills'} value={adminMentorData.Skills} onChange={handleChange}/> */}
          </Form>
        </Modal.Body>
      </ModalComponent>

    </div>
  )
}

export default AdminMentor

