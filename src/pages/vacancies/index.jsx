import { SEO } from "components/SEO";
import { Vacancies } from "modules/Vacancies";
import React from "react";

const VacanciesPage = () => {
  return (
    <>
      <SEO title={"Вакансии"} />
      <Vacancies />
    </>
  );
};

export default VacanciesPage;
