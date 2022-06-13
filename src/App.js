import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './Components/LoginPage';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import AdminContent from './Components/AdminContent';
import Primary from './Components/signUpPage/Primary';
import SecondaryInfo from './Components/signUpPage/SecondaryInfo';
import EducationDetails from './Components/signUpPage/EducationDetails';
import AddressDetails from './Components/signUpPage/AddressDetails';
import BankDetails from './Components/signUpPage/BankDetails';
import TechnicalSkills from './Components/signUpPage/TechnicalSkills';
import Experience from './Components/signUpPage/Experience';
import Contact from './Components/signUpPage/Contact';
import EmployeePage from './Components/EmployeePage/EmployeePage.js';
import DataStore from './Components/DataStore';
import { Routes } from 'react-router-dom';
import RecordStatus from './Components/signUpPage/RecordStatus';
import Employee from './EmplyeeComponents/Employee';
import AdminBatch from './Components/AdminBatch';
import AdminMentor from './Components/AdminMentor';
import AdminRequest from './Components/AdminRequest';
import DashBoard from './Components/EmployeePage/DashBoard';
import EmployeeBatch from './Components/EmployeePage/EmployeeBatch';
// import { allData } from './Components/signUpPage/AllData';


function App() {

  return (
    <div>
      <DataStore/>
      {/* <allData/> */}
      <Routes>
      <Route path='/' element={<LoginPage/>}/>
        <Route path="/Primary" element={<Primary/>} />
        <Route path='/EmployeePage' element={<EmployeePage/>}/>
        <Route path='/AdminContent' element={<AdminContent/>}/>
        <Route path="/SecondaryInfo" element={<SecondaryInfo />} />
        <Route path="/EducationDetails" element={<EducationDetails />} />
           <Route path="/AddressDetails" element={<AddressDetails />} />
           <Route path="/BankDetails" element={<BankDetails />} />
          <Route path="/TechnicalSkills" element={<TechnicalSkills />} />
         <Route path="/Experience" element={<Experience />} />
           <Route path="/Contact" element={<Contact />} />
           <Route path='/RecordStatus' element={<RecordStatus/>}/>
           <Route path='/Employee' element={<Employee/>} />
           <Route path='/Admin/Batch' element={<AdminBatch/>} />
           <Route path='/Admin/Mentor' element={<AdminMentor/>} />
           <Route path='/Admin/Request' element={<AdminRequest/>} />
           <Route path='/Dashboard' element={<DashBoard/>}/>
            <Route path='/Mentor' element={<EmployeeBatch/>}/>
          </Routes>
     
    </div>
  );
}

export default App;
