import React from "react";
import TutSection from "../../components/shared/TutSection";
import DSSection from "../../components/shared/DSSection";
import TactSection from "../../components/shared/Tactsection";
import ThinkSection from "../../components/shared/ThinkSection";
import InsightifySection from "../../components/shared/InsightifySection";
import MediaMagnetSection from "../../components/shared/Mediamagnetsection";
import { href } from "react-router-dom";

export default function Services() {
  const services = [
    { label: "MEDIA PRODUCTIONS", url: "https://lucide.dev/icons/move-up" },
    { label: "PUBLIC POLICY", url: "tact" },
    { label: "AI SOLUTIONS", url: "think" },
    { label: "E-COMMERCE & TRADE", url: "ds" },
    { label: "PR & MARKETING", url: "media" },
    { label: "STRATEGIC FORSIGHT", url: "insightify" },
    { label: "WEBSITE, APPS & AI", url: "think" },
    { label: "ADVERTISING CAMPAIGNS", url: "media" },
    { label: "BRANDING STRATEGIES", url: "ds" },
    { label: "SPACE DESIGN", url: "tact" },
    { label: "CONTENT CREATION", url: "media" },
    { label: "SOCIAL MEDIA", url: "media" },
    { label: "MEDIA BUYING", url: "media" },
    { label: "DOCUMENTARY PRODUCTION", url: "media" },
    { label: "SCRIPT WRITING", url: "media" },
  ];


  return (
    <>
      <section
        id="services"
        className="bg-services-cover min-h-screen w-full relative overflow-hidden"
      >
        {/* Glass morphism container */}
        <div className="absolute inset-0">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-12 py-16">
            {/* Title */}
            <h3 className="text-center text-[32px] sm:text-[40px] font-normal mb-12 text-black">
              Our Services
            </h3>

            {/* Services Grid */}
            <div className="flex flex-wrap justify-center items-center gap-4 w-full px-4 mb-16">
              {services.map((service, index) => (
                <button
                  onClick={() => {
                    window.open(service.url, "_blank", "noopener,noreferrer");
                  }}
                  key={index}
                  className="service-button px-8 py-4 rounded-full bg-[#D2D4D1]/90 text-black text-[11px] sm:text-[13px] font-medium tracking-wider uppercase transition-all duration-300 hover:bg-black hover:text-white shadow-[0_4px_8px_rgba(0,0,0,0.15)]"
                >
                  {service.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* TUT Section - Continues with same background */}
        <div className="relative mt-[100vh]  md:mt-[70vh]">
          <TutSection />
        </div>

        {/* DS Section - Continues with same background */}
        <div className="relative ">
          <DSSection />
        </div>

        {/* TACT Section - Continues with same background */}
        <div className="relative">
          <TactSection />
        </div>

        {/* THINK Section - Has its own background image */}
        <ThinkSection />

        {/* Spacer Section - Shows services background again before next section */}

        {/* Insightify Section - Has its own background image */}
        <InsightifySection />

        {/* Media Magnet Section - Continues with same background */}
        <MediaMagnetSection />
      </section>
    </>
  );
}
