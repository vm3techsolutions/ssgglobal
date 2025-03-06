import React from 'react'
import { Button } from "react-bootstrap";
import { BiBorderRadius } from 'react-icons/bi';

export default function InviteButton1() {
  const handleClick = () => {
    alert("Puja Reserved Successfully!");
  };
  return (
    <div className=''>
         <div
        className="text-center justify-center flex-colomn d-flex gap-3 pt-9 w-100"
        style={{ backgroundColor: "#FFFFF0", padding: "10px" }}
      >
        <h4 className="mt-2 fw-bold text-md-center ">Ready to Experience the Divine Blessings?</h4>
       <Button className="primary-btn fw-bold px-3 py-2 transition duration-300"  style={{ 
                   backgroundColor: "#800080", 
                   border: "none", 
                   transition: "background-color 0.3s ease" 
                 }}
                 onClick={handleClick}
                 onMouseOver={(e) => (e.target.style.backgroundColor = "orange")}
                 onMouseOut={(e) => (e.target.style.backgroundColor = "#800080")}>
                 Reserve Your Puja
               </Button>

      </div>
    </div>
  )
}
