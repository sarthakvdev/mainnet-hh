import Link from "next/link";
import links from "../lib/links";

export default function Sponsors() {
  return (
    <div className="bg-black md:px-6 relative">
      <img
        src="/section2/blur_element_3.svg"
        className="absolute right-60 top-12 z-1 w-60"
        alt="buildspace"
      />
      <div className="container mx-auto relative py-24 rounded px-8 xl:px-16 lg:max-w-[900px] xl:max-w-[1200px]">
        <div className="flex flex-col justify-between items-start">
          <h2 className="font-heading text-gray-100 text-4xl md:text-5xl text-left">
            powered by
          </h2>
        </div>
        <div className="flex space-x-10 text-2xl md:text-4xl mt-12 text-white font-bold">
          <Link href={links.polygonTechnology} passHref={true}>
            <a target="_blank">
              <div
                className="flex flex-col items-center"
                style={{ textShadow: "2px -2px 30px #8F00FF" }}
              >
                <img
                  className="w-10 md:w-20 mb-2"
                  src="/polygon.png"
                  alt="polygon"
                />
                polygon
              </div>
            </a>
          </Link>
          <Link href={links.graphProtocol} passHref={true}>
            <a target="_blank">
              <div
                className="flex flex-col items-center"
                style={{ textShadow: "2px -2px 30px #8F00FF" }}
              >
                <img
                  className="w-10 md:w-20 mb-2"
                  src="/the-graph.png"
                  alt="thegraph"
                />
                the graph
              </div>
            </a>
          </Link>
          <Link href={links.filecoin} passHref={true}>
            <a target="_blank">
              <div
                className="flex flex-col items-center"
                style={{ textShadow: "2px -2px 30px #8F00FF" }}
              >
                <img
                  className="w-10 md:w-20 mb-2"
                  src="/filecoin.svg"
                  alt="filecoin"
                />
                filecoin
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
