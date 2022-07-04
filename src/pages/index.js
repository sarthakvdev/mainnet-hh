// components
import Hero from "../components/Hero";
import Speakers from "../components/Speakers";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Head from "next/head";
import Header from "../components/Header";
import Schedule from "../components/Schedule";
import Sponsors from "../components/Sponsors";

const Landing = () => (
  <div className="bg-white overflow-x-hidden font-inter" style={{ overflowX: "hidden" }}>
    <Head>
      <title>buildspace India</title>
    </Head>

    <div
      style={{
        backgroundImage: 'url("/section1/background_gradient.svg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Header />
      <Hero />
    </div>
    <div>
      {/* <div>
        <Speakers />
        <Schedule />
        <Sponsors />
      </div> */}
      {/* <Faq /> */}
    </div>
    <Footer />
  </div>
);

export default Landing;
