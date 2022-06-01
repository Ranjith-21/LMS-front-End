import React from 'react'
// import FormComponent from '../atoms/FormComponent'
import { TableComponent } from '../atoms/TableComponent'
// import { FormComponent } from '../atoms/FormComponent';
// import { ModalComponent } from '../atoms/ModalComponent';
// import { TableComponent } from './../atoms/TableComponent';
import { useState } from 'react';
import ModalComponent from '../atoms/ModalComponent';
import FormComponent from './../atoms/FormComponent';

function Practise() {
  const [data, setdata] = useState(
   [ {
      fname:'Ranjith',
      lname:'Reddy',
      marks:'120',
      age:'23'
    }]
  )
  // const [show, setshow] = useState(false)

  // let openShow=()=>
  // {
  //   setshow(true)
  // }
  // let closeShow=()=>
  // {
  //   setshow(false)
  // }

  // let handleClose=()=>
  // {
  //   closeShow()
  // }
  return (
    <div>
        {/* <TableComponent 
        header={['no','batchName','batchCode','batchStatus','batchStartDate','batchEndDate','batchRating','batchMock']}
        data={[{no:1,batchName:'batchName1',batchCode:'batchCode1',batchStatus:'batchStatus1',batchStartDate:'batchStartDate1',batchEndDate:'batchEndDate1',batchRating:'batchRating1',batchMock:'batchMock1'}]}
        /> */}
        {/* <button onClick={openShow}>click me</button>

        <ModalComponent onHide={handleClose} show={show} >
          <FormComponent label='add'    />
        </ModalComponent> */}

<TableComponent headerOne='No'headerTwo='batchName' headerThree='Batch Code' headerFour='Batch Status' headerFive='BatchStart Date' headerSix='End Date' >
        {data.map((val,ind)=>
        {
          return <tr>
            <td>{val.fname }</td>
            <td>{val.lname }</td>
            <td>{val.age }</td>
            <td>{val.marks }</td>
          </tr>
        })}
</TableComponent>

    </div>
  )
}

export default Practise