import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 relative overflow-hidden">
      {/* Animated Egyptian-inspired geometric patterns in background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute top-20 left-20 w-64 h-64 border-4 border-black rotate-45 animate-spin-slow"
          style={{
            transform: `rotate(${45 + mousePosition.x}deg) translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: "transform 0.3s ease-out",
          }}
        ></div>
        <div
          className="absolute bottom-32 right-32 w-48 h-48 border-4 border-black animate-pulse"
          style={{
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
            transition: "transform 0.3s ease-out",
          }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-32 h-32 border-4 border-black rotate-12"
          style={{
            transform: `rotate(${12 + mousePosition.y}deg) translate(${mousePosition.y}px, ${mousePosition.x}px)`,
            transition: "transform 0.3s ease-out",
          }}
        ></div>
      </div>

      {/* Glassmorphism container */}
      <div className="absolute inset-8 sm:inset-12 lg:inset-16 bg-white/40 backdrop-blur-md rounded-3xl shadow-2xl flex items-center justify-center p-8">
        <div className="text-center px-4 sm:px-8 max-w-4xl w-full">
          {/* Animated 404 with Egyptian pylon inspiration */}
          <div className="relative mb-6 sm:mb-8">
            {/* Decorative lines - like pylon gateway */}
            <div className="absolute left-1/2 top-0 w-1 h-full bg-black/20 -translate-x-[-200px] hidden lg:block"></div>
            <div className="absolute left-1/2 top-0 w-1 h-full bg-black/20 -translate-x-[200px] hidden lg:block"></div>

            {/* Main 404 number */}
            <h1
              className="text-[100px] sm:text-[140px] lg:text-[200px] xl:text-[240px] font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-black via-gray-800 to-black relative"
              style={{
                fontFamily: "'Playfair Display', serif",
                textShadow: "4px 4px 20px rgba(0,0,0,0.1)",
                transform: `perspective(1000px) rotateX(${mousePosition.y * 0.5}deg) rotateY(${mousePosition.x * 0.5}deg)`,
                transition: "transform 0.1s ease-out",
              }}
            >
              404
            </h1>

            {/* Decorative hieroglyphic-inspired elements */}
            <div className="absolute top-1/2 left-0 right-0 flex justify-center gap-8 -translate-y-1/2 pointer-events-none">
              <div className="w-2 h-16 bg-black/30 rotate-12 animate-pulse"></div>
              <div className="w-2 h-20 bg-black/30 -rotate-12 animate-pulse delay-100"></div>
              <div className="w-2 h-16 bg-black/30 rotate-6 animate-pulse delay-200"></div>
            </div>
          </div>

          {/* Error message */}
          <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
            <h2
              className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-light tracking-[0.3em] uppercase text-black"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Lost in the Sands
            </h2>

            <div className="w-24 sm:w-32 h-1 bg-black mx-auto"></div>

            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-black/80 max-w-2xl mx-auto leading-relaxed font-light px-4">
              Like an ancient traveler who strayed from the path between the
              pylons, you&apos;ve ventured into uncharted territory. This page
              has been lost to the desert of the digital realm.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8">
            <button
              onClick={() => navigate("/")}
              className="group relative px-6 sm:px-8 py-3 sm:py-4 border-2 border-black text-black font-medium tracking-widest uppercase text-xs sm:text-sm hover:bg-black hover:text-white transition-all duration-500 overflow-hidden rounded-sm w-full sm:w-auto sm:min-w-[180px]"
            >
              <span className="relative z-10">Return Home</span>
              <div className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </button>

            <button
              onClick={() => navigate(-1)}
              className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-black text-white font-medium tracking-widest uppercase text-xs sm:text-sm hover:bg-white hover:text-black border-2 border-black transition-all duration-500 rounded-sm w-full sm:w-auto sm:min-w-[180px]"
            >
              <span className="relative z-10">Go Back</span>
            </button>
          </div>

          {/* Decorative bottom element */}
          <div className="mt-6 sm:mt-8 flex justify-center gap-2">
            {[...Array(7)].map((_, i) => (
              <div
                key={i}
                className="w-1 bg-black/30 animate-pulse"
                style={{
                  height: `${15 + Math.sin(i) * 10}px`,
                  animationDelay: `${i * 0.1}s`,
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-black/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Custom styles for animations */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Montserrat:wght@300;400;600&display=swap');

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-40px) translateX(-10px);
          }
          75% {
            transform: translateY(-20px) translateX(15px);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-float {
          animation: float linear infinite;
        }

        .delay-100 {
          animation-delay: 0.1s;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </div>
  );
};

export default NotFound;
