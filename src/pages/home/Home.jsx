import Slider from '../../components/slider/Slider.jsx'
import FeaturedProducts from '../../components/featured/FeaturedProducts.jsx'
import HowItWorks from '../../components/howItWorks/HowItWorks.jsx'
import PopUp from '../../components/pop-up/PopUp.jsx'

const Home = () => {
  return (
    <div>
      <Slider />
      <FeaturedProducts />
      <HowItWorks />
      <PopUp></PopUp>
    </div>
  )
}

export default Home