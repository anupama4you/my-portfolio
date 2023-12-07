import React from "react";
import { Helmet } from "react-helmet-async";

const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>{title} - Software Developer based in Adelaide</title>
    </Helmet>
  );
};

export default PageTitle;
