import Banner from "../components/layout/General/Banner";
import Header from "../components/layout/General/Header";
import HeroBanner from "../components/layout/HomePage/HeroBanner";
import Introduction from "../components/layout/HomePage/Introduction";
import SkillGallery from "../components/layout/HomePage/SkillGallery";
import Faq from "../components/layout/HomePage/Faq";
import Footer from "../components/layout/General/Footer";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Banner />
      <Header />
      <HeroBanner />
      <Introduction />
      <SkillGallery />
      <Faq />
      <Footer />
    </div>
  );
};

export default HomePage;
