import About from "@/components/organisms/About";
import Banner from "@/components/organisms/Banner";
import Footer from "@/components/organisms/Footer";
import Navbar from "@/components/organisms/Navbar";
import Services from "@/components/organisms/Services";
import Work from "@/components/organisms/Work";

const Homepage = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      {/* <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[calc(100vh-60px)]">
        <Aurora
          colorStops={["#5227FF", "#7cff67", "#5227FF"]}
          amplitude={1}
          blend={0.5}
          height={0.45}
          speed={1}
          glow={0.6}
          scale={1}
          brightness={1}
          layers={1}
          direction="top"
          opacity={1}
          mouseInteraction
          intro
          lightMode={false}
        />
      </div> */}
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
