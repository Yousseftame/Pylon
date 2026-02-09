import React from "react";
import Tut from "../../assets/Layer_1.png"
import Section1 from "../../assets/image.png"
import Section2 from "../../assets/imagel;.png";

export default function TutSection() {
  return (
    <section id="tut" className="min-h-screen w-full py-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Content */}
          <div className="space-y-8">
            {/* Logo */}
            <div className="mb-8">
              <img src={Tut} alt="TUT Logo" className="h-16 sm:h-20" />
            </div>

            {/* Title at top right */}
            <div className="text-right lg:absolute lg:top-16 lg:right-12">
              <p className="text-xs sm:text-sm tracking-wider uppercase text-gray-700">
                E-COMMERCE, TRADE & CULTURAL EXPORTS
              </p>
            </div>

            {/* First Description */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal leading-tight text-gray-800">
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
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
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
              <button className="px-8 py-3 bg-transparent border border-gray-800 text-gray-800 text-xs sm:text-sm tracking-widest uppercase rounded-full hover:bg-gray-800 hover:text-white transition-all duration-300">
                GO TO WEBSITE
              </button>
            </div>
          </div>

          {/* Right Side - Image Gallery Grid */}
          {/* Right Side - Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 h-[650px]">
              {/* Left Tall Image */}
              <div className="row-span-3 overflow-hidden">
                <img
                  src={Section1}
                  alt="Left Tall"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Middle Top Image */}
              <div className="row-span-2 overflow-hidden">
                <img
                  src={Section2}
                  alt="Middle Top"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right Tall Image */}
              <div className="row-span-3 overflow-hidden">
                <img
                  src="/path-to-image-3.jpg"
                  alt="Right Tall"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Middle Bottom Small */}
              <div className="overflow-hidden">
                <img
                  src="/path-to-image-4.jpg"
                  alt="Middle Bottom"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom Wide Strip */}
              <div className="col-span-3 h-[140px] overflow-hidden">
                <img
                  src="/path-to-image-5.jpg"
                  alt="Bottom Strip"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
