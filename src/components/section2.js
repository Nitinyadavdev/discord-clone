import Section2Img from "../images/section2.svg";
const Section2 = () => {
  return (
    <>
      <div>
        <section className="bg-white py-20 lg:py-28">
          <div className=" container flex flex-col md:flex-row items-center justify-center">
            <img src={Section2Img} alt="" className=" md:w-6/12 lg:w-7/12" />
            <div className="text-black md:w-5/12 lg:w-4/12">
              <h3>Create an invite-only place where you belong</h3>
              <p>
                Discord servers are organized into topic-based channels where
                you can collaborate, share, and just talk about your day without
                clogging up a group chat.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Section2;
