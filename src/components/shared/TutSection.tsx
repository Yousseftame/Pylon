import React from "react";
import Tut from "../../assets/Layer_1.png";
import Section1 from "../../assets/image.png";
import Section2 from "../../assets/imagel;.png";
import Section3 from "../../assets/imageee.png";
import Section4 from "../../assets/image (2).png";
import Section5 from "../../assets/image (1).png";

export default function TutSection() {
  return (
    <section id="tut" className="min-h-screen w-full py-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-12 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 items-start">
          {/* Left Side - Content */}
          <div data-aos="fade-right" className="space-y-8">
            {/* Logo */}
            <div className="mb-8">
              <img src={Tut} alt="TUT Logo" className="h-16 sm:h-20" />
            </div>

            {/* First Description */}
            <div className="space-y-4">
              <h2 className="text-2xl font-serif sm:text-3xl lg:text-4xl font-normal leading-tight text-[#585A45]">
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
            <div className="space-y-4">
              <p className=" text-md text-[#585A45] leading-relaxed p-2">
                Empowering local craftsmanship with global access. TUT Group is
                Pylon's commerce vertical – a complete ecosystem that bridges
                Egyptian products with global markets. Through curated retail,
                digital trade platforms, and logistical innovation, TUT
                redefines what it means to be "Made in Egypt," positioning local
                excellence for international growth.
              </p>
            </div>

            {/* Button */}
            <div className="pt-4">
              <button className="service-button px-8 py-4 rounded-full bg-[#D2D4D1]/90 text-black text-[11px] sm:text-[13px] font-medium tracking-wider uppercase transition-all duration-300 hover:bg-black hover:text-white shadow-[0_4px_8px_rgba(0,0,0,0.15)]">
                GO TO WEBSITE
              </button>
            </div>

            <div className="col-span-7 h-[215px] overflow-hidden rounded-lg">
              <img
                src={Section4}
                alt="Gallery 3"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side - Image Gallery */}
          <div data-aos="fade-left" className="relative space-y-4">
            <p className="text-xs sm:text-sm tracking-wider uppercase text-[#585A45]">
              E-COMMERCE, TRADE & CULTURAL EXPORTS
            </p>
            {/* First Row - Two images with different widths */}
            <div className="grid grid-cols-5 gap-4">
              {/* First Image - Wider (takes 3 columns) */}
              <div className="col-span-3 h-[440px] overflow-hidden rounded-lg">
                <img
                  src={Section1}
                  alt="Gallery 1"
                  className="w-full h-full object-fill"
                />
              </div>

              {/* Second Image - Narrower (takes 2 columns) */}
              <div className="col-span-2 h-[440px] overflow-hidden rounded-lg">
                <img
                  src={Section2}
                  alt="Gallery 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Second Row - One large image on left, two stacked on right */}
            <div className="grid grid-cols-5 gap-4">
              {/* Third Image - Large square/rectangle (takes 3 columns, taller) */}
              <div className="col-span-7 h-[220px] overflow-hidden rounded-lg">
                <img
                  src={Section3}
                  alt="Gallery 3"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right side - Two images stacked */}
              <div className="col-span-7 space-y-4">
                {/* Fourth Image - Top right */}
                <div className="col-span-7 h-[150px] overflow-hidden rounded-lg">
                  <img
                    src={Section5}
                    alt="Gallery 3"
                    className="w-full h-full object-cover"
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
