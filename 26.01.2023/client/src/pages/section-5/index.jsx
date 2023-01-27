import React from "react";
import "./index.scss";

const SectionFive = () => {
  return (
    <div className="mesage-form">
      <div className="container">
      <div className="message">
        <h1>Message Us</h1>
        <p>
          Natus totam voluptatibus animi aspernatur ducimus quas obcaecati
          mollitia quibusdam temporibus culpa dolore molestias blanditiis
          consequuntur sunt nisi.
        </p>
        <div className="forms">
          <div className="fullname">
            <div>
              <input type="text" placeholder="  First name" />
            </div>
            <div>
              <input type="text" placeholder="  Last name" />
            </div>
          </div>
          <div className="input form">
            <input type="text" placeholder="  Subject" />
          </div>
          <div className="input form">
            <input type="email" placeholder="  Email" />
          </div>
          <div className="input form">
          <textarea name="comment" form="usrform">  Write your message here.</textarea>
          </div>
        </div>
        <button>SEND MESSAGE</button>
      </div>
    </div>
    </div>
  );
};

export default SectionFive;
