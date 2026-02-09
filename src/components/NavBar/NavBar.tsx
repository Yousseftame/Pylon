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
          {/* Glass morphism container */}
          <div className="absolute inset-0 bg-white/45 backdrop-blur-xs">
            {/* Content wrapper with padding */}
            <div className="max-w-[1400px] mx-auto px-12 py-6">
              {/* Top Navigation Bar */}
              <div className="flex items-center justify-between mb-16">
                {/* Navigation Links - Left Side */}
                <nav className="flex items-center gap-8">
                  <a
                    href="#ds"
                    className="relative font-serif text-[13px] font-normal text-black tracking-wider group"
                  >
                    DS+
                    <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-black transition-all duration-300 origin-left group-hover:w-0"></span>
                  </a>

                  <a
                    href="#think"
                    className="relative font-serif text-[13px] font-normal text-black tracking-wider group"
                  >
                    THINK
                    <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-black transition-all duration-300 origin-left group-hover:w-0"></span>
                  </a>

                  <a
                    href="#insightify"
                    className="relative text-[13px] font-serif font-normal text-black tracking-wider group"
                  >
                    INSIGHTIFY
                    <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-black transition-all duration-300 origin-left group-hover:w-0"></span>
                  </a>

                  <a
                    href="#media"
                    className="relative text-[13px] font-serif font-normal text-black tracking-wider group"
                  >
                    MEDIA MAGNET
                    <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-black transition-all duration-300 origin-left group-hover:w-0"></span>
                  </a>

                  <a
                    href="#tut"
                    className="relative text-[13px] font-serif font-normal text-black tracking-wider group"
                  >
                    TUT GROUP
                    <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-black transition-all duration-300 origin-left group-hover:w-0"></span>
                  </a>

                  <a
                    href="#tact"
                    className="relative text-[13px] font-serif font-normal text-black tracking-wider group"
                  >
                    TACT CONSTRUCTION
                    <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-black transition-all duration-300 origin-left group-hover:w-0"></span>
                  </a>
                </nav>

                {/* Black Line Divider */}
                <div className="w-52 h-[3px] bg-black"></div>

                {/* Right Side Text */}
                <div className="text-black text-[11px] font-light leading-relaxed max-w-[220px] text-left">
                  Pylon Collective is more than a name – it's a symbol of
                  purpose, power, and progress. Inspired by the towering
                  gateways of ancient Egypt, the word "Pylon" represents our
                  deep cultural roots and monumental vision. Just as the ancient
                  pylons once marked the entrance to sacred spaces, we stand at
                  the intersection of tradition and innovation — bridging
                  heritage with modern cultures, and cutting-edge technology to
                  shape what's next.
                  <br />
                  <br />
                  The word "Collective" reflects the very core of our identity:
                  a unified force of specialized talent spanning culture, public
                  policy, immersive technologies, commerce, and strategic
                  communications. Each pillar represents a distinct capability,
                  but they form a cohesive ecosystem that thrives on
                  collaboration, synergy, and innovation.
                  <br />
                  <br />
                  Pylon Collective is a beacon of cultural and technological
                  strength – empowering ideas, elevating brands, and envisioning
                  the future through shared vision and interconnected abilities.
                  <br />
                  <br />
                  With one foot grounded in heritage and the other reaching
                  toward progress, we are not just building businesses. We are
                  building the next generation of experiences, narratives, and
                  destinations.
                </div>
              </div>

              {/* Middle Content - Description and Button */}
              <div className="flex items-start justify-between mb-24">
                {/* Left side - Main description */}
                <div className="max-w-[580px] text-center">
                  <p className="text-black text-[18px] font-light  leading-relaxed mb-8">
                    Pylon Collective is a beacon of cultural and technological
                    strength – empowering ideas, elevating brands, and
                    envisioning the future through shared vision and
                    interconnected abilities.
                    <br />
                    With one foot grounded in heritage and the other reaching
                    toward progress, we are not just building businesses. We are
                    building the next generation of experiences, narratives, and
                    destinations.
                  </p>

                  {/* Explore Button */}
                  <button className="border-2 border-black px-8 py-3 text-[12px] font-medium tracking-widest uppercase hover:bg-black hover:text-white transition-all duration-300">
                    EXPLORE THE GROUP
                  </button>
                </div>

                {/* Right side - Additional text */}
              </div>

              {/* Bottom - Large Title */}
              <div className="flex justify-center items-center ">
                <h1 className="text-black font-serif text-[140px] leading-none tracking-tight">
                  Pylon Collective
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
