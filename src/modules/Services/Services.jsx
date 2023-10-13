import { ServicesCard } from "components/Cards/ServicesCard";
import { Title } from "components/UI/Title";
import React from "react";
import { useGetAllServicesQuery } from "store/endpoints/services";

const Services = () => {
  const { data } = useGetAllServicesQuery();

  return (
    <section className="pt-[100px] wrapper">
      <div>
        <Title title={"СЕРВИСЫ"} />
        <h6 className="text-2xl">Какое решение вы ищите?</h6>

        <div className="grid lg:grid-cols-3  gap-5 mt-8">
          {data?.services?.map((item) => (
            <ServicesCard
              subtitle={item?.sub_title}
              title={item?.title}
              img={item?.image_url}
              key={item?.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
