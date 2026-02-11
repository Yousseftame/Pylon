import React from "react";
import ThinkLogo from "../../assets/think.png"; // Update with your actual logo path
import ThinkImage1 from "../../assets/thinkimage1.png"; // Update with your actual image path
import ThinkImage2 from "../../assets/thinkimage2.png"; // Update with your actual image path

export default function ThinkSection() {
  return (
    <section
      id="think"
      className="min-h-screen w-full py-16 bg-think-cover bg-cover bg-center bg-no-repeat relative "
    >
      {/* Optional dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div className=" mx-auto px-4 sm:px-12 overflow-hidden relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch min-h-[800px]">
          {/* Left Side - Images with Text */}
          <div
            data-aos="fade-right"
            className="flex flex-col justify-between space-y-6 h-full"
          >
            {/* First Image - Top */}
            <div className="flex-1 overflow-hidden rounded-lg">
              <img
                src={ThinkImage1}
                alt="THINK AI Technology"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Text Between Images */}
            <div className="py-4">
              <span className="text-xs sm:text-sm tracking-wider uppercase text-white">
                ARTIFICIAL INTELLIGENCE & IMMERSIVE TECHNOLOGIES
              </span>
            </div>

            {/* Second Image - Middle */}
            <div className="flex-1 overflow-hidden rounded-lg">
              <img
                src={ThinkImage2}
                alt="THINK Immersive Tech"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Third Image - Bottom */}
            {/* <div className="flex-1 overflow-hidden rounded-lg">
              <img
                src={ThinkImage3}
                alt="THINK Innovation"
                className="w-full h-full object-cover"
              />
            </div> */}
          </div>

          {/* Right Side - Content */}
          <div
            data-aos="fade-left"
            className="flex flex-col justify-between h-full"
          >
            {/* Logo Image */}
            <div className="mb-8">
              <img src={ThinkLogo} alt="THINK Logo" className="h-20 sm:h-18" />
            </div>

            {/* First Description - Main Heading */}
            <div className="mb-8 lg:mt-12">
              <h3 className="text-xl sm:text-2xl   lg:text-3xl font-normal  text-white">
                WE BRIDGE IMAGINATION AND INTELLIGENCE — BUILDING SCALABLE AI
                TOOLS, IMMERSIVE ENVIRONMENTS, AND SMART PLATFORMS THAT UNLOCK
                NEW POSSIBILITIES ACROSS INDUSTRIES.
              </h3>
            </div>

            {/* Second Description - Body Text */}
            <div className=" lg:mt-42 2xl:mt-60 ">
              <span className="text-sm sm:text-2xl  lg:pt-17  text-white ">
                Engineering smart environments and human-centered innovation,
                THINK is where imagination meets code. Specializing in AI
                systems, XR technologies, and digital simulations, THINK
                develops immersive solutions that revolutionize how we interact
                with data, environments, and each other. It is the group's lab
                for pioneering the experiential tech of tomorrow.
              </span>
            </div>

            {/* Spacer to push button down */}
            <div className="flex-grow"></div>

            {/* Button */}
            <div className="mt-8">
              <button
               
                  onClick={() => {
                    window.open(
                      "https://thinkstudio.ai/",
                      "_blank",
                      "noopener,noreferrer",
                    );
                  }}
                className="service-button px-8 py-4 rounded-full bg-white/10 backdrop-blur-xs border border-white/30 text-white text-[11px] sm:text-[13px] font-medium tracking-wider uppercase transition-all duration-300 hover:bg-white hover:text-black shadow-[0_4px_8px_rgba(0,0,0,0.15)]">
                GO TO WEBSITE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
