import { Button } from "@chakra-ui/react";
import Link from "next/link";
import Timeline from "./Timeline";
import links from "../../lib/links";
import { FaLock } from "react-icons/fa";

export default function Schedule() {
  return (
    <div className="md:flex md:flex-row mb-20 md:justify-between w-full md:max-w-[780px] lg:max-w-[900px] xl:max-w-[1000px] mx-auto px-6 md:px-12 mt-16 md:mt-32 relative">
      <div className="flex flex-col lg:max-w-2xl top-0">
        <img
          src="/section2/blur_element_2.svg"
          className="absolute -top-32 -left-28 z-1 md:w-[600px]"
          alt="buildspace"
        />
        <div className="relative z-2 text-black font-heading font-bold text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl">
          here&apos;s the <br /> schedule
        </div>
        <div className="text-[#4F4F4F] md:text-base xl:text-lg font-medium my-6 lg:my-6 md:my-6 md:max-w-[300px] xl:max-w-[400px]">
          Take a look at all the awesome thing we have in store for you :)
        </div>
        <Link href={links.apply} passHref={true}>
          <a>
            <Button
              __css={{}}
              disabled
              leftIcon={<FaLock />}
              className="relative z-2 md:mt-6 lg:mt-6 flex text-lg px-12 py-4 hover:-translate-y-1 shadow-md transition-all hover:scale-105 bg-black text-white rounded-xl justify-center items-center font-semibold hover:bg-gray-900"
            >
              coming soon to pune
            </Button>
          </a>
        </Link>
      </div>
      <div>
        <Timeline />
      </div>
    </div>
  );
}
