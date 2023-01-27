import React from "react";
import "./index.scss";



const SectionOne = () => {


  return (
    <div className="section-1">
      <div className="section-one">
        <div className="learn-text">
          <h1>Learn From The Expert</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsa
            nulla sed quis rerum amet natus quas necessitatibus.
          </p>
          <button>ADMISSION NOW</button>
        </div>
        <div className="sigup-form">
            <h1>Sign Up</h1>
            <form>
                <div><input className="input" type="text" placeholder="Email Address"/></div>
                <div><input className="input" type="text"  placeholder="Password"/></div>
                <div><input className="input" type="text"  placeholder="Re-type Password"/></div>
            </form>
          
          <button className="signup">SIGN UP </button>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
