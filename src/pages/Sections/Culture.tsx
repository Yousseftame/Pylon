import React from "react";

export default function Culture() {
  return (
    <section
      id="culture"
      className="bg-culture-cover min-h-screen w-full relative"
    >
      <div className="absolute inset-0 bg-black/20 flex flex-col justify-between items-center px-4 sm:px-12 py-12">
        {/* First title in the middle of the screen */}
        <div className="flex-1 flex justify-center items-center">
          <h3
            data-aos="zoom-in"
            className="text-4xl sm:text-5xl font-bold text-white text-center"
          >
            Culture meets Innovation
          </h3>
        </div>

        {/* Second text at the bottom */}
        <div className="mb-12 text-center max-w-[900px] sm:max-w-[1100px]">
          <h3
            data-aos="zoom-in"
            className="text-white text-lg  sm:text-xl leading-relaxed"
          >
            At Pylon Collective, we don’t just adapt to change — we define
            what’s next. Rooted in cultural pride and driven by innovation,{" "}
            <br /> we are reimagining how brands, governments, and societies
            connect with the future.
          </h3>
        </div>
      </div>
    </section>
  );
}
