import { AppBar } from "@mui/material";

const Navbar = () => {
  return (
    <>
      <AppBar
        position="absolute"
        elevation={0}
        sx={{
          backgroundColor: "transparent",
          backdropFilter: "none",
        }}
      >
        {/* Full background container */}
        <div className="bg-hero-cover min-h-screen w-full relative">
          {/* Glass morphism container - responsive spacing */}
          <div className="absolute inset-4 sm:inset-6 lg:inset-8 xl:inset-12 2xl:inset-16 bg-white/55 backdrop-blur-xs rounded-2xl shadow-xl overflow-hidden">
            {/* Content wrapper with padding - increased max-width for large screens */}
            <div className="max-w-[1800px] 2xl:max-w-[2000px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-6 pb-24 relative h-full">
              {/* Top Navigation Bar */}
              <div className="flex flex-col sm:flex-row items-start sm:items-baseline mb-12 lg:mb-16 xl:mb-20">
                {/* Navigation Links - Left Side */}
                <nav className="flex flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-6 lg:gap-8 xl:gap-10 mb-4 sm:mb-0">
                  <a
                    href="#ds"
                    className="relative title-nav text-[11px] sm:text-[12px] lg:text-[13px] xl:text-[14px] font-normal text-black tracking-wider group"
                  >
                    DS+
                    <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-black transition-all duration-300 origin-left group-hover:w-0"></span>
                  </a>

                  <a
                    href="#think"
                    className="relative title-nav text-[11px] sm:text-[12px] lg:text-[13px] xl:text-[14px] font-normal text-black tracking-wider group"
                  >
                    THINK
                    <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-black transition-all duration-300 origin-left group-hover:w-0"></span>
                  </a>

                  <a
                    href="#insightify"
                    className="relative title-nav text-[11px] sm:text-[12px] lg:text-[13px] xl:text-[14px] font-normal text-black tracking-wider group"
                  >
                    INSIGHTIFY
                    <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-black transition-all duration-300 origin-left group-hover:w-0"></span>
                  </a>

                  <a
                    href="#media"
                    className="relative title-nav text-[11px] sm:text-[12px] lg:text-[13px] xl:text-[14px] font-normal text-black tracking-wider group"
                  >
                    MEDIA MAGNET
                    <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-black transition-all duration-300 origin-left group-hover:w-0"></span>
                  </a>

                  <a
                    href="#tut"
                    className="relative title-nav text-[11px] sm:text-[12px] lg:text-[13px] xl:text-[14px] font-normal text-black tracking-wider group"
                  >
                    TUT GROUP
                    <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-black transition-all duration-300 origin-left group-hover:w-0"></span>
                  </a>

                  <a
                    href="#tact"
                    className="relative title-nav text-[11px] sm:text-[12px] lg:text-[13px] xl:text-[14px] font-normal text-black tracking-wider group"
                  >
                    TACT CONSTRUCTION
                    <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-black transition-all duration-300 origin-left group-hover:w-0"></span>
                  </a>
                </nav>

                {/* Black Line Divider */}
                <div className="hidden sm:block w-52 h-[3px] bg-black mt-3 ml-10 "></div>
              </div>
              {/* Right Side Text - responsive sizing and positioning */}
              <div className="hidden lg:block absolute top-6 right-4 lg:right-8 xl:right-12 2xl:right-16 text-black text-[9px] lg:text-[10px] xl:text-[11px] font-light max-w-[200px] lg:max-w-[220px] xl:max-w-[260px] 2xl:max-w-[300px] text-left leading-relaxed">
                Pylon Collective is more than a name – it&apos;s a symbol of
                purpose, power, and progress. Inspired by the towering gateways
                of ancient Egypt, the word &quot;Pylon&quot; represents our deep
                cultural roots and monumental vision. Just as the ancient pylons
                once marked the entrance to sacred spaces, we stand at the
                intersection of tradition and innovation — bridging heritage
                with modern cultures, and cutting-edge technology to shape
                what&apos;s next.
                <br />
                <br />
                The word &quot;Collective&quot; reflects the very core of our
                identity: a unified force of specialized talent spanning
                culture, public policy, immersive technologies, commerce, and
                strategic communications. Each pillar represents a distinct
                capability, but they form a cohesive ecosystem that thrives on
                collaboration, synergy, and innovation.
                <br />
                <br />
                Pylon Collective is a beacon of cultural and technological
                strength – empowering ideas, elevating brands, and envisioning
                the future through shared vision and interconnected abilities.
                <br />
               
              </div>

              {/* Middle Content - Description and Button */}
              <div className="flex flex-col sm:flex-row items-start justify-between mb-8 sm:mb-12 lg:mb-20 xl:mb-24">
                {/* Left side - Main description - responsive width */}
                <div
                  data-aos="fade-down"
                  className="max-w-[580px] lg:max-w-[650px] xl:max-w-[750px] 2xl:max-w-[850px] text-center mx-auto lg:mx-0 lg:text-left"
                >
                  <h2 className="text-[15px] text-black sm:text-[16px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px] font-light mb-6 lg:mb-8 leading-relaxed">
                    Pylon Collective is a beacon of cultural and technological
                    strength – empowering ideas, elevating brands, and
                    envisioning the future through shared vision and
                    interconnected Cabilities.
                    <br />
                    
                    With one foot grounded in heritage and the other reaching
                    toward progress, we are not just building businesses. We are
                    building the next generation of experiences, narratives, and
                    destinations.
                  </h2>

                  {/* Explore Button - responsive sizing */}
                  <button className="border-2 text-black font-light border-black px-6 sm:px-8 lg:px-10 xl:px-12 mt-4 py-3 lg:py-3.5 xl:py-4 text-[11px] sm:text-[12px] lg:text-[13px] rounded-4xl font-medium tracking-widest uppercase hover:bg-black hover:text-white transition-all duration-300">
                    EXPLORE THE GROUP
                  </button>
                </div>
              </div>

              {/* Bottom - Large Title - responsive sizing */}
              <div
                data-aos="fade-up"
                className=" flex justify-center items-center min-h-[200px] sm:min-h-[250px] lg:min-h-0 lg:items-end lg:translate-y-[-30px] xl:translate-y-[-90px]"
              >
                <h1 className="pylon-heading text-[48px] sm:text-[50px] lg:text-[70px] xl:text-[90px] 2xl:text-[110px] text-center">
                  Pylon Holding
                </h1>
              </div>
            </div>
          </div>
        </div>
      </AppBar>
    </>
  );
};

export default Navbar;
