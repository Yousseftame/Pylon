import React from "react";
import MediaMagnetLogo from "../../assets/mediaMagnet.png"; // Update with your actual logo path
import MediaMagnetBottomImage from "../../assets/mediaMagnet1.png"; // Update with your actual bottom image path

export default function MediaMagnetSection() {
  return (
    <section id="media" className="min-h-screen w-full py-16">
      <div className="max-w-[1400px] 2xl:max-w-[2000px]  mx-auto px-4 sm:px-12 overflow-hidden">
        {/* Top Grid - Left and Right Sides */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:justify-items-center-safe items-center   mb-12">
          {/* Left Side - Logo and Descriptions */}
          <div data-aos="fade-right" className="flex flex-col space-y-8">
            {/* Logo */}
            <div className="mb-4">
              <div className="mb-8">
                <img
                  src={MediaMagnetLogo}
                  alt="Media Magnet Logo"
                  className="h-16 sm:h-20"
                />
              </div>
            </div>

            {/* First Description */}
            <div>
              <h3 className="text-base sm:text-lg lg:text-xl text-[#3B3B3B] leading-relaxed font-light">
                MEDIA MAGNET IS PYLON COLLECTIVE'S HUB FOR DIGITAL STORYTELLING
                AND SOCIAL INFLUENCE. FROM VIRAL VIDEOS AND BRAND STORYTELLING
                TO INFLUENCER PARTNERSHIPS AND DIGITAL ACTIVATIONS, MEDIA MAGNET
                HELPS BRANDS GROW THEIR VOICE, SHAPE PERCEPTION, AND STAY AT THE
                CENTER OF CULTURE.
              </h3>
            </div>

            {/* Second Description */}
            <div>
              <p className="text-sm sm:text-base text-[#3B3B3B]/80 leading-relaxed">
                DRIVING CONVERSATIONS. CREATING CONTENT THAT CONNECTS
              </p>
            </div>
          </div>

          {/* Right Side - Description and Button */}
          <div
            data-aos="fade-left"
            className="flex  flex-col justify-between h-full  items-start"
          >
            {/* Description Text */}
            <div className="flex-grow flex  lg:items-start lg:mt-35">
              <p className="text-sm sm:text-base text-[#3B3B3B] max-w-[260px] leading-relaxed">
                Specializing in content creation, social media strategy, and PR
                campaigns, we craft bold narratives that resonate across
                platforms.
              </p>
            </div>

            {/* Button */}
            <div className="mt-5">
              <button className="service-button px-8 py-4   rounded-full bg-[#D2D4D1]/90 text-black text-[11px] sm:text-[13px] font-medium tracking-wider uppercase transition-all duration-300 hover:bg-black hover:text-white shadow-[0_4px_8px_rgba(0,0,0,0.15)]">
                GO TO WEBSITE
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Wide Image */}
        <div data-aos="fade-up" className="w-full ">
          <div className="h-[400px] sm:h-[500px] lg:h-[500px] overflow-hidden rounded-lg">
            <img
              src={MediaMagnetBottomImage}
              alt="Media Magnet Content"
              className="w-full h-full object-fill transition-transform duration-500 ease-out hover:scale-[1.03]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
