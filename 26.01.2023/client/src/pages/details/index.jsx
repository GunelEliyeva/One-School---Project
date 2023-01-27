import React, { useEffect, useState } from "react";
import "./index.scss";
import { Helmet } from "react-helmet";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Details = () => {
  const [details, setDetails] = useState([]);
  const { _id } = useParams();
  const navigate = useNavigate();

  const getData = async () => {
    let data = await axios.get(`http://localhost:8080/teachers/${_id}`);
    setDetails(data.data);
  };
  useEffect(() => {
    getData();
  }, []);


  return (
    <div className="details">
      <Helmet>
        <title>Details Page</title>
        <meta name="description" content="Description of Details Page" />
      </Helmet>

      <div className="container">
        <div className="details-page">
          <div className="all">
            <div>
              <img src={details.imgurl} alt="" />
            </div>
            <div className="detail-text">
              <h2>
                <span>Name: </span>
                <br></br>
                {details?.name}
              </h2>
              <h3>
                <span>Profession: </span>
                <br></br>
                {details?.profession}
              </h3>
              <h3>
                <span>Price: </span>
                <br></br>
                {details?.price}
              </h3>
              <h3>
                <span>About: </span>
                <br></br>
                {details?.about}
              </h3>

              <div className="go-back">
                <button className="back" onClick={() => navigate("/")}>
                  Go Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
