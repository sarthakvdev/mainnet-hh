import Link from "next/link";
import { FaLock } from "react-icons/fa";
import Timer from "./Timer.js";
import links from "../../lib/links";

function Hero() {
  const text = "Things are brewing up! ☕️";

  return (
    <div className="bg-curvature relative">
      {/* <img
        src="/section1/star_group_blur.svg"
        className="absolute right-10 z-0  w-[450px] xl:w-[800px]"
        alt="buildspace"
      /> */}
      <div className="relative border border-red-500 z-1 container mx-auto flex flex-col justify-center md:flex-row px-6 md:space-x-6 lg:space-x-28 md:items-center pt-8 md:pb-32 lg:pb-28 md:px-32 lg:px-32">
        <div className="md:mt-12 border border-red-500 text-center">
          <div className="border border-red-500">
            <h1 className="font-heading mb-4 text-gray-900 font-bold text-[40px] md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-5xl">
              Take part in Hackerhouse
            </h1>
            <h1 className="font-heading m-auto mb-4 text-gray-900 font-bold text-[40px] md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-5xl">
              to build cool shits!
            </h1>
          </div>
          <div className="flex gap-4 relative max-w-2xl border border-red-500">
            <input
              type="email"
              placeholder="Enter your email to get updates"
              className="w-full py-4 rounded-md"
            />
            <button className="absolute right-2 top-2 bg-black text-white w-32 py-2 rounded-lg">
              Enter Email
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center bg-black w-full py-10 md:py-20 lg:py-28 text-left px-10 md:px-20">
        <Timer />
      </div>
    </div>
  );
}

export default Hero;
