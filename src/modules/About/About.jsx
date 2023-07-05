import { Title } from "components/UI/Title";
import React, { useEffect, useState } from "react";
import { Carousel } from "antd";

const About = () => {
  const data = [
    {
      title:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed,eligendi voluptatibus maiores assumenda voluptate sequi molestias voluptatem voluptatum nobis reprehenderit error? Impedit possimus magnam mollitia saepe maxime deserunt blanditiis laudantium similique deleniti aliquid voluptas consequatur iste, enim quos, tenetur laboriosam ut sint iure explicabo recusandae praesentium. Minus voluptate temporibus quos?",
      img: "https://juba.uz/wp-content/uploads/2021/02/a51-150x150.png",
      class: "border-r border-[#A4A4A4]",
      classRes: "border-b border-[#A4A4A4]",
    },
    {
      title:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed,eligendi voluptatibus maiores assumenda voluptate sequi molestias voluptatem voluptatum nobis reprehenderit error? Impedit possimus magnam mollitia saepe maxime deserunt blanditiis laudantium similique deleniti aliquid voluptas consequatur iste, enim quos, tenetur laboriosam ut sint iure explicabo recusandae praesentium. Minus voluptate temporibus quos?",
      img: "https://juba.uz/wp-content/uploads/2021/02/a3-150x150.png",
      class: "border-r border-[#A4A4A4]",
      classRes: "border-b border-[#A4A4A4]",
    },
    {
      title:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed,eligendi voluptatibus maiores assumenda voluptate sequi molestias voluptatem voluptatum nobis reprehenderit error? Impedit possimus magnam mollitia saepe maxime deserunt blanditiis laudantium similique deleniti aliquid voluptas consequatur iste, enim quos, tenetur laboriosam ut sint iure explicabo recusandae praesentium. Minus voluptate temporibus quos?",
      img: "https://juba.uz/wp-content/uploads/2021/02/asaxiy-копия-150x150.png",
      class: "border-r border-[#A4A4A4]",
      classRes: "border-b border-[#A4A4A4]",
    },
    {
      title:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed,eligendi voluptatibus maiores assumenda voluptate sequi molestias voluptatem voluptatum nobis reprehenderit error? Impedit possimus magnam mollitia saepe maxime deserunt blanditiis laudantium similique deleniti aliquid voluptas consequatur iste, enim quos, tenetur laboriosam ut sint iure explicabo recusandae praesentium. Minus voluptate temporibus quos?",
      img: "https://juba.uz/wp-content/uploads/2021/04/logo13-removebg-preview-150x150.png",
      classRes: "border-b border-[#A4A4A4]",
    },
    {
      title:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed,eligendi voluptatibus maiores assumenda voluptate sequi molestias voluptatem voluptatum nobis reprehenderit error? Impedit possimus magnam mollitia saepe maxime deserunt blanditiis laudantium similique deleniti aliquid voluptas consequatur iste, enim quos, tenetur laboriosam ut sint iure explicabo recusandae praesentium. Minus voluptate temporibus quos?",
      img: "https://juba.uz/wp-content/uploads/2021/02/A7-150x150.png",
      class: "border-r border-t border-b border-[#A4A4A4]",
      classRes: "border-b border-[#A4A4A4]",
    },
    {
      title:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed,eligendi voluptatibus maiores assumenda voluptate sequi molestias voluptatem voluptatum nobis reprehenderit error? Impedit possimus magnam mollitia saepe maxime deserunt blanditiis laudantium similique deleniti aliquid voluptas consequatur iste, enim quos, tenetur laboriosam ut sint iure explicabo recusandae praesentium. Minus voluptate temporibus quos?",
      img: "https://juba.uz/wp-content/uploads/2021/02/a2-150x150.png",
      class: "border-r border-t border-b border-[#A4A4A4]",
      classRes: "border-b border-[#A4A4A4]",
    },
    {
      title:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed,eligendi voluptatibus maiores assumenda voluptate sequi molestias voluptatem voluptatum nobis reprehenderit error? Impedit possimus magnam mollitia saepe maxime deserunt blanditiis laudantium similique deleniti aliquid voluptas consequatur iste, enim quos, tenetur laboriosam ut sint iure explicabo recusandae praesentium. Minus voluptate temporibus quos?",
      img: "https://juba.uz/wp-content/uploads/2021/02/a6-150x150.png",
      class: "border-r border-t border-b border-[#A4A4A4]",
      classRes: "border-b border-[#A4A4A4]",
    },
    {
      title:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed,eligendi voluptatibus maiores assumenda voluptate sequi molestias voluptatem voluptatum nobis reprehenderit error? Impedit possimus magnam mollitia saepe maxime deserunt blanditiis laudantium similique deleniti aliquid voluptas consequatur iste, enim quos, tenetur laboriosam ut sint iure explicabo recusandae praesentium. Minus voluptate temporibus quos?",
      img: "https://juba.uz/wp-content/uploads/2021/04/GRY_LO9GO_ONAYLI-150x150.png",
      class: "border-t border-b border-[#A4A4A4]",
      classRes: "border-b border-[#A4A4A4]",
    },
    {
      title:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed,eligendi voluptatibus maiores assumenda voluptate sequi molestias voluptatem voluptatum nobis reprehenderit error? Impedit possimus magnam mollitia saepe maxime deserunt blanditiis laudantium similique deleniti aliquid voluptas consequatur iste, enim quos, tenetur laboriosam ut sint iure explicabo recusandae praesentium. Minus voluptate temporibus quos?",
      img: "https://juba.uz/wp-content/uploads/2021/02/A8-150x150.png",
      class: "border-r border-[#A4A4A4]",
      classRes: "border-b border-[#A4A4A4]",
    },
    {
      title:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed,eligendi voluptatibus maiores assumenda voluptate sequi molestias voluptatem voluptatum nobis reprehenderit error? Impedit possimus magnam mollitia saepe maxime deserunt blanditiis laudantium similique deleniti aliquid voluptas consequatur iste, enim quos, tenetur laboriosam ut sint iure explicabo recusandae praesentium. Minus voluptate temporibus quos?",
      img: "https://juba.uz/wp-content/uploads/2022/05/a21-150x150.png",
      class: "border-r border-[#A4A4A4]",
      classRes: "border-b border-[#A4A4A4]",
    },
    {
      title:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed,eligendi voluptatibus maiores assumenda voluptate sequi molestias voluptatem voluptatum nobis reprehenderit error? Impedit possimus magnam mollitia saepe maxime deserunt blanditiis laudantium similique deleniti aliquid voluptas consequatur iste, enim quos, tenetur laboriosam ut sint iure explicabo recusandae praesentium. Minus voluptate temporibus quos?",
      img: "https://juba.uz/wp-content/uploads/2022/05/uva-150x150.png",
      class: "border-r border-[#A4A4A4]",
      classRes: "border-b border-[#A4A4A4]",
    },
    {
      title:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed,eligendi voluptatibus maiores assumenda voluptate sequi molestias voluptatem voluptatum nobis reprehenderit error? Impedit possimus magnam mollitia saepe maxime deserunt blanditiis laudantium similique deleniti aliquid voluptas consequatur iste, enim quos, tenetur laboriosam ut sint iure explicabo recusandae praesentium. Minus voluptate temporibus quos?",
      img: "https://juba.uz/wp-content/uploads/2021/02/a1-150x150.png",
    },
  ];
  const [widthScreen, setWidthScreen] = useState();
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidthScreen(window.screen.width);
    }
  }, []);
  return (
    <section className="pt-[100px] wrapper ">
      <div className="flex flex-col gap-4">
        <Title title={"О НАС"} />
        <p className="lg:text-xl text-sm">
          Мы IT-компания, которая предлагает инновационные решения, помогающие бизнесу добиться успеха. Мы считаем, что технологии должны использоваться, чтобы сделать жизнь людей проще и продуктивнее. Наша миссия состоит в том, чтобы помочь предприятиям достичь своих целей, предоставляя им наилучшие ИТ-решения.
          Мы были основаны в 2023 году двумя ИТ-специалистами, которые были увлечены использованием технологий, чтобы изменить мир к лучшему. С тех пор мы выросли и стали ведущим поставщиком ИТ-услуг в нашем регионе. Мы стремимся помочь нашим клиентам в достижении их целей, и мы рады видеть, что ждет нашу компанию в будущем.
        </p>
        <p className="lg:text-xl text-sm">
          Что мы делаем
          Мы предлагаем широкий спектр ИТ-услуг, в том числе:
          Дизайн и разработка веб-сайта
          Разработка программного обеспечения
          ИТ-консалтинг
          ИТ поддержка
          Облачные вычисления
          Информационная безопасность
          Мы работаем с предприятиями любого размера, от небольших стартапов до крупных предприятий. Мы стремимся предоставлять нашим клиентам наилучший сервис и всегда ищем новые способы помочь им добиться успеха.
        </p>
        <p className="lg:text-xl text-sm">
        Если вы хотите узнать больше о нашей компании или наших услугах, пожалуйста, свяжитесь с нами. Мы будем рады ответить на любые ваши вопросы. <br />
        Спасибо за интерес к нашей компании!
        </p>
      </div>
      <div className="mt-10">
        <Title title={"НАШ КОМАНДА"} />
      </div>
      {widthScreen > 500 && (
        <Carousel autoplay autoplaySpeed={7000} className="w-full mt-5">
          <div className="h-[300px]">
            <div className="grid grid-cols-3 w-full gap-5">
              <img
                src="https://bairesdev.mo.cloudinary.net/blog/2021/07/software-developing-team.jpg?tx=w_3840,q_auto"
                alt=""
                className="w-full h-full object-cover"
              />
              <img
                src="https://cdn.selleo.com/uploads/landing-covers/top-developers.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
              <img
                src="https://youteam.io/blog/wp-content/uploads/2018/11/team.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="h-[300px]">
            <div className="grid grid-cols-3 w-full gap-5">
              <img
                src="https://assets.atdw-online.com.au/images/Original__9862721_GC46_1L4A3320_7h2u7d5.jpg?rect=214%2C0%2C3413%2C2560&w=480&h=360&rot=360&q=eyJ0eXBlIjoibGlzdGluZyIsImxpc3RpbmdJZCI6IjU2YjI0NGE5ZDVmMTU2NTA0NWQ4YThjYyIsImRpc3RyaWJ1dG9ySWQiOiI1NmIxZWI5MzQ0ZmVjYTNkZjJlMzIwYzgiLCJhcGlrZXlJZCI6IjU2YjFlZTU5MGNmMjEzYWQyMGRjNTgxOSIsInNlcnZpY2VJZCI6IjU2YjI0NGE5ZDVmMTU2NTA0NWQ4YThjZiJ9"
                alt=""
                className="w-full h-full object-cover"
              />
              <img
                src="https://static.schibsted.pl/prod/wp-content/uploads/2015/07/27160153/gaming-2.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
              <img
                src="https://sxodim.com/uploads/images/2022/11/21/68fd5d98d360abcec0f2aa9e99705db3.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Carousel>
      )}
      {widthScreen < 500 && (
        <div className="flex flex-col gap-4 mt-5">
          <img
            src="https://bairesdev.mo.cloudinary.net/blog/2021/07/software-developing-team.jpg?tx=w_3840,q_auto"
            alt=""
            className="w-full h-[200px] object-cover"
            data-aos="fade-up"
            data-aos-once="true"
          />
          <img
            src="https://cdn.selleo.com/uploads/landing-covers/top-developers.jpg"
            alt=""
            className="w-full h-[200px] object-cover"
            data-aos="fade-up"
            data-aos-once="true"
          />
          <img
            src="https://youteam.io/blog/wp-content/uploads/2018/11/team.jpg"
            alt=""
            className="w-full h-[200px] object-cover"
            data-aos="fade-up"
            data-aos-once="true"
          />
          <img
            src="https://assets.atdw-online.com.au/images/Original__9862721_GC46_1L4A3320_7h2u7d5.jpg?rect=214%2C0%2C3413%2C2560&w=480&h=360&rot=360&q=eyJ0eXBlIjoibGlzdGluZyIsImxpc3RpbmdJZCI6IjU2YjI0NGE5ZDVmMTU2NTA0NWQ4YThjYyIsImRpc3RyaWJ1dG9ySWQiOiI1NmIxZWI5MzQ0ZmVjYTNkZjJlMzIwYzgiLCJhcGlrZXlJZCI6IjU2YjFlZTU5MGNmMjEzYWQyMGRjNTgxOSIsInNlcnZpY2VJZCI6IjU2YjI0NGE5ZDVmMTU2NTA0NWQ4YThjZiJ9"
            alt=""
            className="w-full h-[200px] object-cover"
            data-aos="fade-up"
            data-aos-once="true"
          />
          <img
            src="https://static.schibsted.pl/prod/wp-content/uploads/2015/07/27160153/gaming-2.jpg"
            alt=""
            className="w-full h-[200px] object-cover"
            data-aos="fade-up"
            data-aos-once="true"
          />
          <img
            src="https://sxodim.com/uploads/images/2022/11/21/68fd5d98d360abcec0f2aa9e99705db3.jpg"
            alt=""
            className="w-full h-[200px] object-cover"
            data-aos="fade-up"
            data-aos-once="true"
          />
        </div>
      )}
      <div className="flex flex-col gap-2 mt-10 ">
        <div className="mb-5">
          <Title title={"НАМ ДОВЕРЯЮТ"} />
        </div>
        <div className="grid lg:grid-cols-4 bg-white px-5 lg:py-10 rounded-xl ">
          {data?.map((item) => (
            <div
              className={`flex items-center justify-center gap-10 ${widthScreen < 500 ? item.classRes : item.class
                }`}
            >
              <img
                src={item.img}
                alt=""
                className="w-[150px] h-[150px]"
                data-aos="fade-up"
                data-aos-once="true"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
