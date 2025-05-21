import { BsRouter } from "react-icons/bs";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="text-[#A9A9B8] bg-gradient-to-r from-[#111827] via-[#1F2937] to-[#0F172A] md:px-16 pt-20">
      <div className="bg-gradient-to-r from-[#1E293B] via-[#334155] to-[#1F2937] p-5 rounded-[20px] ">
        <div className="flex items-center gap-2 justify-center p-10">
          <BsRouter className="text-orange-400 h-15 w-15 md:h-16 md:w-16 lg:h-20 lg:w-20" />
          <h1 className="text-2xl md:text-2xl text-white font-medium leading-tight">
            <span className="text-orange-400">C</span>able Internet <br />
            Pro<span className="text-orange-400">viders.</span>
          </h1>
        </div>
        <div className="text-center">
          <h1>
            All calls with The Internet Providers are monitored and recorded for
            quality assurance and training purposes.
          </h1>
          <p className="md:p-3 py-5">
            Price is per service. Each service provider and availability may
            vary by location. You may receive separate bills for each
            additionally added service. Pricing for services may not be
            available in your area. Pricing is subject to change by provider and
            may require multiple year commitment with early termination fees.
            Upfront fees may apply based on credit qualification. Ask your agent
            for details.
          </p>
          <p className="md:p-3 py-5">
            $25 Gift Card: Courtesy of The Internet Providers with activation.
            Must be requested through your The Internet Providers representative
            using offer code GIFT25 at the time of purchase. You will receive a
            claim voucher within 3-4 weeks, and the voucher must be returned
            within 60 days. Your gift card will arrive in approximately 6-8
            weeks. If The Internet Providers is unable to install your service,
            we will remove the charges, which should reflect on your statement
            within 10-14 business days.
          </p>
          <p>Phone: (888) 206-8773</p>
          <div className="text-center text-gray-400 md:p-3 py-5">
            Copyright © {currentYear}{" "}
            <span className="text-orange-400 font-medium">
              The Internet Providers
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
