import React, { useState } from "react";
import Navbar from "../Navbar";
const EmergencyData = () =>{
  const emerData = localStorage.getItem("emergencydata")
  if(!emerData) return{
    firstpersonname: "",
    firstpersonno: "",
    secondpersoname: "",
    secondpersonno: "",
  };
  return JSON.parse(emerData);
}
const EmergencyContact = () => {
  const[show,setShow]=useState(false);
  const [emergencyData, setEmergencyData] = useState(EmergencyData);
  const firstnameHandler = (e:any) =>{
    setEmergencyData({...emergencyData,firstpersonname:e.target.value})
  }
  const firstnoHandler = (e:any) =>{
    setEmergencyData({...emergencyData,firstpersonno:e.target.value})
  }
  const secondnameHandler = (e:any) =>{
    setEmergencyData({...emergencyData,secondpersoname:e.target.value})
  }
  const secondnoHandler = (e:any) =>{
    setEmergencyData({...emergencyData,secondpersonno:e.target.value})
  }
  const emergencyHandler = () =>{
    localStorage.setItem("emergencydata",JSON.stringify(emergencyData));
    setShow(true);
  }
  return (
    <div>
      <Navbar />
      <span style={{ textDecoration: "underline" }}>Emergency Contact</span>
      <hr />
      {!show && <form onSubmit={emergencyHandler}>
      <span>Firstperson Name:- </span>
      <input
        type="text"
        value={emergencyData.firstpersonname}
        name="firstpersonname"
        style={{ marginTop: "10px" }}
        onChange={firstnameHandler}
      />
      <br />
      <span>Firstperson No:- </span>
      <input
        type="number"
        value={emergencyData.firstpersonno}
        name="firstpersonno"
        style={{ marginTop: "10px" }}
        onChange={firstnoHandler}
      />
      <br />
      <span>Secondperson Name:- </span>
      <input
        type="text"
        value={emergencyData.secondpersoname}
        name="secondpersoname"
        style={{ marginTop: "10px" }}
        onChange={secondnameHandler}
      />
      <br />
      <span>Secondperson No:- </span>
      <input
        type="number"
        value={emergencyData.secondpersonno}
        name="secondpersonno"
        style={{ marginTop: "10px" }}
        onChange={secondnoHandler}
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
      </form>}
      {show && <span style={{color:"green"}}>Emergency Data Added Successfully</span>}
    </div>
  );
};

export default EmergencyContact;
