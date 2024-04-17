import { Helmet } from "react-helmet-async";
import AboutSection from "../../components/AboutSection/AboutSection";
import Banner from "../../components/Banner/Banner";
import Estates from "../../components/Estates/Estates";


const Home = () => {
  return (
    <div>
      <Helmet>
        <title>EverGreen | Home</title>
      </Helmet>
      <Banner/>
      <Estates/>
      <AboutSection/>
    </div>
  );
};

export default Home;