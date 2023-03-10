import Section5Img from "../images/section5.svg";
import DownloadIcon from "../images/downloadicon.svg";
const Section5 = () => {
  return (
    <>
      <div className=" bg-[#f6f6f6] py-20 lg:py-28">
        <div className="container">
          <div className="  text-center text-black md:px-16 lg:px-32">
            <h2 className="text-2xl  md:text-3xl lg:text-4xl xl:text-5xl uppercase pb-5">
              RELIABLE TECH FOR STAYING CLOSE
            </h2>
            <p>
              Low-latency voice and video feels like you’re in the same room.
              Wave hello over video, watch friends stream their <br /> games, or
              gather up and have a drawing session with screen share.
            </p>
          </div>
          <img src={Section5Img} alt="" className="w-full " />
          <div className="text-center text-black bg-[url('/src/images/star.svg')] bg-no-repeat bg-center ">
            <h4 className=" text-3xl font-bold font-roboto pt-10  md:pt-24 ">
              Ready to start your journey?
            </h4>
            <button className="btn btn-blue mt-8 flex items-center mx-auto gap-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
              Download for Mac
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section5;
