import React from "react";

export default function Purpose() {
  return (
    <section
      id="purpose"
      className="bg-purpose-cover min-h-screen w-full relative"
    >
      <div className="absolute inset-8 bg-white/35 backdrop-blur-xs rounded-2xl shadow-xl overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-12 py-6 pb-24 relative flex flex-col min-h-full">
          {/* First word at the top */}
          <h3
            data-aos="zoom-in"
            className="text-4xl font-bold text-white  text-center p-8"
          >
            Our Purpose
          </h3>

          {/* Spacer to push second word to middle */}
          <div
            data-aos="zoom-in"
            className="flex-1 flex flex-col justify-center items-center"
          >
            <h3 className="relative text-4xl sm:text-5xl font-bold text-white text-center pb-2">
              Architects of Tomorrow's Experience
              <span className="absolute left-0 bottom-0  w-full h-0.5 bg-amber-50"></span>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
