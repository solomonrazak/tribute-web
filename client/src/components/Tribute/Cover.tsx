
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Cover() {
  const [activeSection, setActiveSection] = useState("biography");

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(sectionId);
    }
  };

  // Optional: Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["biography", "tributes", "memory-wall"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "biography", label: "Biography" },
    { id: "tributes", label: "Tributes" },
    { id: "memory-wall", label: "Memory Wall" },
  ];

  return (
    <div className="relative min-h-[100vh] print:min-h-auto w-full flex flex-col items-center justify-center text-center overflow-hidden">

      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/memorial-cover.png')" }}
      >
        <div className="absolute inset-0 bg-background/30 backdrop-blur-[2px]" />
      </div>

      {/* Sticky Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="fixed top-4 md:top-6 lg:top-8 left-1/2 -translate-x-1/2 z-50 print:hidden w-[calc(100%-5rem)] md:w-auto max-w-2xl"
      >
        <div className="bg-background/40 backdrop-blur-md border border-accent/20 rounded-full px-2 py-2 shadow-lg">
          <div className="flex gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative flex-1 md:flex-none px-3 md:px-6 py-2 rounded-full text-[13px] sm:text-[13px] md:text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                  activeSection === item.id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary/70"
                }`}
              >
                {/* Active indicator */}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 bg-accent/20 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </motion.nav>

      <div className="relative z-10 p-8 max-w-4xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4 mt-[-80px] md:mt-14"
        >
          <p className="text-xl md:text-2xl tracking-widest uppercase text-primary/80 font-serif">
            Celebration of Life
          </p>
          <div className="w-16 h-[1px] bg-primary/40 mx-auto" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-primary font-medium tracking-tight leading-tight"
        >
          Deaconess Henrietta <br/>
          <span className="italic text-accent-foreground">Oluwafunmilayo Ajayi</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="space-y-2"
        >
          <p className="text-2xl md:text-3xl font-serif text-primary/90">
            January 5, 1934 — January 9, 2026
          </p>
          <p className="text-lg text-muted-foreground italic">
            "Sleep well in the Lord that you loved so much."
          </p>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-0 right-0 flex justify-center"
      >
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-primary/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </div>
  );
}