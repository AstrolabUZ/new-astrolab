import { Loader } from "../UI/Loader";
import { Footer } from "./Footer";
import { Header } from "./Header";


const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <Loader />
    </>
  );
};

export default Layout;
