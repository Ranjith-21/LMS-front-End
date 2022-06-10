import React from 'react'
import TableComponent from '../Components/atoms/TableComponent'
import './EmployeeDetails.css'
import ButtonComp from './../Components/atoms/ButtonComp';

function EmployeeDetails() {

    let primaryData=JSON.parse(localStorage.getItem('PrimaryData'))
    let secondaryData=JSON.parse(localStorage.getItem('SecondaryData'))
    let educationData=JSON.parse(localStorage.getItem('educationData'))
    let addressData=JSON.parse(localStorage.getItem('AddressDetails'))
    let bankDetails=JSON.parse(localStorage.getItem('Bank Details'))
    let technicalSkills=JSON.parse(localStorage.getItem('Technical Details'))
    let experience=JSON.parse(localStorage.getItem('Experience Details'))
    let contact=JSON.parse(localStorage.getItem('contact Details'))


    let arr = [
      { "Employee ID": primaryData.EmpolyeeId },
      { "Employee Name": primaryData.EmpolyeeName },
      { "Date of Joining": primaryData.DateOfJoining },
      { "Date of Birth": primaryData.DateOfBirth },
    ];
    
    let arr1 = [
        { "Blood Group": primaryData.BloodGroup },
        { 'Designation': primaryData.Designation },
        { 'Gender': primaryData.Gender },
        { 'Nationality': primaryData.Nationality },
    ];
    
    let arr2=[
        { "Employee Status": primaryData.EmpolyeeStatus },
        
    ]
   
    let sec1 = [
      { "Pan No": secondaryData.PanNo },
      { "Aadhar No": secondaryData.Aadharno },
      { "Spouse Name": secondaryData.SpouseName },
      { "Marital Status": secondaryData.MaritalStatus },
    ];
    
    let sec2 = [
        { "Mother Name": secondaryData.MotherName },
        { "Father Name": secondaryData.FathersName },
    ]
    
    let sec3=[
        { "Passport No": secondaryData.PassportNo },
    ]

    let educ=
        educationData.map((val,ind)=>
        {
            return [
              { "Education Type": val.EducationType },
              { "Year of Passing": val.YearOfpassing },
              { "Percentage(%)": val.PerCenTage },
              { "University Name": val.UnivercityName },
            ];
        })
        let edu1= educ[0]
        let educa=
            educationData.map((val,ind)=>
            {
                return [
                  { "Institute Name": val.InstituteName },
                  { 'Specialization': val.Specilization },
                  { 'State': val.State },
                ];
            })
            let edu2=educa[0]

            let add = addressData.map((val,ind)=>
            {
                return [
                    {'Address Type':val.AddressType},
                    {'Door No':val.DoorNumber},
                    {"Street":val.Street},
                    {"Locality":val.Locality},
                    { 'City': val.City },
                ]
            })
            let add1=add[0]
            let addr=addressData.map((val)=>
            {
                return [
                  { 'State': val.State },
                  { "PIN code": val.pinCode },
                  { "Land Mark": val.LandMark },
                ];
            })
            let add2=addr[0]

            let bank1 = [
              { "Account No": bankDetails.AccountNumber },
              { "Bank Name": bankDetails.BankName },
              { "Bank Type": bankDetails.AccountType },
              { "IFSC Code": bankDetails.IfscCode },
            ];
            
            let bank2=[
                { State: bankDetails.State },
            ]

            let tech=[
                {'Skill Type':technicalSkills.SkillType},
                {'Skill Rating':technicalSkills.SkillRatings},
                {'Year of Experience':technicalSkills.YEarOfExperience}
            ]

            let exp = experience.map((val)=>
            {
                return [
                    {'Date of Joining':val.DateOfJoining},
                    {'Year of Experience':val.YearOfExperience},
                    {'Company Name':val.CompanyName},
                    {'Designation':val.Designation}
                ]
            })
            let exp1=exp[0]

            let cont = contact.map((val)=>
            {
                return [
                    {'Contact  Number':val.ContactNumber},
                    {'Contact  Type':val.ContactType}
                ]
            })
            let con1=cont[0]

        let spare=[{}]

  return (
    <div>
        <TableComponent theading={'Primary Info'} firstRow={arr} secondRow={arr1} thirdRow={arr2}  />
        <TableComponent theading={'Secondary Info'} firstRow={sec1} secondRow={sec2} thirdRow={sec3} />
        <TableComponent theading={'Education Details'} firstRow={edu1} secondRow={edu2} thirdRow={spare}/>
        <TableComponent theading={'Address Details'} firstRow={add1} secondRow={add2} thirdRow={spare} />
        <TableComponent theading={'Bank Details'} firstRow={bank1} secondRow={bank2} thirdRow={spare} />
        <TableComponent theading={'Technical Skills'} firstRow={tech} secondRow={spare} thirdRow={spare} />
        <TableComponent theading={'Experience'} firstRow={exp1} secondRow={spare} thirdRow={spare} />
        <TableComponent theading={'Contact'} firstRow={con1} secondRow={spare} thirdRow={spare} />
        <div style={{textAlign:'end'}}>
        <ButtonComp variant='primary' size='md'  label={'Submit'} />
        </div>
    </div>
  )
}

export default EmployeeDetails