import React from "react";
import Navbar from "../Navbar";
const MyRegularize = () => {
  const data = localStorage.getItem("regularize");
  if (!data)
    return (
      <div>
        <Navbar />
        <span style={{ textDecoration: "underline" }}>My Regularization</span>
        <hr />
        <span style={{ color: "green" }}>Nothing in Regularizartion</span>
      </div>
    );
  return (
    <>
      <Navbar />
      <span style={{ textDecoration: "underline" }}>My Regularization</span>
      <hr />
      <span>{data}</span>
    </>
  );
};

export default MyRegularize;
