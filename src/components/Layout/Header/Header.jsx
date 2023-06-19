import React, { useEffect, useRef } from "react";
import { useState } from "react";
import logo from "assets/images/logo.png";
import logoWhite from "assets/images/astrologoWhite.png";
// import { gsap } from "gsap";
import Hamburger from "hamburger-react";
import style from "./index.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
const Header = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const nav = [
    {
      title: "О НАС",
      href: "/#about",
    },
    {
      title: "СЕРВИСЫ",
      href: "/#services",
    },
    {
      title: "ПОРТФОЛИО",
      href: "#portfolio",
    },
  ];

  useEffect(() => {
    window.onscroll = function () {
      if (window.screen.width > 500) {
        if (window.location.pathname === "/") {
          myFunction();
        }
      }
    };
  });
  function myFunction() {
    if (document.documentElement.scrollTop > 50) {
      if (window.location.pathname === "/") {
        document.getElementById("header").style.top = "0";
        document.getElementById("mouseToggle").style.opacity = "0";
        return;
      }
      document.getElementById("header").style.top = "0";
    } else {
      if (window.location.pathname === "/") {
        document.getElementById("mouseToggle").style.opacity = "1";
        document.getElementById("header").style.top = "-100px";
        return;
      }
      document.getElementById("header").style.top = "-100px";
    }
  }

  useEffect(() => {
    if (window.screen.width < 500 || window.location.pathname !== "/" ) {
      document.getElementById("header").style.top = "0";
    }
  }, []);
  useEffect(() => {
    if (open) {
      window.document.body.style.overflow = "hidden";
    } else {
      window.document.body.style.overflow = "auto";
    }
  });

  const onChangeHref = (href) => {
    if (window.location.pathname === "/vacancies") {
      router.push("/");
      setTimeout(() => {
        setOpen(false);
        window.location.href = `${href}`;
      }, 0);
    } else {
      setOpen(false);
      window.location.href = `${href}`;
    }
  };

  return (
    <>
      <header
        className={`${style.Header} flex fixed z-[99] -top-[100px] w-full bg-white`}
        id="header"
      >
        <nav className="wrapper flex items-center justify-between w-full ">
          <Link href={"/"}>
            <Image src={logo} alt="" width={265} />
          </Link>
          <ul className="items-center gap-5 text-black text-2xl uppercase hidden lg:flex">
            {nav.map((item, index) => (
              <li key={index} className={"cursor-pointer"}>
                <p onClick={() => onChangeHref(item?.href)}>{item.title}</p>
              </li>
            ))}
            <li className={"cursor-pointer"}>
              <Link href={"/vacancies"}>ВАКАНСИИ</Link>
            </li>
          </ul>
          <div className="hamburger lg:hidden block">
            <Hamburger color={"#2e4683"} toggled={open} toggle={setOpen} />
          </div>
        </nav>
      </header>
      {open && (
        <div className="fixed top-[80px] bg-[#000000a2] w-full h-full z-[100]">
          <div
            className="fixed bg-white rounded-tl-2xl rounded-bl-2xl w-[70%] top-[80px] right-0 h-[90vh] text-center grid place-items-center"
            data-aos="fade-left"
            data-aos-offset="500"
            data-aos-duration="500"
          >
            <ul className="items-center gap-5 text-black text-xl uppercase grid ">
              {nav.map((item, index) => (
                <li key={index} className={"cursor-pointer"}>
                  <Link href={"/"} onClick={() => onChangeHref(item?.href)}>
                    {item.title}
                  </Link>
                </li>
              ))}
              <li className={"cursor-pointer"} onClick={() => setOpen(false)}>
                <Link href={"/vacancies"}>ВАКАНСИИ</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
