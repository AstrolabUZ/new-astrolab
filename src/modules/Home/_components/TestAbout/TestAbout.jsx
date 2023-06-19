import Image from "next/image";
import React from "react";
import astronaut from "assets/images/astronaut.png"
const TestAbout = () => {
  return (
    <div className="wrapper relative">
      <div id="astronaut">
        <Image src={astronaut} alt="" width="350" />
      </div>

      {/* <div id="astronaut2">
        <img
          src="https://images.vexels.com/media/users/3/152641/isolated/preview/2b3d63661f0d7fe62c36168604985f26-space-cosmonaut-cartoon-by-vexels.png"
          alt=""
          width="250"
        />
      </div> */}
    </div>
  );
};

export default TestAbout;
