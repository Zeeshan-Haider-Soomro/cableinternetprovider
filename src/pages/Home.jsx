import Banner from "../components/Banner";
import { FaWifi } from "react-icons/fa";
import HeroSection from "../components/HeroSection";
import ImageCarousel from "../components/ImageCarousel";
import { AppImages } from "../constant/AppImages";


const Home = () => {
    const {High_Speed_Internet} = AppImages
  return (
    <div>
      {/* hero section */}
      <section className=""><HeroSection/></section>
      {/* Slider Section */}
      <section className=""><ImageCarousel/></section>
      {/* heading Dyanmic component section */}
      <section className="relative py-10 md:p-10 bg-[#121a2c]">
<div
  className=" text-center p-10"
  style={{
    background: 'radial-gradient(circle at center left, #282F38, #3B332F, #0F1320)',
  }}
>
  {/* Top Blur Overlay */}
  <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[#121A2C] to-transparent backdrop-blur-md z-0 pointer-events-none" />
  
  {/* Bottom Blur Overlay */}
  <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#121A2C] to-transparent backdrop-blur-md z-0 pointer-events-none" />
  
  {/* Left Blur Overlay */}
  <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-[#121A2C] to-transparent backdrop-blur-md z-0 pointer-events-none" />
  
  {/* Right Blur Overlay */}
  <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-[#121A2C] to-transparent backdrop-blur-md z-0 pointer-events-none" />

  <h1 className="text-gray-400 text-sm pb-5 font-medium">
    Don’t Forget!
  </h1>
  <h1 className="text-white text-2xl md:text-3xl font-bold pb-3">
    Bundle Wireless with the
  </h1>
  <p className="text-white text-2xl md:text-3xl font-bold">
    services below as low as
    <span className="text-[#FF8904] align-super text-base"> $</span>
    <span className="text-[#FF8904] text-4xl font-bold">29</span>
    <sup className="text-sm text-[#FF8904] font-medium">99*</sup>
  </p>
</div>
      </section>
      {/* Dyanmic component section */}
      <section className="md:p-10 bg-[#121a2c]">
                <Banner
          title="High-Speed Internet"
          description="From high-speed fiber to reliable satellite, we offer a range of options and speeds to meet all your internet needs."
          imageUrl= {High_Speed_Internet}
          icon={<FaWifi />}
          reverse={false}
        />
        <Banner
          title="High-Speed Internet"
          description="From high-speed fiber to reliable satellite, we offer a range of options and speeds to meet all your internet needs."
          imageUrl= {High_Speed_Internet}
          icon={<FaWifi />}
          reverse={true}
        />
      </section>
   {/* heading Dyanmic component section */}
      <section className="relative py-10 md:p-10 bg-[#121a2c]">
<div
  className=" text-center p-10"
  style={{
    background: 'radial-gradient(circle at center left, #282F38, #3B332F, #0F1320)',
  }}
>
  {/* Top Blur Overlay */}
  <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[#121A2C] to-transparent backdrop-blur-md z-0 pointer-events-none" />
  
  {/* Bottom Blur Overlay */}
  <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#121A2C] to-transparent backdrop-blur-md z-0 pointer-events-none" />
  
  {/* Left Blur Overlay */}
  <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-[#121A2C] to-transparent backdrop-blur-md z-0 pointer-events-none" />
  
  {/* Right Blur Overlay */}
  <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-[#121A2C] to-transparent backdrop-blur-md z-0 pointer-events-none" />

  <h1 className="text-gray-400 text-sm pb-5 font-medium">
    Hurry! Call now & bundle today!
  </h1>
  <h1 className="text-white text-2xl md:text-3xl font-bold pb-3">
    Your Gift Card offer won't last!
  </h1>
</div>
      </section>
      <section className="md:p-10 bg-[#121a2c]">
              <Banner
          title="High-Speed Internet"
          description="From high-speed fiber to reliable satellite, we offer a range of options and speeds to meet all your internet needs."
          imageUrl="public\shutterstock_1085821205.jpg"
          icon={<FaWifi />}
          reverse={false}
        />
      </section>
    </div>
  );
};

export default Home;
