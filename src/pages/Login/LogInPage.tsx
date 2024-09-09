import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import LogIn from "./LogIn";
const LogInPage = () => {
  return (
    <>
      <NavBar showFullNav={false}/>
      <LogIn />
      <Footer />
    </>
  );
};

export default LogInPage;
