// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap.bundle.min.js'
import LoginPage from './Components/LoginPage';
import { BrowserRouter, Route } from 'react-router-dom';
import AdminContent from './Components/AdminContent';
import { Routes } from 'react-router-dom';
import Primary from './Components/signUpPage/Primary';
import SecondaryInfo from './Components/signUpPage/SecondaryInfo';
import EducationDetails from './Components/signUpPage/EducationDetails';
import AddressDetails from './Components/signUpPage/AddressDetails';
import BankDetails from './Components/signUpPage/BankDetails';
import TechnicalSkills from './Components/signUpPage/TechnicalSkills';
import Experience from './Components/signUpPage/Experience';
import Contact from './Components/signUpPage/Contact';
// import EmployeeMainPage from './Components/EmployeePage/EmployeeMainPage';
import EmployeeBatch from './Components/EmployeePage/EmployeeBatch';
import EmployeeBatch2 from './Components/EmployeePage/EmployeeBatch2';
// import Practise from './Components/Practise';
import EmployeePage from './Components/EmployeePage/EmployeePage.js';
import { ModalComponent } from './Components/atoms/ModalComponent';
import { useState } from 'react';
import Practise from './Components/EmployeePage/Practise';
import BasicTabs from './Components/signUpPage/SignUpNavBar';


function App() {
  // const [show, setshow] = useState(true)
  return (
    
    <BrowserRouter>
    {/* <div className="App"> */}
      <AdminContent/>
     {/* <AdminTable/> */}
      {/* <LoginPage/> */}
      {/* <EmployeeMainPage/> */}
      {/* <EmployeeBatch/> */}
      {/* <EmployeeBatch2/> */}
      {/* <Practise/> */}
      {/* <EmployeePage/> */}
      {/* <ModalComponent show={show} /> */}
      {/* <Practise/> */}
      {/* <BasicTabs/> */}
      {/* <BasicTabs/> */}
    {/* </div> */}

    <Routes>
      <Route path="/" element={<Primary/>} />
      <Route path="/SecondaryInfo" element={<SecondaryInfo />} />
      <Route path="/EducationDetails" element={<EducationDetails />} />
         <Route path="/AddressDetails" element={<AddressDetails />} />
         <Route path="/BankDetails" element={<BankDetails />} />
        <Route path="/TechnicalSkills" element={<TechnicalSkills />} />
       <Route path="/Experience" element={<Experience />} />
         <Route path="/Contact" element={<Contact />} />
         <Route path='/LoginPage' element={<LoginPage/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
