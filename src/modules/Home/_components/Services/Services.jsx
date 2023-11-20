import { useGetAllServicesQuery } from "store/endpoints/services";
import { ServicesCard } from "components/Cards/ServicesCard";
import { Title } from "components/UI/Title";
const Services = () => {
  // const { data } = useGetAllServicesQuery();
  const data = [
    {
      id: 1,
      title: "Веб-сайты",
      subtitle:
        "Разрабатываем сайты масштабами от сайтов-визиток до корпоративных порталов. При выборе дизайна упор делается на желания клиента, входит наполнение сайта контентом, адаптивная вёрстка.",
      img: "swagger.astrolab.uz/media/24fc7fd6-3c96-4fd0-9f55-174601b01d4a.png",
    },
    {
      id: 2,
      title: "Мобильные приложения",
      subtitle:
        "Наша специализация - создавать прогрессивные мобильные приложения на Android и IOS. Сами приложения созданы с учётом последующего развития и продвижения бизнеса.",
      img: "swagger.astrolab.uz/media/8523706f-dc28-4535-bbcd-3ad97544eff8.png",
    },
    {
      id: 3,
      title: "Автоматизация бизнеса",
      subtitle:
        "Создаём системы автоматизации бизнеса. Помимо создания информационного web-портала, разрабатываем методы организации рабочего процесса и контроля выполнения поручений",
      img: "swagger.astrolab.uz/media/2640f6a8-5c72-407a-bb37-12c27939eaf7.png",
    },
    {
      id: 4,
      title: "Тестирование ПО",
      subtitle:
        "Протестируем ПО, проведем ряд тестов на юзабилити, проверим код на чистоту и расскажем о причинах имеющихся багов.",
      img: "swagger.astrolab.uz/media/a5b7f2f1-10ea-4c57-ba03-8a95ea8f098e.png",
    },
    {
      id: 5,
      title: "Аутстаффинг",
      subtitle:
        "Аутстаффинг – это вывод персонала за штат компании и его оформление в аутстаффинговой компании. Аутстаффер берет на себя функции выплаты заработной платы, уплаты налогов, исполнения трудового законодательства и т.д.",
      img: "swagger.astrolab.uz/media/da0c7355-ae94-47be-b514-90127082cd4f.png",
    },
    {
      id: 6,
      title: "Телеграм-боты",
      subtitle:
        "Мы разрабатываем ботов любой сложности и с самым разным функционалом. Кроме этого, мы можем интегрировать бота с вашей CRM-системой.",
      img: "swagger.astrolab.uz/media/2f0bc85c-cf26-443a-9ed0-a87b042fc14c.png",
    },
  ];
  return (
    <section className="wrapper pt-[100px]" id="services">
      <Title title={"СЕРВИСЫ"} />
      <div className="grid lg:grid-cols-3  gap-5 mt-8">
        {data?.map((item) => (
          <ServicesCard
            subtitle={item?.subtitle}
            title={item?.title}
            img={item?.img}
            key={item?.id}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
