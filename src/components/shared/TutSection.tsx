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
          <div className="relative">
            {/* Custom Grid Layout */}
            <div className="grid grid-cols-6 grid-rows-6 gap-3 h-[600px]">
              {/* Top Left - Tall Image (spans 2 columns, 3 rows) */}
              <div className="col-span-5 row-span-6 bg-gray-300 rounded-lg overflow-hidden">
                <img
                  src={Section1}
                  alt="Gallery 1"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Top Middle - Medium Image (spans 2 columns, 2 rows) */}
              <div className="col-span-5 col-start-5 row-span-6 bg-gray-300 rounded-lg overflow-hidden">
                <img
                  src={Section2}
                  alt="Gallery 2"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Top Right - Square Image (spans 2 columns, 2 rows) */}
              <div className="col-span-2 col-start-5 row-span-2 bg-gray-300 rounded-lg overflow-hidden">
                <img
                  src="/path-to-image-3.jpg"
                  alt="Gallery 3"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Middle Left Bottom - Wide Rectangle (spans 2 columns, 2 rows) */}
              <div className="col-span-2 row-span-2 row-start-4 bg-gray-300 rounded-lg overflow-hidden">
                <img
                  src="/path-to-image-4.jpg"
                  alt="Gallery 4"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Middle Center - Tall Image (spans 2 columns, 3 rows) */}
              <div className="col-span-2 col-start-3 row-span-3 row-start-3 bg-gray-300 rounded-lg overflow-hidden">
                <img
                  src="/path-to-image-5.jpg"
                  alt="Gallery 5"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom Right - Medium Rectangle (spans 2 columns, 3 rows) */}
              <div className="col-span-2 col-start-5 row-span-3 row-start-3 bg-gray-300 rounded-lg overflow-hidden">
                <img
                  src="/path-to-image-6.jpg"
                  alt="Gallery 6"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom Left Small - appears at bottom */}
              <div className="col-span-3 row-span-1 row-start-6 bg-gray-300 rounded-lg overflow-hidden">
                <img
                  src="/path-to-image-7.jpg"
                  alt="Gallery 7"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom Right Small */}
              <div className="col-span-3 col-start-4 row-span-1 row-start-6 bg-gray-300 rounded-lg overflow-hidden">
                <img
                  src="/path-to-image-8.jpg"
                  alt="Gallery 8"
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
