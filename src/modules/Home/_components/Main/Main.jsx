import mouse from "assets/icons/mouse.svg";
import Image from "next/image";

const Main = () => {
  return (
    <section className="w-full relative hidden lg:block">
      <video
        src={"/video/bg-video.mp4"}
        loop
        autoPlay
        muted
        className="w-full h-screen object-cover"
      />
      <Image
        src={mouse}
        alt="mouse"
        id="mouseToggle"
        priority={true}
        className="absolute bottom-2 z-20 left-[48.5%] -translate-x-1/2 mouse duration-700"
      />
    </section>
  );
};

export default Main;
