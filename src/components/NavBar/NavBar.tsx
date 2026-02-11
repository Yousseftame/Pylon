import { AppBar } from "@mui/material";

const Navbar = () => {
  return (
    <>
      <AppBar
        position="relative"
        elevation={0}
        sx={{
          backgroundColor: "transparent",
          backdropFilter: "none",
        }}
      >
        {/* Full background container */}
        <div className="bg-hero-cover min-h-screen w-full relative">
          {/* Glass morphism container - Fixed responsive insets */}
          <div className="absolute inset-3  bg-white/55 backdrop-blur-xs rounded-2xl shadow-xl overflow-visible">
            {/* Content wrapper with padding - Fixed responsive spacing */}
            <div className=" mx-auto px-4 sm:px-8 md:px-12 py-4 sm:py-6 pb-12 sm:pb-16 md:pb-20 relative min-h-[calc(100vh-2rem)] sm:min-h-[calc(100vh-3rem)]   flex flex-col">
              {/* Top Navigation Bar */}
              <div className="flex flex-col sm:flex-row items-start sm:items-baseline mb-8 sm:mb-12 md:mb-16">
                {/* Navigation Links - Left Side */}
                <nav className="flex flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-6 md:gap-8 mb-4 sm:mb-0 w-full sm:w-auto ">
                  <a
                    href="#tut"
                    className="relative title-nav text-[10px] sm:text-[11px] md:text-[13px] font-normal text-black tracking-wider group"
                  >
                    TUT GROUP
                    <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-black transition-all duration-300 origin-left group-hover:w-0"></span>
                  </a>

                  <a
                    href="#ds"
                    className="relative title-nav text-[10px] sm:text-[11px] md:text-[13px] font-normal text-black tracking-wider group"
                  >
                    DS+
                    <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-black transition-all duration-300 origin-left group-hover:w-0"></span>
                  </a>

                  <a
                    href="#tact"
                    className="relative title-nav text-[10px] sm:text-[11px] md:text-[13px] font-normal text-black tracking-wider group"
                  >
                    TACT CONSTRUCTION
                    <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-black transition-all duration-300 origin-left group-hover:w-0"></span>
                  </a>

                  <a
                    href="#think"
                    className="relative title-nav text-[10px] sm:text-[11px] md:text-[13px] font-normal text-black tracking-wider group"
                  >
                    THINK
                    <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-black transition-all duration-300 origin-left group-hover:w-0"></span>
                  </a>

                  <a
                    href="#insightify"
                    className="relative title-nav text-[10px] sm:text-[11px] md:text-[13px] font-normal text-black tracking-wider group"
                  >
                    INSIGHTIFY
                    <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-black transition-all duration-300 origin-left group-hover:w-0"></span>
                  </a>

                  <a
                    href="#media"
                    className="relative title-nav text-[10px] sm:text-[11px] md:text-[13px] font-normal text-black tracking-wider group"
                  >
                    MEDIA MAGNET
                    <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-black transition-all duration-300 origin-left group-hover:w-0"></span>
                  </a>

                 
                </nav>

                {/* Black Line Divider */}
                <div className="hidden xl:block w-32 md:w-52 h-0.5 md:h-[3px] bg-black mt-2 md:mt-3 ml-4 md:ml-25"></div>
              </div>

              {/* Right Side Text - Hidden on small screens */}
              <div className="hidden lg:block absolute top-4 md:top-6 right-4 sm:right-8 md:right-12 text-black text-[9px] md:text-[10px] font-light max-w-[180px] md:max-w-[220px] text-left">
                Pylon Holding is more than a name – it's a symbol of purpose,
                power, and progress. Inspired by the towering gateways of
                ancient Egypt, the word "Pylon" represents our deep cultural
                roots and monumental vision. Just as the ancient pylons once
                marked the entrance to sacred spaces, we stand at the
                intersection of tradition and innovation — bridging heritage
                with modern cultures, and cutting-edge technology to shape
                what's next.
                <br />
                <br />
                The word "Holding" reflects the very core of our identity: a
                unified force of specialized talent spanning culture, public
                policy, immersive technologies, commerce, and strategic
                communications. Each pillar represents a distinct capability,
                but they form a cohesive ecosystem that thrives on
                collaboration, synergy, and innovation.
                <br />
                <br />
                Pylon Holding is a beacon of cultural and technological
                strength – empowering ideas, elevating brands, and envisioning
                the future through shared vision and interconnected abilities.
                <br />
                <br />
                With one foot grounded in heritage and the other reaching toward
                progress, we are not just building businesses. We are building
                the next generation of experiences, narratives, and
                destinations.
              </div>

              {/* Middle Content - Description and Button */}
              <div className="flex flex-col sm:flex-row items-start justify-between mb-12 sm:mb-16 md:mb-24">
                {/* Left side - Main description */}
                <div
                  data-aos="fade-down"
                  className="max-w-full sm:max-w-[450px] md:max-w-[580px] text-center sm:text-left md:text-center lg:text-center"
                >
                  <p className="text-[14px] sm:text-[16px] md:text-[18px] font-light mb-6 sm:mb-8">
                    Pylon Holding is a beacon of cultural and technological
                    strength – empowering ideas, elevating brands, and
                    envisioning the future through shared vision and
                    interconnected Cabilities.
                    <br />
                    With one foot grounded in heritage and the other reaching
                    toward progress, we are not just building businesses. We are
                    building the next generation of experiences, narratives, and
                    destinations.
                  </p>

                  {/* Explore Button */}
                  <button className="border-2   text-black font-light border-black px-5 sm:px-6 md:px-8 mt-4 py-2.5 sm:py-3 text-[10px] sm:text-[11px] md:text-[12px] rounded-4xl font-medium tracking-widest uppercase hover:bg-black hover:text-white transition-all duration-300">
                    EXPLORE THE GROUP
                  </button>
                </div>
              </div>

              {/* Bottom - Large Title - Fixed to stay visible */}
              <div
                data-aos="fade-up"
                className="my-auto flex justify-center items-end pb-4 sm:pb-6 md:pb-12"
              >
                <h1 className="pylon-heading text-[28px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[70px] 2xl:text-[80px] leading-none">
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
