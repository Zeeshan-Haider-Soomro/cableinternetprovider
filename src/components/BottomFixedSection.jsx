import { BiPhoneCall } from 'react-icons/bi';

const BottomFixedSection = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#FF8904] z-50 shadow-lg">
      <div className="flex items-center justify-between px-4 md:px-20 py-2 text-white flex-wrap">
        <div className="flex items-center gap-2">
          {/* WhatsApp link on icon */}
          <a
            href="https://wa.me/923202727926?text=Hi%2C%20I%E2%80%99m%20interested%20in%20your%20bundles.%20Please%20share%20more%20details."
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-transparent border border-white p-2 rounded-full"
          >
            <BiPhoneCall className="text-xl cursor-pointer" />
          </a>
          <div className="bg-white text-black px-4 py-2 rounded-md font-semibold">
            (888) 505-6009
          </div>
        </div>
        <div className="mt-2 md:mt-0 text-sm md:text-base">
          | Custom bundles & savings await!
        </div>
      </div>
    </div>
  );
};

export default BottomFixedSection;
