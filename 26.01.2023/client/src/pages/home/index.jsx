import React from "react";
import "./index.scss";
import { Helmet } from "react-helmet";
import SectionOne from "../section-1";
import SectionTwo from "../section-2";
import SectionFour from "../section-4";
import SectionTree from "../section-3";
import SectionFive from "../section-5";

const HomePages = () => {
  return (
    <div>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Description of Home Page" />
      </Helmet>
      <SectionOne/>
      <SectionTwo/>
      <SectionTree/>
      <SectionFour/>
      <SectionFive/>
    </div>
  );
};

export default HomePages;
