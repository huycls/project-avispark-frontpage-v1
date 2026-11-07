import About from "@/components/organisms/About";
import Banner from "@/components/organisms/Banner";
import Footer from "@/components/organisms/Footer";
import Navbar from "@/components/organisms/Navbar";
import Services from "@/components/organisms/Services";
import Work from "@/components/organisms/Work";

const Homepage = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <Navbar />
      <main className="flex-1">
        <Banner />
        <Services />
        <Work />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;
