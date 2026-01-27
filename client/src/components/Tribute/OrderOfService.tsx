import { motion } from "framer-motion";

export default function OrderOfService() {
  const events = [
    { time: "4:00 PM", title: "Opening Prayer", desc: "Wesley Methodist Church Ikoyi" },
    { time: "", title: "Hymn: EMHB 411", desc: "Guide me, O Thou great Jehovah" },
    { time: "", title: "Hymn: EMHB 825", desc: "Hark! hark, my soul! angelic songs are swelling" },
    { time: "", title: "Bible Reading", desc: "Psalm 49" },
    { time: "", title: "Hymn: EMHB 498", desc: "Through the night of doubt and sorrow" },
    { time: "", title: "Bible Reading", desc: "1 Thessalonians 4:13-18" },
    { time: "", title: "Hymn: EMHB 511", desc: "Aigbagbo bila (Begone Unbelief)" },
    { time: "", title: "Bible Reading", desc: "John 14:1-3,27" },
    { time: "", title: "Testimony and Tributes", desc: "Family & Friends" },
    { time: "", title: "Hymn", desc: "There shall be showers of Blessing" },
    { time: "", title: "Exhortation", desc: "" },
    { time: "", title: "Prayer", desc: "For the children and family" },
    { time: "", title: "Thanksgiving", desc: "" },
    { time: "", title: "Vote of Thanks", desc: "" },
    { time: "", title: "Hymn: YMHB 324", desc: "Igbagbo mi duro lori" },
    { time: "", title: "Benediction", desc: "Closing Prayer" },
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-white relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent-foreground uppercase tracking-widest text-sm font-semibold">Wednesday, 11th February 2026</span>
          <h2 className="text-4xl font-serif text-primary mt-2">Order of Service</h2>
          <p className="text-muted-foreground mt-4 italic">Wesley Methodist Church Ikoyi, Lagos State</p>
        </div>

        <div className="relative border-l-2 border-primary/10 ml-4 md:ml-0 space-y-12 md:space-y-8 pl-8 md:pl-0">
          {events.map((event, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="md:flex items-center group"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[9px] md:left-1/2 md:-ml-[5px] w-4 h-4 rounded-full bg-white border-4 border-primary/30 group-hover:border-accent transition-colors" />
              
              <div className="md:w-1/2 md:pr-12 md:text-right">
                {index % 2 === 0 && (
                  <div>
                     <h3 className="text-xl font-serif text-foreground">{event.title}</h3>
                     <p className="text-muted-foreground">{event.desc}</p>
                  </div>
                )}
                {index % 2 !== 0 && (
                  <div className="hidden md:block">
                     <span className="text-sm font-bold text-accent-foreground/60">{event.time}</span>
                  </div>
                )}
              </div>

              <div className="md:w-1/2 md:pl-12">
                 {index % 2 !== 0 && (
                  <div>
                     <h3 className="text-xl font-serif text-foreground">{event.title}</h3>
                     <p className="text-muted-foreground">{event.desc}</p>
                  </div>
                )}
                {index % 2 === 0 && (
                   <div className="hidden md:block">
                     <span className="text-sm font-bold text-accent-foreground/60">{event.time}</span>
                   </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
