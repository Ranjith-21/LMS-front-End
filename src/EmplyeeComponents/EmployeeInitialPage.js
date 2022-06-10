import React from 'react'
import TableComponent from '../Components/atoms/TableComponent'
import  './EmployeeInitialPage.css'
import { useState } from 'react';

function EmployeeInitialPage() {
    const [firstRow, setfirstRow] = useState([
      {"Employee ID": <b>TYC012177</b>},
      {'Employee Name': <b>Sachin</b>},
      {'Date Of Joining': <b>13 Apr 2022</b>},
      {'Date of Birth': <b>13 Apr 2000</b>},
    ]);
    const [secondRow, setsecondRow] = useState([
        {"Salary": <b>--</b>},
        {'Blood Group': <b>O+</b>},
        {'Designation': <b>--</b>},
        {'Gender':<b>Male</b>},
    ])
    const [thirdRow, setthirdRow] = useState([
        {'Nationality':<b>--</b>},
        {'Employee Status':<b>--</b>}
    ])

    const [firstRow1, setfirstRow1] = useState([
      { "Pan No": <b>--</b> },
      { "Aadhar No": <b>--</b> },
      { "Father Name": <b>--</b> },
      { "Mother Name": <b>--</b> },
      { "Spouse name": <b>--</b> },
    ]);

    const [secondRow1, setsecondRow1] = useState([
        {'passport No':<b>--</b>},
        {'martial status':<b>--</b>},
    ])

    const [thirdRow1, setthirdRow1] = useState([
        {}
    ])

    const [firstRow2, setfirstRow2] = useState([
        {'Education Type':<b>--</b>},
        {'Year of Passing':<b>--</b>},
        {'Percentage (%)':<b>--</b>},
        {'University':<b>--</b>},
        {'Institution name':<b>--</b>},
    ])

    const [secondRow2, setsecondRow2] = useState([
        {'specialization':<b>--</b>},
        {'state':<b>--</b>},
    ])

    const [firstRow3, setfirstRow3] = useState([
        {'Address Type':<b>--</b>},
        {'Door No':<b>--</b>},
        {'Street':<b>--</b>},
        {'locality':<b>--</b>},
        {'city':<b>--</b>},
        {'state':<b>--</b>},
    ])

    const [secondRow3, setsecondRow3] = useState([
        {'PIN code':<b>--</b>},
        {'Land mark':<b>--</b>},
    ])

    const [firstRow4, setfirstRow4] = useState([
        {'Account No.':<b>--</b>},
        {'Bank Name':<b>--</b>},
        {'Bank Type':<b>--</b>},
        {'IFSC Code':<b>--</b>},
        {'Branch':<b>--</b>},
        {'State':<b>--</b>},
    ])

    const [firstRow5, setfirstRow5] = useState([
        {'Skill Type':<b>--</b>},
        {'Skill Rating':<b>--</b>},
        {'Year Of Experience(Over Skill)':<b>--</b>},
    ])

    const [firstRow6, setfirstRow6] = useState([
        {'Date of Joing':<b>--</b>},
        {'Year of Experience':<b>--</b>},
        {'Company name':<b>--</b>},
        {'Designation':<b>--</b>},
    ])

    const [firdtRow7, setfirdtRow7] = useState([
        {'Contact Type':<b>--</b>},
        {'Contact Number':<b>--</b>},
    ])
    


  return (
    <div>
      
        <TableComponent theading='Primary Info' firstRow={firstRow} secondRow={secondRow} thirdRow={thirdRow} />
        <TableComponent theading='Secondary Info' firstRow={firstRow1} secondRow={secondRow1} thirdRow={thirdRow1} />
        <TableComponent theading='Education Details' firstRow={firstRow2} secondRow={secondRow2} thirdRow={thirdRow1}/>
        <TableComponent theading='Address details' firstRow={firstRow3} secondRow={secondRow3} thirdRow={thirdRow1} />
        <TableComponent theading='Bank Details' firstRow={firstRow4} secondRow={thirdRow1} thirdRow={thirdRow1}  />
        <TableComponent theading='Technical Skills' firstRow={firstRow5} secondRow={thirdRow1} thirdRow={thirdRow1} />
        <TableComponent theading='Experience' firstRow={firstRow6} secondRow={thirdRow1} thirdRow={thirdRow1} />
        <TableComponent theading='Contact' firstRow={firdtRow7} secondRow={thirdRow1} thirdRow={thirdRow1} />
    </div>
  )
}

export default EmployeeInitialPage