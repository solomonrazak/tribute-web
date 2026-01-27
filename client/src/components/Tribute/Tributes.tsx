import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const tributes = [
  {
    name: "Titi Grillo",
    relation: "Daughter",
    text: "Mummy, I cannot put into words how much you mean to me. Your love shaped my life in ways I am still discovering. I will never forget how you cared for me after my accident in 1969... Your voice was always calm and reassuring. Sleep well, Mama Titi."
  },
  {
    name: "Babs Ajayi",
    relation: "Son",
    text: "Iya ni wura iyebiye... that song aptly sums up Mama Titi. I recall the early morning prayers; she believed that the day begins and ends with prayers. She was the epitome of motherly love; she disciplined with one hand and drew you closer with the other. Sleep well mom."
  },
  {
    name: "Omoyele Yilu",
    relation: "Daughter",
    text: "She showed us the two commandments... She loved God with everything in her and loved everyone as she loved herself. My mum has now joined the witnesses watching us as we run our race here."
  },
  {
    name: "Ronke Wilson",
    relation: "Daughter",
    text: "The only way I could describe my mum was that she loved the Lord with her whole heart. Her love was simple and unconditional. 'Ṣùgbọ́n, ẹ máa fi ìtara ṣàfẹ́rí ẹ̀bùn ti ó tóbi jù... ìgbàgbọ́, ìrètí, àti ìfẹ́. Ṣùgbọ́n èyí tí o tóbi jù nínú wọn ni ìfẹ́.' Sleep well in the Lord."
  },
  {
    name: "Simisola Osomo",
    relation: "Daughter",
    text: "Mum, you have fought a good fight. You have finished the race. A crown of righteousness awaits you in Heaven. I am privileged to be your daughter. Sun re o. Love Forever."
  },
  {
    name: "Akin Ajayi",
    relation: "Son",
    text: "I was the last of six children, yet I learned early that love also comes wrapped in discipline. My mother balanced correction with deep love, shaping us with firmness and care. Sun re Princess Oluwafunmilayo."
  },
  {
    name: "Kristin Wilson",
    relation: "Granddaughter",
    text: "My mother is the best human being I know... and when I ask myself where that comes from, I realise I didn't need to be told what shaped my mother. I could see it in my grandmother. She never asked for anything, she only gave. Her love was always arriving in some form."
  },
  {
    name: "George Wilson",
    relation: "Grandson",
    text: "Grandmummy, you lived a long and beautiful life. I’ll miss you secretly sharing sweets with me, no matter how old I get. I know you are watching over us and still sharing your love with us. I love you."
  },
  {
    name: "Aba & Korkoi",
    relation: "Grandchildren",
    text: "Somehow, Grandmummy always closed the gap of distance. She made every arrival feel like a homecoming. We did not understand that we were being shown something about love: that it is not stopped by distance. Rest well."
  },
  {
    name: "Debbie Babs",
    relation: "Granddaughter",
    text: "I will never forget Saturday mornings, you making moin moin, and me always trying to steal one—only for you to catch me every time. One of the last things you said to me was, 'I’m tired,' and I take comfort in knowing you can finally rest. Forever loved."
  },
  {
    name: "Henrietta Ajayi",
    relation: "Granddaughter",
    text: "I will miss how you never forgot to give us a Coaster biscuit. Those quiet routines now feel very precious. One of the greatest gifts I have is that we share the same name. It will always remind me of you. Rest well."
  },
  {
    name: "Praise Ajayi",
    relation: "Grandchild",
    text: "My first public words were written to you. At 5:30 each morning, you rose to pray. You taught me that love can look like routine, and holiness can feel like home. In every word I dare to write, I'll remember you. Rest softly."
  },
  {
    name: "Tobi Ajayi",
    relation: "Grandchild",
    text: "92 years and every single day, your life reflected the steadfast love of Jesus. I’ll miss having cabin biscuits and Bama with you while listening to radio Lagos. I love you, Grand Mummy. Muah muah on both cheeks."
  },
  {
    name: "Blessing Oloruntoba",
    relation: "Granddaughter",
    text: "Grandma, I miss you so much! Who will call me 'soldier woman' when I rush upstairs? You taught me that I only have God and the importance of consistent prayer. I love you, Mummy. Till we meet again."
  },
  {
    name: "Ademola Ajibola",
    relation: "Grandson-in-law",
    text: "From the very first moment we met, you welcomed me like your own. Your legacy lives on through every life you touched. You will be cherished and remembered always."
  },
  {
    name: "Olujare Ogunnaike",
    relation: "Grandson-in-law",
    text: "You were so welcoming, so warm, and you immediately made me feel loved. That caring, loving nature was the very core of your being. Sleep well in the bosom of our Lord."
  },
  {
    name: "Vanessa Oluwole Osomo",
    relation: "Grandchild",
    text: "Grandma, thank you for all your kindness and love. You lived an amazing and fulfilling life. We will miss you."
  },
  {
    name: "Edidiong Utuk (Didi)",
    relation: "Family Member",
    text: "I will always remember your fun spirit and the joy you brought to our wedding, especially seeing you dance at the reception. That memory captures the warmth you shared so freely. Rest in perfect peace."
  },
  {
    name: "Yinka Yilu",
    relation: "Family Member",
    text: "What a beautiful life well spent! Your excellence in caring and raising those around you lasted many generations. Rest well, Grandmummy."
  },
  {
    name: "Alberto Boateng",
    relation: "Family Member",
    text: "You greeted me with that infectious smile that lit up the room like sunshine. Your 92 years were a tapestry of devotion. Rest well, dear one, in the peace you so richly deserve."
  },
  {
    name: "The Great Grandchildren",
    relation: "Great Grandchildren",
    text: "I remember how you would lovingly bring out goodies and chocolates from your wardrobe just for us. Thank you for taking care of us and for the love you showed in those little moments. We love you always."
  },
  {
    name: "Omo'ba Foli Ayayi",
    relation: "Nephew",
    text: "My beloved aunt was a shining light in our lives, a source of endless love, kindness and wisdom. Though she's no longer with us in person, her memory lives in our hearts forever. Adieu, my sweet aunt."
  },
  {
    name: "Pastor Odette S. Makanjuola",
    relation: "Niece",
    text: "To my amazing Aunty and my mum’s look-alike, you embodied God's love in every way. Your service as a Deaconess reflected your heart for others. 'Well done, good and faithful servant.' Good night!"
  },
  {
    name: "Tutu and Kemi",
    relation: "Family Members",
    text: "To us, you are Mummy Turton Street. We have treasured memories of growing up with your kids and were treated as your own. Thank you for the wonderful memories. Rest in perfect peace."
  },
  {
    name: "Mrs Cynthia K. Akinlawon",
    relation: "Cousin",
    text: "She was a kind and very wise woman, a protector, a helper, and a constant source of joy. Her life exemplified the fruits of the Spirit. Though we grieve, we rejoice that her soul is with the Lord."
  },
  {
    name: "Omoba Akinpelu Browne",
    relation: "Cousin",
    text: "Sisi Funmilayo was a shining star in our lives. Even in her golden years, she danced with joy, her spirit unbreakable. We remember her vibrant spirit, her dancing feet, and her heart full of love. Sun re o."
  },
  {
    name: "Michael Ajayi",
    relation: "Family Member",
    text: "I can never forget your hug and your beautiful smile, as well as your lovely food that always makes me happy. Till we meet again. May Your Soul Rest in Peace."
  },
  {
    name: "Sade Mokwenye",
    relation: "Family Member",
    text: "Mummy, your life was a testament to your devotion to God. My childhood story would be incomplete without your impact. Adieu, Mummy. May God keep you in His loving arms."
  },
  {
    name: "Stella Effiwatt",
    relation: "Family Member",
    text: "Mommy was a true picture of motherhood. Thank you for living so well. I will miss you so much. Rest in Peace."
  },
  {
    name: "Jadesola Adesuyi",
    relation: "Family Member",
    text: "Mama lived by the principle of honouring the Lord with her substance. She forsook her comfort for Kingdom good. May her sweet soul rest in perfect peace."
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
