import { Helmet } from "react-helmet-async";
import AboutSection from "../../components/AboutSection/AboutSection";
import Banner from "../../components/Banner/Banner";
import Estates from "../../components/Estates/Estates";
import Clients from "../../components/Clients/Clients";


const Home = () => {
  return (
    <div>
      <Helmet>
        <title>EverGreen | Home</title>
      </Helmet>
      <Banner/>
      <Estates/>
      <Clients/>
      <AboutSection/>
      
    </div>
  );
};

export default Home;