import React from "react";
import { Services } from "../../modules/Services";
import { SEO } from "components/SEO";
const ServicesPage = () => {
  return (
    <>
      <SEO title={"Сервисы"} />
      <Services />
    </>
  );
};

export default ServicesPage;
