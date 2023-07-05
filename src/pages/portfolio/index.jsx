import React from "react";
import { Portfolio } from "../../modules/Portfolio";
import { SEO } from "components/SEO";

const PortfolioPage = () => {
  return (
    <>
      <SEO title={"Портфолио"} />
      <Portfolio />
    </>
  );
};

export default PortfolioPage;
