import React from 'react'
import Navbar from '../Navbar';
import {Link} from "react-router-dom";
const LeaveDetails = () => {
  return (
    <div>
        <Navbar />
        <Link to="myregularize"><button>My Regularizartion</button></Link>
        <Link to="applyregularize"><button>Apply for Regularization</button></Link>
    </div>
  )
}

export default LeaveDetails