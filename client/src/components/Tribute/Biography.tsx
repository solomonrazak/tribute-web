import { motion } from "framer-motion";

export default function Biography() {
  return (
    <section className="py-20 px-4 md:px-8 bg-white/50 relative">
      <div className="max-w-4xl mx-auto space-y-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-primary">Oriki Owu</h2>
          <div className="w-16 h-[1px] bg-primary/20 mx-auto" />
          
          <div className="prose prose-lg mx-auto font-serif text-muted-foreground italic leading-loose">
            <p className="text-xl md:text-2xl text-foreground/80">
              Omo Olowu Oduru.<br/>
              Omo Amororo, Omo Agunloye bi Oyinbo.<br/>
              Omo imogun.<br/>
              Lawunmi ara ilu to gun gbooro.<br/>
              Omo esinsin aborire.<br/>
              Ikete laara yoku, eyin loju epo.<br/>
              Oju epo o mororo, omororo ma ju won.<br/>
              Eru ile won a ma t'ose, iwofa won a ma ta kankan.<br/>
              Ehinkule ade lawe lati beri.<br/>
              Ibi omi tokun ntalamba leti aso.<br/>
              Segi nileke obun, iselega ko komode lowo.<br/>
              Ori la we, a ko we'se.<br/>
              Owu l'akoda
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mt-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
             <h3 className="text-3xl font-serif text-primary">A Life of Grace</h3>
             <p className="text-lg leading-relaxed text-muted-foreground">
               Deaconess Henrietta Oluwafunmilayo Ajayi was a beacon of faith and love. 
               Born on January 5, 1934, she lived a life dedicated to God and her family. 
               As a devoted member of Wesley Methodist Church Ikoyi, she served with humility and grace.
             </p>
             <p className="text-lg leading-relaxed text-muted-foreground">
               Known fondly as "Mama Titi" and "Gmama," she was a disciplinarian with a heart of gold. 
               Her home at Olorunsogo in Somolu was a haven for all, filled with prayer, song, and the warmth of her hospitality.
             </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative aspect-[4/5] bg-muted rounded-lg overflow-hidden shadow-xl rotate-3 hover:rotate-0 transition-transform duration-500"
          >
            {/* Placeholder for portrait */}
            <div className="absolute inset-0 bg-primary/5 flex items-center justify-center text-primary/20">
               <span className="font-serif italic text-2xl">Portrait</span>
            </div>
             <img src="/memorial-cover.png" className="w-full h-full object-cover opacity-80" alt="Memorial Portrait" />
          </motion.div>
        </div>
      </div>
      <button
  onClick={() => window.print()}
  className="fixed top-6 right-6 z-50 bg-primary text-primary-foreground px-4 py-2 rounded shadow-lg print:hidden"
>
  Download PDF
</button>

    </section>
  );
}
