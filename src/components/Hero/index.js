import Link from "next/link";
import { FaLock } from "react-icons/fa";
import Timer from "./Timer.js";
import links from "../../lib/links";

function Hero() {
  const text = "Things are brewing up! ☕️";

  return (
    <div className="bg-curvature relative">
      <img
        src="/section1/star_group_blur.svg"
        className="absolute right-10 z-0  w-[450px] xl:w-[800px]"
        alt="buildspace"
      />
      <div className="relative z-1 container mx-auto flex flex-col md:flex-row px-6 justify-center md:space-x-6 lg:space-x-28 md:items-center pt-8 md:pb-32 lg:pb-28 md:px-32 lg:px-32">
        <div className="flex flex-col md:mt-12 ">
          <h1 className="font-heading mb-4 text-gray-900 font-bold md:text-left text-[40px] md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-5xl">
            Take part in Hackerhouse
          </h1>
          <h1 className="font-heading text-center m-auto mb-4 text-gray-900 font-bold md:text-left text-[40px] md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-5xl">
            to build cool shits!
          </h1>

          <label className="flex justify-between gap-4 relative ">
            <input
              type="email"
              placeholder="Enter your email to get updates"
              className="w-full py-4 rounded-md"
            />
            <button className="bg-black text-white w-32 py-2 rounded-lg absolute right-2 top-2">
              Enter Email
            </button>
          </label>
        </div>
      </div>
      <div className="flex justify-center items-center bg-black w-full py-10 md:py-20 lg:py-28 text-left px-10 md:px-20">
        <Timer />
      </div>
    </div>
  );
}

export default Hero;
