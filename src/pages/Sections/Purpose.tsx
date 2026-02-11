import React from "react";

export default function Purpose() {
  return (
    <section
      id="purpose"
      className="bg-purpose-cover min-h-screen w-full relative"
    >
      <div className="absolute inset-4 sm:inset-6 md:inset-8 bg-white/35 backdrop-blur-xs rounded-2xl shadow-xl overflow-hidden">
        <div className="max-w-[1400px] 2xl:max-w-[2000px] mx-auto px-4 sm:px-8 md:px-12 py-6 sm:py-8 md:py-12 pb-16 sm:pb-20 md:pb-24 relative flex flex-col min-h-[calc(100vh-2rem)] sm:min-h-[calc(100vh-3rem)] md:min-h-[calc(100vh-4rem)]">
          {/* First word at the top */}
          <h3
            data-aos="zoom-in"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center p-4 sm:p-6 md:p-8"
          >
            Our Purpose
          </h3>

          {/* Spacer to push second word to middle */}
          <div
            data-aos="zoom-in"
            className="flex-1 flex flex-col justify-center items-center px-4"
          >
            <h3 className="relative text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white text-center pb-2 max-w-[90%]">
              Architects of Tomorrow's Experience
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-amber-50"></span>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
