import { useGetAllPortfolioQuery } from "store/endpoints/portfoilo";
import { Title } from "components/UI/Title";
import { PortfolioCard } from "components/Cards/PortfolioCard";
import { useState } from "react";
import { useEffect } from "react";

const Portfolio = () => {
  const { data } = useGetAllPortfolioQuery();
  const [widthScreen, setWidthScreen] = useState();
  let filterData = [];
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidthScreen(window.screen.width);
    }
  }, []);

  data?.portfolio?.map((item, index) => {
    let newObj = JSON.parse(JSON.stringify(item));
    if (index === 0) {
      newObj["className"] = "row-start-1 row-end-3 w-[600px] h-[400px]";
    }
    if (index === 7) {
      newObj["className"] =
        "row-start-1 row-end-3 col-start-2 w-[600px] h-[400px]";
    }
    if (index >= 5) {
      newObj["aosType"] = "fade-right";
    } else {
      newObj["aosType"] = "fade-left";
    }
    filterData?.push(newObj);
  });
  return (
    <section className="wrapper pt-[100px]" id="portfolio">
      <div className="flex justify-between items-center w-full">
        <Title title={"ПОРТФОЛИО"} />
      </div>
      {widthScreen > 500 && (
        <div className="mt-8 grid gap-5">
          <div className="grid grid-cols-[auto_1fr_1fr] gap-5">
            {filterData
              ?.filter((_, index) => index < 5)
              ?.map((item) => (
                <PortfolioCard
                  title={item?.title}
                  className={item?.className}
                  img={item?.image_url}
                  aosType={item?.aosType}
                  type={item?.type}
                  link={item?.link}
                  key={item?.id}
                />
              ))}
          </div>
          <div className="grid grid-cols-[1fr_auto_1fr] gap-5">
            {filterData
              ?.filter((_, index) => index >= 5 && index < 10)
              ?.map((item) => (
                <PortfolioCard
                  title={item?.title}
                  className={item?.className}
                  img={item?.image_url}
                  aosType={item?.aosType}
                  type={item?.type}
                  link={item?.link}
                  key={item?.id}
                />
              ))}
          </div>
          {/* <div className="grid grid-cols-[1fr_1fr_auto] gap-5">
            {filterData
              ?.filter((_, index) => index >= 10)
              ?.map((item) => (
                <PortfolioCard
                  title={item?.title}
                  className={item?.className}
                  img={item?.image_url}
                  aosType={item?.aosType}
                  type={item?.type}
                  link={item?.link}
                  key={item?.id}
                />
              ))}
          </div> */}
        </div>
      )}
      {widthScreen <= 500 && (
        <div className="mt-8 grid grid-cols-[1fr_1fr] gap-5">
          {data?.portfolio?.map((item) => (
            <PortfolioCard
              title={item?.title}
              img={item?.image_url}
              className={"h-[100px]"}
              aosType={item?.aosType}
              type={item?.type}
              link={item?.link}
              key={item?.id}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Portfolio;
