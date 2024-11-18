import AboutUs from "../Components/AboutUs";
import Banner from "../Components/Banner";
import HowItWorks from "../Components/HowItWorks";
import SuccessStories from "../Components/SuccessStories";
import UpcomingEvents from "../Components/UpcomingEvents";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="max-w-[1200px] mx-auto">
        <AboutUs />
        <HowItWorks />
        <SuccessStories />
        <UpcomingEvents />
      </div>
    </div>
  );
};

export default Home;
