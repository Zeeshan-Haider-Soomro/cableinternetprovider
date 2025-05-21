import React from "react";
import { CgScreenWide } from "react-icons/cg";
import {
  FaHouseLock,
  FaHouseSignal,
  FaMobileScreenButton,
} from "react-icons/fa6";
import { AppImages } from "../constant/AppImages";

const HeroSection = () => {
    const {Heroimg} = AppImages
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 md:p-16 bg-[#121A2C]"       style={{
        background:
          "radial-gradient(circle at center right, #3C2B2D, #1B1A24, #0F1320)",
      }}>
      {/* Text Section */}
      <div className="w-full md:w-1/2 space-y-6">
        <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight">
          Your One-Stop Solution for TV &{" "}
          <span className="text-[#FF8904]">Internet</span> Services
        </h1>
        <p className="text-gray-400 text-base md:text-lg">
          Discover unbeatable offers on TV and Internet services, providing fast,
          reliable, and affordable connections.
        </p>

        <div className="flex gap-6 text-[#FF8904] text-3xl">
          <CgScreenWide />
          <FaMobileScreenButton />
          <FaHouseSignal />
          <FaHouseLock />
        </div>

        <p className="text-gray-500 text-sm">
          Pricing is per service and varies by provider and location. Separate
          bills may apply for additional services. Availability and offers may
          differ in your area. Prices are subject to provider changes and may
          require a multi-year commitment with possible early termination fees.
          Upfront costs may apply depending on credit approval. Contact your
          agent for details.
        </p>
      </div>

      {/* Image Section */}
      <div
        className="w-full md:w-1/2 mt-10 md:mt-0 p-6 rounded-lg"
        // style={{
        //   background: "linear-gradient(to bottom right, #2A2F37, #373230, #141B2C)",
        // }}
      >
        <img
          src= {Heroimg}
          alt="Happy User"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default HeroSection;
