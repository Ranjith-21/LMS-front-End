import React, { useEffect, useState } from 'react'
import { Button, Container, Form, Modal, Navbar, Table } from 'react-bootstrap'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import FormComponent from './atoms/FormComponent';
import ModalComponent from './atoms/ModalComponent';
import DropDown from './atoms/DropDown';
import InputComponent from './atoms/InputComponent';
import InputComp from './atoms/InputComp';
import Select  from 'react-select';

function AdminBatch() {

  const [showAddNewBatch, setshowAddNewBatch] = useState(false)
  const [showEditBatch, setshowEditBatch] = useState(false)
  const [showStatus, setshowStatus] = useState(false)
  // const [technoData, settechnoData] = useState([ 'Select Below','React', 'java', 'Technologies'])
  const [mentor, setmentor] = useState(['Satyam', 'Shantala','Shambavi','Megha'])
  const [data, setdata] = useState([])
  const [batchData, setbatchData] = useState([{
        id:1,
        batchName:'',
        mentorName:'',
        technologies:[],
        startDate:new Date().toLocaleDateString,
        endDate:new Date().toLocaleDateString,
  }])
  const [rowNo, setrowNo] = useState()
  const [status, setstatus] = useState(
    {
      reason:''
    }
  )

  const options=[
    {value:'react',label:'react'},
    {value:'Java',label:'Java'},
    {value:'JavaScript',label:'JavaScript'},
    {value:'Angular',label:'Angular'},
    {value:'HTML & CSS',label:'HTML & CSS'},
]

  let openStatus = () => setshowStatus(true)

  let closeStatus = () =>setshowStatus(false)
  let handleClose = () =>closeStatus()
  // let openEditBatch = () => setshowEditBatch(true)
  let hideEditBatch = () => setshowEditBatch(false)
  let handleCloseEdit = () =>hideEditBatch()
  let openAddNewBatch = () => setshowAddNewBatch(true)
  let hideAddNewBatch = () =>setshowAddNewBatch(false)
  let handleCloseAdd = () => hideAddNewBatch()
  const [chips] = useState(["react", 'java', 'python'])

  let handleChange=(e)=>
  {
    setbatchData({
      ...batchData,
      [e.target.name]:e.target.value
    })
  }

  //To Add Data
  let saveBatchData=()=>
  {
    let batchDataCopy=[...data]
        batchDataCopy.push(batchData)
        setdata(batchDataCopy)
        localStorage.setItem('AdminBatchData',JSON.stringify(batchDataCopy))
        setbatchData({
          id:1,
          batchName:'',
          mentorName:'',
          technologies:[],
          startDate:new Date().toLocaleDateString,
          endDate:new Date().toLocaleDateString,
        })
        handleCloseAdd()
  }
//***************************************************************************************** */
// To Edit Data
  let openEditBatch = (i) =>
  {
    setbatchData({...data[i]})
    setrowNo(i)
    setshowEditBatch(true)
  }
  
  let saveEditData=()=> 
  { 
    let editDataCopy=[...data]
    editDataCopy.splice(rowNo,1,batchData)
    setdata(editDataCopy)
    localStorage.setItem('AdminBatchData',JSON.stringify(editDataCopy))
    handleCloseEdit()
  }

//To Delete

let deleteBatchData=(ind)=>
{
  const deleteData=[...data]
  deleteData.splice(ind,1)
  setdata(deleteData)
  localStorage.setItem('AdminBatchData',JSON.stringify(data))

}

// Reason to change Status
let handleStatusEvent=(e)=>
{
  setstatus({
    [e.target.name]:e.target.value
  })
}

let sendDataToLocalStorage=()=>
{
  let statusArr=[...data]
  statusArr.push(status)
  setdata(statusArr)
  localStorage.setItem('ReasonToChangeStatus',JSON.stringify(data))
  closeStatus()
}


//***************************************************************************************** */
//setting initial Data in LocalStorage
let initialData=[{
  id:1,
  batchName:'1st Batch',
  mentorName:'Satyam',
  technologies:[{value:'react',label:'react'},{value:'JavaScript',label:'JavaScript'}],
  startDate:'2022-11-01',
  endDate:'2022-21-01',
}]

  useEffect(() => {
    if (localStorage.getItem('AdminBatchData')) {
      setdata(JSON.parse(localStorage.getItem('AdminBatchData')))
    }
    else {
      setdata(initialData)
    }
  }, [])


  let dataFromLocalStorage=[]
  dataFromLocalStorage=JSON.parse(localStorage.getItem('AdminBatchData'))

  return (
    <div>
      <Navbar style={{ height: '60px' }} >
        <Container fluid>
          <Navbar.Brand href="#home" style={{ color: 'orange' }}>Batch List</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <div class="form-group has-search" style={{ marginRight: '20px' }}>
                <span class="fa fa-search form-control-feedback"></span>
                <input type="text" className="form-control" placeholder="Search" style={{ width: '400px' }} />
              </div>
            </Navbar.Text>
          </Navbar.Collapse>
          <Button variant="warning" style={{ padding: '5px 10px', color: 'white' }} onClick={openAddNewBatch} > <i class="fa-solid fa-plus"></i> &nbsp; New Batch</Button>
        </Container>
      </Navbar>

      <Table>
        <thead style={{ backgroundColor: '#e9eef7' }}>
          <tr>
            <th><input type='checkbox' /></th>
            <th>No</th>
            <th>Batch Id</th>
            <th>Batch Name</th>
            <th>Mentor Name</th>
            <th>Technologies</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {dataFromLocalStorage.map((val,ind)=>
          {
            return <tr key={ind}>
              <td><input type='checkbox' /></td>
              <td>{ind + 1}</td>
              <td>{'TYS00'+ind}</td>
              <td>{val.batchName}</td>
              <td>{val.mentorName}</td>
              <td>
                {val.technologies.map((val,ind)=>
                {
                  return <Chip key={ind} className='ChipDesign' label={val.label} style={{backgroundColor:'#086288',color:'white'}}  />
                })}
              </td>
              <td>{val.startDate}</td>
              <td>{val.endDate}</td>
              <td><select name="status" id="cars" style={{ border: 'none' }} onChange={openStatus}>
              <option value="inProgress">InProgress</option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select></td>
            <td><button style={{ border: 'none', backgroundColor: 'white' }} onClick={()=>
            {
              openEditBatch(ind)
            }} ><i class="fa-solid fa-pen"></i></button> &nbsp;  <button style={{ border: 'none', backgroundColor: 'white' }} onClick={()=>
            {
              deleteBatchData(ind)
            }} ><i class="fa-solid fa-trash-can"></i></button></td>
            </tr>
          })}
          <tr>
            <td><input type='checkbox' /></td>
            <td>01</td>
            <td>#15234654</td>
            <td>abcd</td>
            <td>Satyam</td>
            <td>
                {chips.map((val) => {
                  return <Chip style={{ backgroundColor: '#086288', color: 'white', padding: '2px 1px', fontSize: '12px' }} label={val} variant="outlined" />
                })}
            </td>
            <td>12 Mar 2022</td>
            <td>04 Dec 2022</td>
            <td><select name="status" id="cars" style={{ border: 'none' }} onChange={openStatus}>
              <option value="inProgress">InProgress</option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select></td>
            <td><button style={{ border: 'none', backgroundColor: 'white' }} onClick={openEditBatch} ><i class="fa-solid fa-pen"></i></button> &nbsp;  <button style={{ border: 'none', backgroundColor: 'white' }} ><i class="fa-solid fa-trash-can"></i></button></td>
          </tr>
        </tbody>
      </Table>

      <ModalComponent show={showAddNewBatch} onHide={handleCloseAdd} title='Add New Batch' footerText='Create' handleClose={handleCloseAdd} onClick={saveBatchData}>
        <Modal.Body>
          <Form>
            <InputComp label={'Batch Name'} type={'text'} className={'form-control mb-3'} value={batchData.batchName} name='batchName'  onChange={handleChange} />
            <DropDown option={mentor} label={'Mentor Name'} value={batchData.mentorName} name="mentorName" onChange={handleChange} />
            {/* <DropDown option={technoData} label={'Technologies'} value={batchData.technologies} name='technologies'onChange={handleChange} /> */}
            <label className='mb-2'>Technologies</label>
            <Select isMulti name='technologies' options={options} className='basic-multi-select mb-2' classNamePrefix='select' onChange={(e)=>
            {
              setbatchData({
                ...batchData,
                technologies:e
              })
            }} />
            <InputComp label={'Start Date'} type={'date'} className={'form-control mb-3'} value={batchData.startDate} name='startDate' onChange={handleChange} />
            <InputComp label={'End Date'} type={'date'} className={'form-control'} value={batchData.endDate} name='endDate' onChange={handleChange} />
          </Form>
        </Modal.Body>
      </ModalComponent>

      <ModalComponent show={showEditBatch} onHide={handleCloseEdit} title={'Edit Batch'} footerText={'Edit'} handleClose={handleCloseEdit} onClick={saveEditData}>
        <Modal.Body>
          <Form>
            <InputComp label={'Batch Name'} type={'text'} className={'form-control mb-3'} name='batchName' value={batchData.batchName} onChange={handleChange} />
            <DropDown option={mentor} label={'Mentor Name'} name='mentorName' value={batchData.mentorName} onChange={handleChange}  />
            {/* <DropDown option={technoData} label={'Technologies'} /> */}
            <label className='mb-2'>Technologies</label>
            <Select isMulti name='technologies' options={options} className='basic-multi-select mb-2' classNamePrefix='select' onChange={(e)=>
            {
              setbatchData({
                ...batchData,
                technologies:e
              })
            }} />
            <InputComp label={'Start Date'} type={'date'} className={'form-control mb-3'} name='startDate' value={batchData.startDate} onChange={handleChange}  />
            <InputComp label={'End Date'} type={'date'} className={'form-control'} name='endDate' value={batchData.endDate} onChange={handleChange}   />
          </Form>
        </Modal.Body>
      </ModalComponent>

      <ModalComponent show={showStatus} onHide={handleClose} title={'Reason to Change Status'} footerText={'Submit'} onClick={sendDataToLocalStorage}>
        <Modal.Body>
          <Form>
            <FormComponent className={"mb-3"} controlId={"exampleForm.ControlTextarea1"} label='Reason' as={'textarea'} rows={3} name='reason' value={status.reason} onChange={handleStatusEvent} />
          </Form>
        </Modal.Body>
      </ModalComponent>

    </div>
  )
}

export default AdminBatch