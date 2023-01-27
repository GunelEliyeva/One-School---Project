import React from "react";
import "./index.scss"

const SectionTree = () => {
  return (
    <div className="container">
     
      <div className="img-text">
        <div className="we-are">
            <h1>Strive for Excellent</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maxime nam porro possimus fugiat quo molestiae illo.</p>
            <div><i className="fa-solid fa-user-graduate"></i> <span>22,931 Yearly Graduates</span></div>
            <div><i className="fa-solid fa-building-columns"></i> <span>150 Universities Worldwide</span></div>
        </div>
        <div  className="image"><img src="https://preview.colorlib.com/theme/oneschool/images/undraw_teaching.svg"/></div>
      </div>
    </div>
  );
};

export default SectionTree;