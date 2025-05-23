import { BsRouter } from "react-icons/bs";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-[#0F172A] via-[#1F2937] to-[#111827] px-4 md:px-10 py-4">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        {/* Left Side: Logo & Text */}
        <div className="flex items-center gap-2 text-center md:text-left">
          <BsRouter className="text-[#fb923c] h-15 w-15 md:h-16 md:w-16 lg:h-20 lg:w-20" />
          <h1 className="text-2xl md:text-2xl font-medium leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white from-[0%] via-white via-[45%] to-orange-400 to-[70%]">
            Internet Tv & <br />
            Fiber Deals
          </h1>
        </div>

        {/* Right Side: Slogan */}
        <div className="text-white text-center text-lg md:text-2xl font-medium">
          Best TV & Internet Deals{" "}
          <span className="text-orange-400">Today!</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
