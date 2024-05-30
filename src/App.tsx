import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import HeroBanner from "./sections/HeroBanner";
import Intro from "./sections/Intro";
import ProcessOverview from "./sections/ProcessOverview";
import Suppliers from "./sections/Suppliers";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <HeroBanner />
      <Intro />
      <Suppliers />
      <ProcessOverview />
      <Footer />
    </div>
  );
};

export default App;
