import { motion } from "framer-motion";
import { useState } from "react";

export default function Memory() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Generate image paths: 1-9 are .png, 10-99 are .jpg
  const images = Array.from({ length: 100 }, (_, i) => {
    const num = i + 1;
    const extension = num <= 9 ? 'png' : 'jpg';
    return `/images/${num}.${extension}`;
  });

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-background/30 to-background/60 relative" id="memory-wall">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-primary">Memory Wall</h2>
          <div className="w-24 h-1 bg-accent mx-auto" />
          <p className="text-muted-foreground font-serif italic max-w-2xl mx-auto">
            Cherished moments captured in time, celebrating a life well lived
          </p>
        </motion.div>

        {/* Image Grid - Larger images with fewer columns */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                delay: (index % 20) * 0.05,
                duration: 0.4,
                ease: "easeOut"
              }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className="relative aspect-[4/5] group cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <div className="w-full h-full rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-muted">
                <img
                  src={image}
                  alt={`Memory ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    console.error(`Failed to load: ${image}`);
                  }}
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-5xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Selected memory"
                className="w-full h-full object-contain rounded-lg shadow-2xl"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-white/90 hover:bg-white rounded-full text-black transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}