import About from "modules/About/About";
import { SEO } from "components/SEO";

const AboutPage = () => {
  return (
    <>
      <SEO title={"О нас"} />
      <About />
    </>
  );
};

export default AboutPage;
