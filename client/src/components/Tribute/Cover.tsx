import { motion } from "framer-motion";

export default function Cover() {
  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/memorial-cover.png')" }}
      >
        <div className="absolute inset-0 bg-background/30 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 p-8 max-w-4xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
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
            1933 — January 9, 2026
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
