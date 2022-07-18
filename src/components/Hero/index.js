import Image from "next/image";
import Timer from "./Timer.js";
import { ArrowRightIcon } from "@heroicons/react/outline";

function Hero() {
  return (
    <div className="bg-curvature relative">
      <div className="relative z-1 container mx-auto py-24 md:py-32">
        <div className="flex flex-col items-center">
          <div className="font-heading text-center flex flex-col space-y-3 md:space-y-5 text-gray-900 font-bold text-4xl md:text-5xl lg:text-6xl">
            <h1>Take part in Hackerhouse</h1>
            <h1>to build cool shits!</h1>
          </div>
          <form className="flex gap-4 relative w-full px-4 max-w-lg md:max-w-2xl my-12">
            <input
              type="email"
              placeholder="Enter your email to get updates"
              className="w-full py-2 md:py-4 rounded-r-full md:rounded-lg"
            />
            <button type="submit" className="absolute hidden md:block right-6 top-2 bg-black active:bg-gray-700 text-white w-32 py-2 rounded-md">
              Submit Email
            </button>
            <button type="sumit" className=" absolute md:hidden right-5 top-1 md:right-2 md:top-2 text-white bg-black p-2 rounded-full ">
              <ArrowRightIcon className="w-4" />
            </button>
          </form>
        </div>
      </div>
      <div className="flex justify-center items-center bg-black w-full py-10 md:py-20 lg:py-28 text-left px-10 md:px-20">
        <Timer />
      </div>
      <div className="absolute top-12 md:top-20 left-5 sm:left-10 md:left-16 rotate-[-15deg]">
        <p className="text-4xl md:text-6xl">💻</p>
      </div>
      <div className="absolute bottom-48 sm:bottom-40 md:bottom-56 lg:bottom-[350px] right-16 md:right-28 rotate-[80deg]">
        <p className="text-5xl md:text-7xl">🍾</p>
      </div>
      <div className="absolute bottom-40 sm:bottom-24 md:bottom-40 lg:bottom-60 left-16 sm:left-52 lg:left-72 rotate-[23deg]">
        <p className="text-4xl md:text-6xl">🤓</p>
      </div>
    </div>
  );
}

export default Hero;
