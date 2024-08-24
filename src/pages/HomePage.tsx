import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import FeatueProduct from '../components/FeatueProduct'
import Guide from '../components/Guide'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div>
      <NavBar  showFullNav={true}/>
      <HeroSection />
      <FeatueProduct />
      <Guide />
      <Footer />
    </div>
  )
}

export default HomePage