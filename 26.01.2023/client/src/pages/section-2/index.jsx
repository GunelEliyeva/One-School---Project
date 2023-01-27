import React from "react";
import "./index.scss"

const SectionTwo = () => {
  return (
    <div className="container">
      <div className="our-program">
        <h1>Our Programs</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
          repellat aut neque! Doloribus sunt non aut reiciendis, vel recusandae
          obcaecati hic dicta repudiandae in quas quibusdam ullam, illum sed
          veniam!
        </p>
      </div>
      <div className="img-text">
        <div  className="image"><img src="https://preview.colorlib.com/theme/oneschool/images/undraw_youtube_tutorial.svg"/></div>
        <div className="we-are">
            <h1>We Are Excellent In Education</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maxime nam porro possimus fugiat quo molestiae illo.</p>
            <div><i className="fa-solid fa-user-graduate"></i> <span>22,931 Yearly Graduates</span></div>
            <div><i className="fa-solid fa-building-columns"></i> <span>150 Universities Worldwide</span></div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
