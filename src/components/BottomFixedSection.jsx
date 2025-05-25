import { BiPhoneCall } from 'react-icons/bi';

const BottomFixedSection = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#FF8904] z-50 shadow-lg">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between px-4 md:px-20 py-5 text-white text-center gap-2">
<div className="flex items-center animate-bounceX">
  {/* Phone call icon - left side rounded */}
  <a
    href="tel:8882250811"
    className="flex items-center justify-center bg-[#FF8904] px-4 py-2 border-3 border-white rounded-l-full"
  >
    <BiPhoneCall className="text-xl text-white" />
  </a>

  {/* Phone number - right side rounded */}
  <a
    href="tel:8882250811"
    className="bg-white text-black px-4 py-2 border-t border-b border-white rounded-r-full font-semibold"
  >
    (888) 225-0811
  </a>
</div>


        <div className="text-md md:text-base">
          | Custom bundles & savings await!
        </div>
      </div>
    </div>
  );
};

export default BottomFixedSection;
