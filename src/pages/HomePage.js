import Banner from "../components/layout/General/Banner";
import Header from "../components/layout/General/Header";
import HeroBanner from "../components/layout/HomePage/HeroBanner";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Banner />
      <Header />
      <HeroBanner />
    </div>
  );
};

export default HomePage;
