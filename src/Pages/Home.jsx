import AboutUs from "../Components/AboutUs";
import Banner from "../Components/Banner";
import HowItWorks from "../Components/HowItWorks";
import SuccessStories from "../Components/SuccessStories";
import UpcomingEvents from "../Components/UpcomingEvents";

const Home = () => {
  return (
    <div>
      <Banner />
      <AboutUs />
      <HowItWorks />
      <SuccessStories/>
      <UpcomingEvents/>
    </div>
  );
};

export default Home;
