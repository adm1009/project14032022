import React, { useState } from "react";
import Navbar from "../Navbar";

class BankDetails extends React.Component<any,any>{
  constructor(props:any){
    super(props);
    this.state = {
      pancardno:"",
      accountno:"",
      bankname:"",
      show:false
    }
  }
  pancardHandler (e: any) {
    this.setState({
      pancardno:e.target.value
    })
  };
  accountHandler (e:any){
    this.setState({
      accountno:e.target.value
    })
  };
  banknameHandler (e:any){
    this.setState({
      bankname:e.target.value
    })
  }
  bankDetailsHandler() {
    localStorage.setItem("bankdetails", JSON.stringify(this.state));
    this.setState({
      show:true
    })
  };
  render(){
  return (
    <div>
      <Navbar />
      <span style={{ textDecoration: "underline" }}>Bank Details</span>
      <hr />
      {!this.state.show && (
        <form onSubmit={this.bankDetailsHandler}>
          <span>Pancard No:- </span>
          <input
            type="text"
            value={this.state.pancardno}
            onChange={this.pancardHandler}
            name="pancardno"
            style={{ marginTop: "10px" }}
          />{" "}
          <br />
          <span>Account No:- </span>
          <input
            type="text"
            value={this.state.accountno}
            onChange={this.accountHandler}
            name="accountno"
            style={{ marginTop: "10px" }}
          />
          <br />
          <span>Bank Name:- </span>
          <input
            type="text"
            value={this.state.bankname}
            onChange={this.banknameHandler}
            name="bankname"
            style={{ marginTop: "10px" }}
          />
          <br />
          <input
            type="submit"
            value="Submit Data"
            style={{
              backgroundColor: "cornflowerblue",
              marginTop: "10px",
              color: "white",
              border: "none",
              fontSize: "15px",
            }}
          />
        </form>
      )}
      {this.state.show && (
        <span style={{ color: "green" }}>Bank Details Added Successfully</span>
      )}
    </div>
  );
};
}
export default BankDetails;

// import React, { useState } from "react";
// import Navbar from "../Navbar";

// const BankDetailsData = () => {
//   const Bank = localStorage.getItem("bankdetails");
//   if (!Bank)
//     return {
//       pancardno: "",
//       accountno: "",
//       bankname: "",
//     };
//   return JSON.parse(Bank);
// };
// const BankDetails = () => {
//   const [show, setShow] = useState(false);
//   const [bankData, setBankData] = useState(BankDetailsData);
//   const pancardHandler = (e: any) => {
//     setBankData({ ...bankData, pancardno: e.target.value });
//   };
//   const accountHandler = (e: any) => {
//     setBankData({ ...bankData, accountno: e.target.value });
//   };
//   const banknameHandler = (e: any) => {
//     setBankData({ ...bankData, bankname: e.target.value });
//   };
//   const bankDetailsHandler = () => {
//     localStorage.setItem("bankdetails", JSON.stringify(bankData));
//     setShow(true);
//   };
//   return (
//     <div>
//       <Navbar />
//       <span style={{ textDecoration: "underline" }}>Bank Details</span>
//       <hr />
//       {!show && (
//         <form onSubmit={bankDetailsHandler}>
//           <span>Pancard No:- </span>
//           <input
//             type="text"
//             value={bankData.pancardno}
//             onChange={pancardHandler}
//             name="pancardno"
//             style={{ marginTop: "10px" }}
//           />{" "}
//           <br />
//           <span>Account No:- </span>
//           <input
//             type="text"
//             value={bankData.accountno}
//             onChange={accountHandler}
//             name="accountno"
//             style={{ marginTop: "10px" }}
//           />
//           <br />
//           <span>Bank Name:- </span>
//           <input
//             type="text"
//             value={bankData.bankname}
//             onChange={banknameHandler}
//             name="bankname"
//             style={{ marginTop: "10px" }}
//           />
//           <br />
//           <input
//             type="submit"
//             value="Submit Data"
//             style={{
//               backgroundColor: "cornflowerblue",
//               marginTop: "10px",
//               color: "white",
//               border: "none",
//               fontSize: "15px",
//             }}
//           />
//         </form>
//       )}
//       {show && (
//         <span style={{ color: "green" }}>Bank Details Added Successfully</span>
//       )}
//     </div>
//   );
// };

// export default BankDetails;
