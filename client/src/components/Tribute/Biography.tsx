import { motion } from "framer-motion";

export default function Biography() {
  return (
    <section className="py-20 px-4 md:px-8 bg-white/50 relative" id="biography">
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

        {/* A Life of Grace + Image Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mt-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-serif text-primary">A Life of Grace</h3>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Funlayo Ajayi was born on the 5th of January 1934 in Lagos, Nigeria, to Gabriel Oladipo Browne of Daddy Alaja House, Koseh Street, Lagos Island, and Norah Omolara Browne (née Jackson). She came from a distinguished lineage on both sides of her family: her paternal great-grandmother was from the Royal Family of Amororo in the Owu Kingdom, Abeokuta, Ogun State, whilst her mother was from the John Payne Jackson family.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              She was the fifth of six children and began her formal education at Araromi Baptist School, Lagos, which she attended from 1944 to 1948. She then continued her studies at Princess Model School, Lagos, from 1949 to 1951. She was affectionately known as "Sisi Funlayo" by her younger cousins and "Grandmummy" (O tunde!) by her grandchildren and great-grandchildren.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative aspect-[4/5] bg-muted rounded-lg overflow-hidden shadow-xl rotate-3 hover:rotate-0 transition-transform duration-500"
          >
            {/* Portrait (below) */}
            <div className="relative z-10 flex items-center justify-center h-full p-6">
              <img
                src="/deconness.png"
                alt="Memorial Portrait"
                className="max-h-full max-w-full object-contain rounded-md shadow-2xl -translate-y-6"
              />
            </div>

            {/* Cover ABOVE portrait, but blended */}
            <img
              src="/memorial-cover.png"
              alt="Memorial Cover"
              className="absolute inset-0 z-20 w-full h-full object-cover mix-blend-multiply opacity-60"
            />
          </motion.div>
        </div>

        {/* Full Width Sections Below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-12 mt-16"
        >
          {/* Marriage and Family */}
          <div className="space-y-4 border-l-4 border-accent/30 pl-6">
            <h3 className="text-2xl md:text-3xl font-serif text-primary">Marriage and Family</h3>
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
              On the 2nd of June 1955, Funlayo Alaja Browne married her sweetheart, Moses Oseni Ajayi, whom she affectionately called "OC", at Trinity Methodist Church, Tinubu, Lagos. Together, they were blessed with six children: Titi, Babs, Yele, Ronke, Simi, and Akin.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
              Family was central to her life. She was deeply committed to maintaining strong family bonds and would readily step in to mediate disputes amongst relatives. She cherished time spent with family and friends, and rarely missed an opportunity to attend gatherings, where she was known to showcase her dancing skills with enthusiasm.
            </p>
          </div>

          {/* Career in Education */}
          <div className="space-y-4 border-l-4 border-accent/30 pl-6">
            <h3 className="text-2xl md:text-3xl font-serif text-primary">Career in Education</h3>
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
              Mrs Funlayo Ajayi's career was in education administration. She began her career at the Methodist School Supervisory Area on the 1st of March 1960. In 1975, she was transferred to the Lagos State Schools Management Board Inspectorate Office in Yaba, Lagos, where she continued to serve until her retirement in 1994 at the age of sixty.
            </p>
          </div>

          {/* Faith and Service */}
          <div className="space-y-4 border-l-4 border-accent/30 pl-6">
            <h3 className="text-2xl md:text-3xl font-serif text-primary">Faith and Service</h3>
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
              Deaconess Ajayi's devotion to God was unparalleled. She served passionately in her local church and community, holding various leadership positions with purpose and integrity. These included roles as Treasurer, General Secretary, and President of several church societies, most notably the Busy Bee Society and the Ladies Progressive Society.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
              Her steadfast commitment to service was recognised in 1986 when she was ordained as a Deaconess of the Methodist Church—at that time, the highest position attainable by women in Methodist ministry. Throughout her years of service, she forged lasting friendships with many including the late Mrs Macarthy, Mrs Alalade, Mrs Sokunle, Mrs Obikoya, Mrs Banjo, Sisi Araba, and Mrs Obagade.
            </p>
          </div>

          {/* Legacy */}
          <div className="space-y-4 border-l-4 border-accent/30 pl-6">
            <h3 className="text-2xl md:text-3xl font-serif text-primary">Legacy</h3>
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
              Deaconess Ajayi's legacy lives on through the countless lives she touched with love, kindness, and compassion. It lives on in her 6 children, 14 grandchildren and 10 great-grandchildren. Her warmth inspired countless gatherings, shared meals, and heartfelt prayers. She was a beacon of hope and encouragement, always ready to listen, uplift, and serve.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
              As a mother, mentor, and friend, her impact will continue to inspire future generations to live with purpose, integrity, and love, just as she did. She was a devoted servant of God who embodied the values of faith, family, and community, leaving behind a lasting influence of generosity and joy.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}