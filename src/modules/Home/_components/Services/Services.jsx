import { useGetAllServicesQuery } from "store/endpoints/services";
import { ServicesCard } from "components/Cards/ServicesCard";
import { Title } from "components/UI/Title";
const Services = () => {
  const { data } = useGetAllServicesQuery();
  return (
    <section className="wrapper pt-[100px]" id="services">
      <Title title={"СЕРВИСЫ"} />
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
    </section>
  );
};

export default Services;
