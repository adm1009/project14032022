import React, { useState } from "react";
import Navbar from "../Navbar";
const formData = () => {
  const storedValues = localStorage.getItem("personalinformation");
  if (!storedValues)
    return {
      employeecode: "",
      firstname: "",
      middlename: "",
      lastname: "",
      gender: "",
      dateofbirth: "",
      mobileno: "",
      emailid: "",
      address: "",
      passportno: "",
      bloodgroup: "",
    };
  return JSON.parse(storedValues);
};
const PersonalInformation = () => {
  const [personalData, setPersonalData] = useState(formData);
  const [show, setShow] = useState(false);
  const employeecodeHandler = (e: any) => {
    setPersonalData({
      ...personalData,
      employeecode: e.target.value,
    });
  };
  const firstnameHandler = (e: any) => {
    setPersonalData({
      ...personalData,
      firstname: e.target.value,
    });
  };
  const middlenameHandler = (e: any) => {
    setPersonalData({
      ...personalData,
      middlename: e.target.value,
    });
  };
  const lastnameHandler = (e: any) => {
    setPersonalData({ ...personalData, lastname: e.target.value });
  };
  const genderHandler = (e: any) => {
    setPersonalData({ ...personalData, gender: e.target.value });
  };
  const dateofbirthHandler = (e: any) => {
    setPersonalData({ ...personalData, dateofbirth: e.target.value });
  };
  const mobilenoHandler = (e: any) => {
    setPersonalData({ ...personalData, mobileno: e.target.value });
  };
  const emailidHandler = (e: any) => {
    setPersonalData({ ...personalData, emailid: e.target.value });
  };
  const addressHandler = (e: any) => {
    setPersonalData({ ...personalData, address: e.target.value });
  };
  const passportnoHandler = (e: any) => {
    setPersonalData({ ...personalData, passportno: e.target.value });
  };
  const bloodgroupHandler = (e: any) => {
    setPersonalData({ ...personalData, bloodgroup: e.target.value });
  };
  const alldatasubmithandler = () => {
    localStorage.setItem("personalinformation", JSON.stringify(personalData));
    setShow(true);
  };
  return (
    <div>
      <Navbar />
      <span style={{textDecoration:"underline"}}>Personal Information Details</span>
       <hr />
      {!show && (
        <form onSubmit={alldatasubmithandler}>
          <span>Employee Code:- </span>
          <input
            type="text"
            value={personalData.employeecode}
            name="employeecode"
            onChange={employeecodeHandler}
            style={{ marginTop: "10px" }}
          />
          <br />
          <span>FirstName:- </span>
          <input
            type="text"
            value={personalData.firstname}
            name="firstname"
            onChange={firstnameHandler}
            style={{ marginTop: "10px" }}
          />
          <br />
          <span>MiddleName:- </span>
          <input
            type="text"
            value={personalData.middlename}
            name="middlename"
            onChange={middlenameHandler}
            style={{ marginTop: "10px" }}
          />
          <br />
          <span>LastName:- </span>
          <input
            type="text"
            value={personalData.lastname}
            name="lastname"
            onChange={lastnameHandler}
            style={{ marginTop: "10px" }}
          />
          <br />
          <span>Gender:- </span>
          <input
            type="text"
            value={personalData.gender}
            name="gender"
            onChange={genderHandler}
            style={{ marginTop: "10px" }}
          />
          <br />
          <span>Date of Birth:- </span>
          <input
            type="text"
            value={personalData.dateofbirth}
            name="dateofbirth"
            onChange={dateofbirthHandler}
            style={{ marginTop: "10px" }}
          />
          <br />
          <span>Mobile No:- </span>
          <input
            type="text"
            value={personalData.mobileno}
            name="mobileno"
            onChange={mobilenoHandler}
            style={{ marginTop: "10px" }}
          />
          <br />
          <span>Email Id:- </span>
          <input
            type="text"
            value={personalData.emailid}
            name="emailid"
            onChange={emailidHandler}
            style={{ marginTop: "10px" }}
          />
          <br />
          <span>Address:- </span>
          <input
            type="text"
            value={personalData.address}
            name="address"
            onChange={addressHandler}
            style={{ marginTop: "10px" }}
          />
          <br />
          <span>Passport No:- </span>
          <input
            type="text"
            value={personalData.passportno}
            name="passportno"
            onChange={passportnoHandler}
            style={{ marginTop: "10px" }}
          />
          <br />
          <span>Blood Group:- </span>
          <input
            type="text"
            value={personalData.bloodgroup}
            name="bloodgroup"
            onChange={bloodgroupHandler}
            style={{ marginTop: "10px" }}
          />
          <br />
          <input
            type="submit"
            value="Submit Data"
            style={{
              marginTop: "10px",
              backgroundColor: "cornflowerblue",
              color: "white",
              border: "none",
              fontSize: "15px",
            }}
          />
        </form>
      )}
      {show && <span style={{ color: "green" }}>Personal Information Added Successfully</span>}
    </div>
  );
};

export default PersonalInformation;
