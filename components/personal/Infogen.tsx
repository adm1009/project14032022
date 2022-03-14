import React, { useState } from "react";
import Navbar from "../Navbar";
const infodata = () => {
  const data = localStorage.getItem("infodata");
  if (!data)
    return {
      skillexp: "",
      skillknow: "",
      yearofexp: "",
      resume: "",
      certificate: "",
    };
  return JSON.parse(data);
};
const Infogen = () => {
  const [show, setShow] = useState(false);
  const [infogenData, setInfogenData] = useState(infodata);
  const skillexpHandler = (e: any) => {
    setInfogenData({ ...infogenData, skillexp: e.target.value });
  };
  const skillknowHandler = (e: any) => {
    setInfogenData({ ...infogenData, skillknow: e.target.value });
  };
  const yearofexpHandler = (e: any) => {
    setInfogenData({ ...infogenData, yearofexp: e.target.value });
  };
  const certificateHandler = (e: any) => {
    setInfogenData({ ...infogenData, certificate: e.target.value });
  };
  const resumeHandler = (e: any) => {
    setInfogenData({ ...infogenData, resume: e.target.value });
  };
  const infoDataSubmitHandler = () => {
    localStorage.setItem("infodata", JSON.stringify(infogenData));
    setShow(true);
  };
  return (
    <div>
      <Navbar />
      <span style={{ textDecoration: "underline" }}>
        Personal Information Details
      </span>
      <hr />
      {!show && (
        <form onSubmit={infoDataSubmitHandler}>
          <span>Skill(Experience):- </span>
          <input
            type="text"
            name="skillexp"
            style={{ margin: "10px" }}
            value={infogenData.skillexp}
            onChange={skillexpHandler}
          />
          <br />
          <span>Skill(Knowledge):- </span>
          <input
            type="text"
            name="skillknow"
            style={{ margin: "10px" }}
            value={infogenData.skillknow}
            onChange={skillknowHandler}
          />
          <br />
          <span>Years Of Experience:- </span>
          <input
            type="text"
            name="yearofexp"
            style={{ margin: "10px" }}
            value={infogenData.yearofexp}
            onChange={yearofexpHandler}
          />
          <br />
          <span>Resume:- </span>
          <input
            type="file"
            name="resume"
            accept="application/pdf"
            style={{ margin: "10px" }}
            value={infogenData.resume}
            onChange={resumeHandler}
          />
          <br />
          <span>Certification(Certification Name:Date):- </span>
          <input
            type="text"
            name="certificate"
            style={{ margin: "10px" }}
            value={infogenData.certificate}
            onChange={certificateHandler}
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
          <br />
        </form>
      )}
      {show && <span style={{ color: "green" }}>Infogen data added successfully</span>}
    </div>
  );
};

export default Infogen;
