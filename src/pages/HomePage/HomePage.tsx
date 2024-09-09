import NavBar from "../../components/NavBar";
import HeroSection from "./HeroSection";
import Guide from "./Guide";
import Footer from "../../components/Footer";
import FeatueProduct from "./FeatueProduct";

const HomePage = () => {
  return (
    <div>
      <NavBar showFullNav={true} />
      <HeroSection />
      <FeatueProduct />
      <Guide />
      <Footer />
    </div>
  );
};

export default HomePage;
