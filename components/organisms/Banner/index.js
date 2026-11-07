import Button from "@/components/atoms/Button";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="h-[80vh] bg-linear-to-br from-white via-white to-[#c0c0c0] dark:from-ink dark:via-ink dark:to-neutral-d-grey">
      <div className="container h-full py-10 px-4 flex flex-row items-end justify-center">
        <div className="text-left lg:w-1/2 w-full h-full flex items-start justify-center flex-col">
          <h1 className="text-5xl font-bold text-primary lg:mb-10 mb-6">
            Turning your ideas into reality
          </h1>
          <p className="lg:text-xl text-lg text-neutral-grey dark:text-white lg:mb-12 mb-8">
            We are a team of developers who are passionate about creating
            beautiful and functional websites.
          </p>
          <div>
            <Button className="lg:px-10 cursor-pointer mx-0 px-6 lg:py-2 py-1 text-xl">
              Get Started
            </Button>
          </div>
        </div>
        <div className="flex items-end justify-center lg:w-1/2 w-full">
          <Image
            src="/assets/images/banner-image.png"
            alt="Banner"
            width={545}
            height={567}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
