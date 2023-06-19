import React, { useEffect, useState } from "react";
import style from "./index.module.scss";
const Loader = () => {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    window.document.body.style.overflow = "hidden";
    setTimeout(() => {
      setLoader(false);
      window.document.body.style.overflow = "auto";
    }, 2400);
  }, []);
  return (
    <>
      {loader && (
        <div
          className={`fixed top-0 left-0 bg-[#2e4683] w-screen h-screen z-[999] ${
            style.loaderAnimation
          } grid place-items-center`}
        >
          <div className={`${style.loader}`}>
            <div className={`${style.inner} ${style.one}`}></div>
            <div className={`${style.inner} ${style.two}`}></div>
            <div className={`${style.inner} ${style.three}`}></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Loader;
