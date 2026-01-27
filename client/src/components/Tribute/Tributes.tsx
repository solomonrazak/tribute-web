import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const tributes = [
  {
    name: "Titi Grillo",
    relation: "Daughter",
    text: "Mummy, I cannot put into words how much you mean to me. Your love shaped my life in ways I am still discovering. I will never forget how you cared for me after my accident in 1969... Sleep well, Mama Titi."
  },
  {
    name: "Babs Ajayi",
    relation: "Son",
    text: "Iya ni wura iyebiye... that song aptly sums up Mama Titi. She was the epitome of motherly love; she disciplined with one hand and drew you closer with the other. Sleep well mom in the bosom of the Lord."
  },
  {
    name: "Omoyele Yilu",
    relation: "Daughter",
    text: "She showed us the two commandments... She loved God with everything in her and loved everyone as she loved herself. My mum has now joined the witnesses watching us as we run our race here."
  },
  {
    name: "Ronke Wilson",
    relation: "Awa Januarian",
    text: "The only way I could describe my mum was that she loved the Lord with her whole heart. Her love was simple and unconditional. Sleep well in the Lord that you loved so much."
  },
  {
    name: "Simisola Osomo",
    relation: "Daughter",
    text: "Mum, you have fought a good fight. You have finished the race. A crown of righteousness awaits you in Heaven. I am privileged to be your daughter. Sun re o."
  },
  {
    name: "Akin Ajayi",
    relation: "Son",
    text: "I learned early that love also comes wrapped in discipline. My mother balanced correction with deep love. Sun re Princess Oluwafunmilayo, Ọmọ Olowu Oduru, Ọmọ Amọroro."
  },
  {
    name: "Bola Hollist",
    relation: "Family Friend",
    text: "Mummy Ajayi was my second mother... I remember vividly how we moved freely between No. 5 and No. 8 Turton Street, never truly distinguishing one home from the other."
  },
  {
    name: "Funke George",
    relation: "Adoptive Daughter",
    text: "Mummy took me in after my biological mother became a widow. She was a committed Christian and taught us all the way of the Lord. Thank God for mummy's life."
  },
  {
    name: "Taiwo Oloruntoba",
    relation: "Grandchild",
    text: "Grandmummy... You were the epitome of a godly mother and a true representative of Christ. You always have something to give. Sleep on mom."
  },
  {
    name: "Pastor Yilu",
    relation: "Son-in-Love",
    text: "My Mother-in-Love... She is a Disciplinarian. Very Thorough and Detailed. And she is a Giver. We Love You, Grandma, and we will Miss You."
  },
  {
    name: "Abiodun Osomo",
    relation: "Son-in-law",
    text: "Thank God, you did not suffer before your transition. Sleep in peace, grandma, until we meet again."
  },
  {
    name: "Funmi Ajayi",
    relation: "Daughter-in-law",
    text: "Grandmummy, you were such a devoted mother and grandmother. You played an important role in raising my husband and children. May your soul rest in eternal peace."
  },
  {
    name: "Debbie Ajayi",
    relation: "Granddaughter",
    text: "Gmama was an angel. I will miss our dancing and singing together. Please rest in the bosom of Christ Jesus."
  },
  {
    name: "Abimbola Ajibola",
    relation: "Granddaughter",
    text: "I honour the life of my grandmother, a virtuous woman who shaped my values and my faith. 'Give me my pamotore,' and we knew instantly to behave. Farewell, my dear Gmama."
  },
  {
    name: "Kemi 'Henrietta' Ogunnaike",
    relation: "Granddaughter",
    text: "Grandmummy!!!!!! I miss all the dancing with you from your returns, 'Grandmummy won tun de'. Rest well, ma-mummy, you surely deserve it!"
  },
  {
    name: "Oluwafemi Yilu",
    relation: "Grandson",
    text: "Grandmummy Oyoyo!!! That chant is forever etched in our memories. You were a matriarch, true and through. I love you, Gmama."
  },
  {
    name: "Kayode Grillo",
    relation: "Grandson",
    text: "Grand mummy!!! My grandmother, my mother, my father I never had. You held me together. Rest well, my angel."
  },
  {
    name: "Damilola Osomo",
    relation: "Granddaughter",
    text: "92 years of Grace. My fondest memories will always be on Olorunshogo Street. I'm going to miss our Saturday morning breakfasts."
  },
  {
    name: "Toni Ajayi",
    relation: "Granddaughter",
    text: "Gmama!!! You truly lived a long and incredible life. I love you grand mummy and may your soul rest in peace."
  },
  {
    name: "Sir Shino Yilu",
    relation: "Grandson",
    text: "You were the hub that brought us all together. You were living Psalm 128:3. Your favourite grandchild."
  },
  {
    name: "Temidayo Osomo",
    relation: "Granddaughter",
    text: "Grandmummy!! The Saturday morning breakfasts of moi moi and ogi, the phone calls that wouldn't end until I sang with you... I will forever miss you."
  }
];

export default function Tributes() {
  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto" id="tributes">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl md:text-5xl font-serif text-primary">Tributes</h2>
        <div className="w-24 h-1 bg-accent mx-auto" />
        <p className="text-muted-foreground font-serif italic max-w-2xl mx-auto">
          "The memory of the righteous is blessed." — Proverbs 10:7
        </p>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {tributes.map((tribute, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="break-inside-avoid"
          >
            <Card className="bg-card/50 backdrop-blur-sm border-accent/20 hover:border-accent/50 transition-colors duration-300">
              <CardHeader className="pb-3">
                <CardTitle className="font-serif text-xl text-primary">{tribute.name}</CardTitle>
                <p className="text-sm text-accent-foreground font-medium uppercase tracking-wider">{tribute.relation}</p>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <span className="absolute -top-2 -left-2 text-4xl text-accent/20 font-serif leading-none">“</span>
                  <p className="text-muted-foreground leading-relaxed relative z-10 px-2">
                    {tribute.text}
                  </p>
                  <span className="absolute -bottom-4 right-0 text-4xl text-accent/20 font-serif leading-none">”</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
