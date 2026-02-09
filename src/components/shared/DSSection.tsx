import React from "react";
import DSLogo from "../../assets/DS+ logo.png"; // Update with your actual logo path
import DSImage from "../../assets/imagejj.png"; // Update with your actual image path

export default function DSSection() {
  return (
    <section id="ds" className="min-h-screen w-full py-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-12 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Side - Image */}
          <div data-aos="fade-right" className="relative h-full min-h-[600px]">
            <div className="h-full w-full overflow-hidden rounded-lg">
              <img
                src={DSImage}
                alt="DS Media Production"
                className="w-full h-full object-fill"
              />
            </div>
          </div>

          {/* Right Side - Glass Morphism Content Box */}
          <div data-aos="fade-left" className="relative h-full">
            <div className="h-full bg-[#9FA097]/80 backdrop-blur-xs rounded-lg p-8 sm:p-12 shadow-xl flex flex-col justify-between">
              {/* Logo */}
              <div className="mb-8">
                <img src={DSLogo} alt="DS+ Logo" className="h-16 sm:h-20" />
              </div>

              {/* First Description - Main Heading */}
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl lg:text-xl font-normal leading-tight text-white">
                  CRAFTING NARRATIVES THAT CONNECT, INSPIRE, AND LIVE THROUGH
                  TIME. DS+ IS THE CREATIVE ENGINE OF PYLON COLLECTIVE,
                  SPECIALIZING IN HIGH-IMPACT VISUAL STORYTELLING, CINEMATIC
                  CONTENT, AND BRANDED MEDIA. FROM DOCUMENTARIES AND ADVERTISING
                  TO INTERACTIVE CONTENT FORMATS.
                </h3>
              </div>

              {/* Second Description - Subheading */}
              <div className="mb-6">
                <h3 className="text-lg sm:text-xl font-normal leading-tight text-white underline">
                  DS+ DELIVERS EMOTIONALLY RESONANT NARRATIVES BUILT WITH
                  ARTISTIC PRECISION AND TECHNOLOGICAL SOPHISTICATION.
                </h3>
              </div>

              {/* Third Description - Body Text */}
              <div className="mb-8 text-white">
                <p className="text-sm sm:text-base  text-white leading-relaxed">
                  We don't just produce – we craft experiences that resonate.
                  Through cinematic storytelling and creative excellence, we
                  shape narratives that leave a lasting impression.
                </p>
              </div>

              {/* Button */}
              <div className="mb-8">
                <button className="service-button px-8 py-4 rounded-full bg-[#D2D4D1]/90 text-black text-[11px] sm:text-[13px] font-medium tracking-wider uppercase transition-all duration-300 hover:bg-black hover:text-white shadow-[0_4px_8px_rgba(0,0,0,0.15)]">
                  GO TO WEBSITE
                </button>
              </div>

              {/* Bottom Text */}
              <div className="">
                <p className="text-xs sm:text-sm tracking-wider uppercase  text-white ">
                  MEDIA PRODUCTION AND CONTENT CREATION
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
