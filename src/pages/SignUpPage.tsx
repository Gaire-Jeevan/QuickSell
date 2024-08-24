import React from "react";
import SignUp from "../components/SignUp";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const SignUpPage = () => {
  return (
    <>
      <NavBar  showFullNav={false}/>
      <SignUp />
      <Footer />
    </>
  );
};

export default SignUpPage;
