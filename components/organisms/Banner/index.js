import AnimatedGridPattern from "@/components/molecules/AnimatedGridPattern";

const Banner = () => {
  return (
    // <div className="h-[80vh] bg-linear-to-br from-white via-white to-[#c0c0c0] dark:from-ink dark:via-ink dark:to-neutral-d-grey">
    <div className="relative container h-[calc(100vh-60px)] overflow-hidden py-10">
      <div className="absolute inset-0 z-0 h-full w-full [mask-image:radial-gradient(ellipse_farthest-corner_at_center,black_28%,transparent_76%)] [-webkit-mask-image:radial-gradient(ellipse_farthest-corner_at_center,black_28%,transparent_76%)]">
        <AnimatedGridPattern maxOpacity={0.2} />
      </div>
      <div className="relative z-10 grid place-items-center w-full h-full">
        <div className="text-center">
          <h1 className="text-primary text-6xl font-bold lg:mb-10 mb-6">
            We Build Beautiful Websites
          </h1>
          <p className="text-lg text-gray-500 lg:mb-10 mb-6">
            We are a team of web developers who are passionate about creating
            beautiful websites.
          </p>
          <button className="bg-primary text-white px-4 py-2 rounded-md">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
