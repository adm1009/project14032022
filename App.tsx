import Login from "./components/Login";
import Logout from "./components/Logout";
import Home from "./components/Home";
import React from "react";
import { Routes, Route } from "react-router-dom";
import PersonalInformation from "./components/personal/PersonalInformation";
import BankDetails from "./components/personal/BankDetails";
import EmergencyContact from "./components/personal/EmergencyContact";
import Infogen from "./components/personal/Infogen";
import LeaveDetails from "./components/leave/LeaveDetails";
import MyRegularize from "./components/leave/MyRegularize";
import ApplyRegularize from "./components/leave/ApplyRegularize";
// import Navbar from './components/Navbar';
class App extends React.Component {
  render(){
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Infogen Labs Pvt.Ltd</h1>
      <h1>Employee Management System</h1>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/home/personalinformation" element={<PersonalInformation />} />
        <Route path="/home/bankdetails" element={<BankDetails />} />
        <Route path="/home/emergencycontact" element={<EmergencyContact />} />
        <Route path="/home/infogen" element={<Infogen />} />
        <Route path="/home/leave" element={<LeaveDetails />} />
        <Route path="/home/leave/myregularize" element={<MyRegularize />} />
        <Route path="/home/leave/applyregularize" element={<ApplyRegularize />} />
      </Routes>
    </div>
  );
}
}
export default App;
// import Login from "./components/Login";
// import Logout from "./components/Logout";
// import Home from "./components/Home";
// import { Routes, Route } from "react-router-dom";
// import PersonalInformation from "./components/personal/PersonalInformation";
// import BankDetails from "./components/personal/BankDetails";
// import EmergencyContact from "./components/personal/EmergencyContact";
// import Infogen from "./components/personal/Infogen";
// import LeaveDetails from "./components/leave/LeaveDetails";
// import MyRegularize from "./components/leave/MyRegularize";
// import ApplyRegularize from "./components/leave/ApplyRegularize";
// // import Navbar from './components/Navbar';
// function App() {
//   return (
//     <div style={{ textAlign: "center" }}>
//       <h1>Infogen Labs Pvt.Ltd</h1>
//       <h1>Employee Management System</h1>
//       {/* <Navbar /> */}
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/logout" element={<Logout />} />
//         <Route path="/home/personalinformation" element={<PersonalInformation />} />
//         <Route path="/home/bankdetails" element={<BankDetails />} />
//         <Route path="/home/emergencycontact" element={<EmergencyContact />} />
//         <Route path="/home/infogen" element={<Infogen />} />
//         <Route path="/home/leave" element={<LeaveDetails />} />
//         <Route path="/home/leave/myregularize" element={<MyRegularize />} />
//         <Route path="/home/leave/applyregularize" element={<ApplyRegularize />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;
