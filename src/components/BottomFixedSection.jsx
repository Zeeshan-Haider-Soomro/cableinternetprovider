import { BiPhoneCall } from 'react-icons/bi';

const BottomFixedSection = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#FF8904] z-50 shadow-lg">
      <div className="flex items-center justify-between px-4 md:px-20 py-2 text-white flex-wrap">
        <div className="flex items-center gap-2">
          {/* Phone call link on icon */}
          <a
            href="tel:(888) 225-0811"
            target="_blank"
            // rel="noopener noreferrer"
            className="text-white bg-transparent border border-white p-2 rounded-full"
          >
            <BiPhoneCall className="text-xl cursor-pointer" />
          </a>
          <div className="bg-white text-black px-4 py-2 rounded-md font-semibold">
            (888) 225-0811
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
