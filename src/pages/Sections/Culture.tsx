import React from "react";

export default function Culture() {
  return (
    <section
      id="culture"
      className="bg-culture-cover min-h-screen w-full relative"
    >
      <div className="absolute inset-0 bg-black/20 flex flex-col justify-between items-center px-4 sm:px-8 md:px-12 py-8 sm:py-10 md:py-12">
        {/* First title in the middle of the screen */}
        <div className="flex-1 flex justify-center items-center">
          <h3
            data-aos="zoom-in"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center px-4"
          >
            Culture meets Innovation
          </h3>
        </div>

        {/* Second text at the bottom */}
        <div className="mb-8 sm:mb-10 md:mb-12 text-center max-w-[90%] sm:max-w-[700px] md:max-w-[900px] lg:max-w-[1100px]">
          <h3
            data-aos="zoom-in"
            className="text-white text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed px-4"
          >
            At Pylon Holding, we don't just adapt to change — we define
            what's next. Rooted in cultural pride and driven by innovation,{" "}
            <br className="hidden sm:inline" /> we are reimagining how brands,
            governments, and societies connect with the future.
          </h3>
        </div>
      </div>
    </section>
  );
}
