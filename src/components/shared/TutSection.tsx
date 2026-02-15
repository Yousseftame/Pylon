import Tut from "../../assets/Layer_1.png";
import Section1 from "../../assets/image.webp";
import Section2 from "../../assets/imagel;.webp";
import Section3 from "../../assets/imageee.webp";
import Section4 from "../../assets/image (2).webp";
import Section5 from "../../assets/image (1).webp";

export default function TutSection() {
  return (
    <section id="tut" className=" w-full py-12 sm:py-14 md:py-16">
      <div className=" mx-auto px-4 sm:px-8 md:px-12 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 md:gap-7 items-start">
          {/* Left Side - Content */}
          <div
            data-aos="fade-right"
            className="space-y-6 sm:space-y-7 md:space-y-8"
          >
            {/* Logo */}
            <div className="mb-6 sm:mb-7 md:mb-8">
              <img
                src={Tut}
                alt="TUT Logo"
                className="h-12 sm:h-14 md:h-16 lg:h-20"
              />
            </div>

            {/* First Description */}
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-tight text-[#585A45]">
                WE FUSE CREATIVITY,
                <br />
                CULTURAL DEPTH, AND TO
                <br />
                BUILD AND ELEVATE THE
                <br />
                BRANDS, EXPERIENCES,
                <br />
                AND DESTINATIONS THAT
                <br />
                WILL DEFINE THE FUTURE.
              </h2>
            </div>

            {/* Second Description */}
            <div className="space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base md:text-md text-[#585A45] leading-relaxed p-2">
                Empowering local craftsmanship with global access. TUT Group is
                Pylon's commerce vertical – a complete ecosystem that bridges
                Egyptian products with global markets. Through curated retail,
                digital trade platforms, and logistical innovation, TUT
                redefines what it means to be "Made in Egypt," positioning local
                excellence for international growth.
              </p>
            </div>

            {/* Button */}
            <div className="pt-3 sm:pt-4">
              <button
                onClick={() => {
                  window.open(
                    "https://tradeontut.com/",
                    "_blank",
                    "noopener,noreferrer",
                  );
                }}
                className="service-button px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-full bg-[#D2D4D1]/90 text-black text-[10px] sm:text-[11px] md:text-[13px] font-medium tracking-wider uppercase transition-all duration-300 hover:bg-black hover:text-white shadow-[0_4px_8px_rgba(0,0,0,0.15)]"
              >
                GO TO WEBSITE
              </button>
            </div>

            {/* Large Image at the Bottom */}
            <div className="col-span-7 h-[180px] sm:h-[200px] md:h-[215px] lg:h-[215px]  overflow-hidden rounded-lg">
              <img
                src={Section4}
                alt="Gallery 3"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>

          {/* Right Side - Image Gallery */}
          <div data-aos="fade-left" className="relative space-y-3 sm:space-y-4">
            <p className="text-[10px] sm:text-xs md:text-sm tracking-wider uppercase text-[#585A45]">
              E-COMMERCE, TRADE & CULTURAL EXPORTS
            </p>
            {/* First Row - Two images with different widths */}
            <div className="grid grid-cols-5 gap-3 sm:gap-4">
              {/* First Image - Wider (takes 3 columns) */}
              <div className="col-span-3 h-[320px] sm:h-[380px] md:h-[440px] overflow-hidden rounded-lg">
                <img
                  src={Section1}
                  alt="Gallery 5"
                  className="w-full h-full object-fill transition-transform duration-300 hover:scale-105"
                  loading="eager"
                  decoding="async"
                />
              </div>

              {/* Second Image - Narrower (takes 2 columns) */}
              <div className="col-span-2 h-[320px] sm:h-[380px] md:h-[440px] overflow-hidden rounded-lg">
                <img
                  src={Section2}
                  alt="Gallery 2"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>

            {/* Second Row - One large image on left, two stacked on right */}
            <div className="grid grid-cols-5 gap-3 sm:gap-4">
              {/* Third Image - Large square/rectangle (takes 3 columns, taller) */}
              <div className="col-span-7 h-[180px] sm:h-[200px] md:h-[220px] overflow-hidden rounded-lg">
                <img
                  src={Section3}
                  alt="Gallery 3"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="eager"
                  decoding="async"
                />
              </div>

              {/* Right side - Two images stacked */}
              <div className="col-span-7 space-y-3 sm:space-y-4">
                {/* Fourth Image - Top right */}
                <div className="col-span-7 h-[120px] sm:h-[135px] md:h-[150px] lg:h-[205px] xl:h-[150px]  overflow-hidden rounded-lg">
                  <img
                    src={Section5}
                    alt="Gallery 4"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    loading="eager"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
