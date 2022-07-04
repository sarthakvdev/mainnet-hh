import Link from "next/link";
import { Popover } from "@headlessui/react";
import links from "../lib/links";
import { Button } from "@chakra-ui/react";
import { FaLock } from "react-icons/fa";

const Header = () => (
  <Popover className="relative">
    <div className="max-w-[1400px] mx-auto px-4">
      <div className="flex justify-between items-center md:justify-between sm:px-6 md:space-x-10 py-6">
        <img
          src="/Logo.svg"
          alt="buildspace india"
          className="w-36 md:w-auto"
        />
        {/* Desktop Navigation */}
        <div className="hidden md:inline-flex justify-between md:items-center">
          <div className="flex items-center text-sm lg:text-lg font-semibold space-x-12">
            <Link href={links.twitter}>
              <a target="_blank">
                <div className="text-gray-900 tracking-wide cursor-pointer">
                  twitter.
                </div>
              </a>
            </Link>
            <Link href={links.discord}>
              <a target="_blank">
                <div className="text-gray-900 tracking-wide cursor-pointer">
                  discord.
                </div>
              </a>
            </Link>
            {/* <Link href={links.apply} passHref={true}>
              <button
                className="flex items-center justify-center transition-all shadow-lg active:scale-100 duration-150 hover:scale-[1.02] bg-black hover:bg-gray-800 text-white ease-in-out py-3 px-8 lg:py-4 lg:px-12 rounded-xl"
                disabled
              >
                <div className="mr-2">
                  <FaLock />
                </div>
                coming soon
              </button>
            </Link> */}
          </div>
        </div>
        {/* Mobile Navigation */}
      </div>
    </div>
  </Popover>
);

export default Header;
