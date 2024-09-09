import ContactUs from "./ContactUs";
import Footer from "../../components/Footer";
import FrequentlyAskedQuestions from "./FrequentlyAskedQuestions";
import NavBar from "../../components/NavBar";
import OurLocation from "./OurLocation";

const ContactUsPage = () => {
  return (
    <>
      <NavBar showFullNav={false} />
      <div className="m-3">
        <ContactUs />
        <FrequentlyAskedQuestions />
        <OurLocation />
      </div>
      <Footer />
    </>
  );
};

export default ContactUsPage;
