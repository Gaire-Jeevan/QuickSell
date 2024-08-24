import React from "react";
import NavBar from "../components/NavBar";
import LogIn from "../components/LogIn";
import Footer from "../components/Footer";

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
