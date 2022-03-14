import React, { useState } from "react";
import Navbar from "../Navbar";
const ApplyRegularize = () => {
  const [show, setShow] = useState(false);
  const [applyregularize, setApplyRegularize] = useState({
    approver: "hr",
    reason: "work from home",
    date: "",
    checkin: "",
    checkout: "",
  });
  const approverHandler = (e: any) => {
    setApplyRegularize({ ...applyregularize, approver: e.target.value });
  };
  const reasonHandler = (e: any) => {
    setApplyRegularize({ ...applyregularize, reason: e.target.value });
  };
  const dateHandler = (e:any) =>{
      setApplyRegularize({...applyregularize, date:e.target.value});
  }
  const checkinHandler = (e:any)=>{
      setApplyRegularize({...applyregularize, checkin:e.target.value});
  }
  const checkoutHandler = (e:any) =>{
      setApplyRegularize({...applyregularize,checkout:e.target.value});
  }
  const regularizesubmitHandler = () => {
    localStorage.setItem("regularize", JSON.stringify(applyregularize));
    setShow(true);
  };
  return (
    <div>
      <Navbar />
      {!show && <form onSubmit={regularizesubmitHandler}>
        <span>Select Lead/Approver:- </span>
        <select
          value={applyregularize.approver}
          onChange={approverHandler}
          style={{ marginTop: "10px" }}
        >
          <option value="hr">HR</option>
          <option value="department head">DEPARTMENT HEAD</option>
          <option value="team leader">TEAM LEADER</option>
          <option value="senior manager">SENIOR MANAGER</option>
          <option value="manager">MANAGER</option>
        </select>
        <br />
        <span>Date:- </span>
        <input
          type="text"
          name="date"
          value={applyregularize.date}
          onChange={dateHandler}
          style={{ marginTop: "10px" }}
        />
        <span> YYYY-MM-DD</span>
        <br />
        <span>Check In:- </span>
        <input
          type="text"
          name="checkin"
          value={applyregularize.checkin}
          style={{ marginTop: "10px" }}
          onChange={checkinHandler}
        />
        <span> HH:MM:SS (24 hrs format)</span>
        <br />
        <span>Check Out:- </span>
        <input
          type="text"
          name="checkout"
          value={applyregularize.checkout}
          style={{ marginTop: "10px" }}
          onChange={checkoutHandler}
        />
        <span> HH:MM:SS (24 hrs format)</span>
        <br />
        <span>Reason:- </span>
        <select
          value={applyregularize.reason}
          onChange={reasonHandler}
          style={{ marginTop: "10px" }}
        >
          <option value="work from home">WORK FROM HOME</option>
          <option value="on site">ON SITE</option>
          <option value="half day">HALF DAY</option>
          <option value="present">PRESENT</option>
        </select>
        <br />
        <input
          type="submit"
          value="Apply"
          style={{
            backgroundColor: "cornflowerblue",
            marginTop: "10px",
            color: "white",
            border: "none",
            fontSize: "15px",
          }}
        />
      </form>}
      {show && <span style={{color:"green"}}>Regulaize Request sent successfully</span>}
    </div>
  );
};

export default ApplyRegularize;
