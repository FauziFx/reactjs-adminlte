import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import useDocumentTitle from "../utils/useDocumentTitle";

const Home = () => {
  useDocumentTitle("Dashboard");
  return (
    <div className="content-wrapper">
      <Breadcrumb title="Dashboard" />
    </div>
  );
};

export default Home;
