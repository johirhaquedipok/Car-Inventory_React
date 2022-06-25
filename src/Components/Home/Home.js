import Inventory from "../Inventory/Inventory";
import Banner from "./Banner/Banner";
import OurServices from "./Our Services/OurServices";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Banner />
      <OurServices />
      <Inventory />
      <Testimonials />
    </>
  );
};

export default Home;
