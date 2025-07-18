const Banner = ({ 
  titleStart, 
  titleMiddle, 
  titleEnd,
  description, 
  imageUrl, 
  icon, 
  reverse = false 
}) => {
  return (
    <div
      className={`relative flex flex-col md:flex-row ${
        reverse ? 'md:flex-row-reverse' : ''
      } items-center gap-10 p-6 md:p-12 overflow-hidden`}
      style={{
        backgroundImage: `radial-gradient(circle at center, rgba(255, 137, 4, 0.3), #222D3B 60%, #121A2C 100%)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      {/* Top Blur Overlay */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[#121A2C] to-transparent backdrop-blur-md z-0" />
      {/* Bottom Blur Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#121A2C] to-transparent backdrop-blur-md z-0" />

      {/* Content Section */}
      <div className="w-full md:w-1/2 text-white space-y-8 relative z-10">
        <div className="text-[#FF8904] text-5xl">
          {typeof icon === 'string' ? (
            <img src={icon} alt="icon" className="w-35 h-35 object-contain" />
          ) : (
            icon
          )}
        </div>
        <h1 className="text-2xl md:text-3xl font-bold">
          <span className="text-white">{titleStart} </span>
          <span className="text-[#FF8904]">{titleMiddle} </span>
          <span className="text-white">{titleEnd}</span>
        </h1>
        <p className="text-gray-300 text-2xl">{description}</p>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 relative z-10">
        <img src={imageUrl} alt={`${titleStart} ${titleMiddle} ${titleEnd}`} className="w-full h-auto rounded-md shadow-lg" />
      </div>
    </div>
  );
};

export default Banner;
