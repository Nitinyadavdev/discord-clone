// import BackgroundImage1 from "../src/images/hero/1.svg";
import BackgroundImage2 from "../images/hero/2.svg";
import BackgroundImage3 from "../images/hero/3.svg";

const HeroSection = () => {
  return (
    <>
      <div className="overflow-x-hidden">
        <section className=" relative bg-primary bg-[url('/src/images/hero/1.svg')] bg-no-repeat bg-center   text-white">
          <img
            src={BackgroundImage2}
            alt=""
            className="absolute bottom-0 xl:-left-60 lg:w-[65%] xl:w-[40%] block md:hidden xl:block"
          />
          <img
            src={BackgroundImage3}
            alt=""
            className="absolute bottom-0 md:right-0  xl:-right-56 md:w-[60%] xl:w-[40%]  hidden md:block"
          />
          <div className="flex flex-col gap-8 items-start xl:items-center  xl:justify-center  container h-[75vh] xl:h-[60vh]">
            <h1 className="text-3xl lg:4xl xl:text-6xl  tracking-widest">
              IMAGINE A PLACE...
            </h1>
            <p className="text-sm lg:text-lg xl:text-xl tracking-wider leading-normal">
              ...where you can belong to a school club, a gaming group, or a
              worldwide art community. <br /> Where just you and a handful of
              friends can spend time together. A place that makes it easy <br />{" "}
              to talk every day and hang out more often.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-5 ">
              <button className="btn btn-white flex gap-x-1 items-center">
                <ion-icon
                  name="download-outline"
                  className="w-6 h-6 bg-black"
                ></ion-icon>
                Download for Windows
              </button>
              <button className="btn btn-black ">
                Open Discord in your browser
              </button>
            </div>
          </div>
        </section>
        <div className="bg-BackgroundImage1"></div>
      </div>
    </>
  );
};

export default HeroSection;
