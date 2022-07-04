import { useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import SpeakersDesktop from "./SpeakersDesktop"
import SpeakersMobile from "./SpeakersMobile";

const Speakers = () => {
  const speakerTitle = "meet our speakers and devs.";
  const [scrollStart, setScrollStart] = useState(false);

  const moving = (dir) => {
    setScrollStart(true);
    const el = document.getElementsByClassName("speakers");
    if (el[0]) {
      if (dir === "left") {
        el[0].scrollLeft -= 300;
      } else if (dir === "right") {
        el[0].scrollLeft += 300;
      }
    }
  };

  return (
    <div className="relative">
      <img
        src="/section2/blur_element.svg"
        className="absolute -top-10 right-[15%] z-1"
        alt="buildspace"
      />
      <div
        style={{
          backgroundImage: 'url("/section2/background.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative select-none z-2 pt-20 md:pt-32 lg:pt-40 mx-auto px-6 md:px-10 bg-curvature flex flex-col items-center justify-center">
          <h1 className="text-left text-3xl md:text-4xl xl:text-5xl xl:leading-[60px] font-extrabold  text-black tracking-wider font-heading ">
            {speakerTitle}
          </h1>
        </div>
        <div className="mx-auto relative">
          <div className="flex sm:hidden h-full items-center z-10 absolute right-5 md:right-10">
            <div
              className="bg-white opacity-80 hover:opacity-100 cursor-pointer p-3 rounded-full"
              onClick={() => moving("right")}
            >
              <FaChevronRight />
            </div>
          </div>
          <div className="flex sm:hidden h-full items-center z-10 absolute left-5 md:left-10">
            <div
              className={`bg-white opacity-80 hover:opacity-100 cursor-pointer p-3 rounded-full ${
                scrollStart ? "block" : "hidden"
              }`}
              onClick={() => moving("left")}
            >
              <FaChevronLeft />
            </div>
          </div>

          <SpeakersMobile />
          <SpeakersDesktop />
        </div>
      </div>
    </div>
  );
};

export default Speakers;
