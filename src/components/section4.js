import Section4Img from "../images/section4.svg";

const Section4 = () => {
  return (
    <>
      <div>
        <section className="bg-white py-20 lg:py-28">
          <div className=" container flex flex-col md:flex-row items-center justify-center">
            <img src={Section4Img} alt="" className=" md:w-6/12 lg:w-7/12" />
            <div className="text-black md:w-5/12 lg:w-4/12">
              <h3>From few to a fandom</h3>
              <p>
                Grab a seat in a voice channel when you’re free. Friends in your
                server can see you’re around and instantly pop in to talk
                without having to call.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Section4;
