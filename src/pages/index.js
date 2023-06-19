import { SEO } from "components/SEO";
import { Home } from "modules/Home";

const MyHome = () => {
  return (
    <>
      <SEO title={"Главная"} />
      <Home />
    </>
  );
};
export default MyHome;
