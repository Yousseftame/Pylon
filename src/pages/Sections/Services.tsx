import React from "react";

export default function Services() {
  const services = [
    "MEDIA PRODUCTIONS",
    "PUBLIC POLICY",
    "AI SOLUTIONS",
    "E-COMMERCE & TRADE",
    "PR & MARKETING",
    "STRATEGIC FORSIGHT",
    "WEBSITE, APPS & AI",
    "ADVERTISING CAMPAIGNS",
    "BRANDING STRATEGIES",
    "SPACE DESIGN",
    "CONTENT CREATION",
    "SOCIAL MEDIA",
    "MEDIA BUYING",
    "DOCUMENTARY PRODUCTION",
    "SCRIPT WRITING",
  ];

  return (
    <>
      <section
        id="services"
        className="bg-services-cover min-h-screen w-full relative"
      >
        {/* Glass morphism container */}
        <div className="absolute inset-0 ">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-12 py-16">
            {/* Title */}
          <h3 className="text-center text-[32px] sm:text-[40px] font-normal mb-12 text-black">
              Our Services
            </h3>

            {/* Services Grid */}
            <div className="flex flex-wrap justify-center items-center gap-4 w-full px-4">
              {services.map((service, index) => (
                <button
                  key={index}
                  className="service-button px-8 py-4 rounded-full bg-[#D2D4D1]/90 text-black text-[11px] sm:text-[13px] font-medium tracking-wider uppercase transition-all duration-300 hover:bg-black hover:text-white shadow-[0_4px_8px_rgba(0,0,0,0.15)]"
                >
                  {service}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
