import { useEffect } from "react";
import { VacanciesCard } from "components/Cards/VacanciesCard";
import { Title } from "components/UI/Title";
import { useGetAllVacanciesQuery } from "store/endpoints/vacancies";

const Vacancies = () => {
  const { data } = useGetAllVacanciesQuery();
  // useEffect(() => {
  //   document.documentElement.scrollTop = 0;
  // }, []);
  return (
    <section className="wrapper pt-[100px]" id="vacancies">
      <Title title={"ВАКАНСИИ"} />
      <div className="grid lg:grid-cols-3 gap-5 mt-5">
        {data?.vacancies?.map((item) => (
          <VacanciesCard data={item} key={item?.id} />
        ))}
      </div>
    </section>
  );
};

export default Vacancies;
