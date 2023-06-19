import { Title } from "components/UI/Title";
import globusWorld from "assets/icons/globus.svg";
import Image from "next/image";

export const About = () => {
  return (
    <>
      <div className="defaultLinear" id="about">
        <div className="flex relative items-center wrapper lg:h-[900px] h-[700px]">
          <div className="items-start lg:flex lg:gap-52">
            <Title title={"О НАС"} />
            <p className="flex flex-col gap-4 max-w-[592px] h-[351px] z-40 lg:text-3xl text-xl lg:ml-[100px]">
              Каждая крупная компания должна благодарить не только себя, но и
              тех, кто стоял рядом с ней и верил в нее. Ведь самый главный
              принцип в нашей работе – доверие.
              <span className="mt-5">
                Доверие не только обеспечивает лояльность клиентов и партнеров,
                но и повышает нашу требовательность к себе. Мы сотрудничаем на
                основе отношений, построенных на тысячелетних человеческих
                традициях.
              </span>
            </p>
          </div>
          <div
            className="absolute right-[100px]"
            data-aos="zoom-in-down"
            data-aos-duration="10000"
            data-aos-once="true"
          >
            <Image className="w-[558px]" src={globusWorld} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
