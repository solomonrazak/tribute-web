import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const tributes = [
  {
    name: "Titi Grillo",
    relation: "Daughter",
    text: "Mummy, I cannot put into words how much you mean to me. Your love shaped my life in ways I am still discovering. Your voice was always calm and reassuring, reminding me that 'Agba ma gbani'—that elders do not abandon their own. Sleep well, Mama Titi."
  },
  {
    name: "Babs Ajayi",
    relation: "Son",
    text: "Iya ni wura iyebiye... that song aptly sums up Mama Titi. I recall the early morning prayers; she believed that the day begins and ends with prayers. She was my 'lender of last resort', my 'good father' whenever I went prodigal. Sleep well mom."
  },
  {
    name: "Omoyele Yilu",
    relation: "Daughter",
    text: "She showed us the two commandments... In all my 66 years, I never saw my mum fight with anyone. On your 92nd birthday, you insisted on singing every verse of 'Olorun Aye mi'. My mum has now joined the witnesses watching us."
  },
  {
    name: "Ronke Wilson",
    relation: "Daughter",
    text: "The only way I could describe my mum was that she loved the Lord with her whole heart. She rose early at 4am to start her worship and quiet time, a practice she continued till her last days. Sleep well in the Lord that you loved so much."
  },
  {
    name: "Simisola Osomo",
    relation: "Daughter",
    text: "Mum, you have fought a good fight. You have finished the race. A crown of righteousness awaits you in Heaven. I am privileged to be your daughter. Sun re o. Love Forever."
  },
  {
    name: "Akin Ajayi",
    relation: "Son",
    text: "I was the last of six children. My mother balanced correction with deep love. At five, I became her 'chief sanitary officer'. She taught me prayer, discipline, and the principle: 'Iwa bi Ọlọrun pẹlu itẹlọrun, ere nla ni'. Sun re Princess."
  },
  {
    name: "Pastor Yilu",
    relation: "Son-in-Love",
    text: "My Mother-in-Love... She is a Disciplinarian with the ability to impart discipline to others. She is very Thorough and Detailed—if you introduce her as Henrietta Olufunmilayo AJAYI, she will add - Nee ALAJA BROWNE. A true Giver."
  },
  {
    name: "Abiodun Osomo",
    relation: "Son-in-law",
    text: "Mummy, you have fought a good fight. God decided to take you home at 92. You have lived a very, very good life, so rest well in the loving arms of our Dear Saviour. Sleep in peace, grandma, until we meet again."
  },
  {
    name: "Funmi Ajayi",
    relation: "Daughter-in-law",
    text: "Grandmummy, you were such a devoted mother and grandmother. I admired your strength and agility; even getting older didn't stop you from exploring places. Your influence will always be a part of our family's story. Rest in peace."
  },
  {
    name: "Debbie Ajayi",
    relation: "Daughter-in-love",
    text: "Gmama was an angel. When I hear my friends complain about their mother-in-law, I wonder what I did for God to bless me with a Blessing like her. I will miss our dancing and singing together. Rest in the bosom of Christ."
  },
  {
    name: "Ademola Ajibola",
    relation: "Grandson-in-law",
    text: "From the very first moment we met, you welcomed me like your own. Your warmth and love wrapped around me, making me feel truly part of the family. Your legacy lives on through every life you touched."
  },
  {
    name: "Olujare Ogunnaike",
    relation: "Grandson-in-law",
    text: "I remember the first time we met, I was being introduced as your future 'grandson-in-law'. You were so welcoming and warm. That caring nature was the very core of your being. Sleep well in the bosom of our Lord."
  },
  {
    name: "Kristin Wilson",
    relation: "Granddaughter",
    text: "My mother is the best human being I know... and I realize I didn't need to be told what shaped her. I could see it in my grandmother. She used to call me every week just to pray with me. Her love was 'love, applied'."
  },
  {
    name: "George Wilson",
    relation: "Grandson",
    text: "Grandmummy, you lived a long and beautiful life. I’ll miss you secretly sharing sweets with me, no matter how old I get. I know you are watching over us and still sharing your love with us. I love you."
  },
  {
    name: "Aba & Korkoi",
    relation: "Grandchildren",
    text: "Distance was a fact on a map, but never a fact in how we felt. You made every arrival feel like a homecoming. You taught us that closeness is not about geography. Rest well. We love you."
  },
  {
    name: "Debbie Babs",
    relation: "Granddaughter",
    text: "I will never forget Saturday mornings, you making moin moin, and me trying to steal one. One of the last things you said to me was, 'I’m tired,' and I take comfort in knowing you can finally rest. Forever loved."
  },
  {
    name: "Henrietta Ajayi",
    relation: "Granddaughter",
    text: "I will miss your warm hugs and the way you always made sure we were okay. Your mornings were always the same: oranges, tea, and listening to Radio Lagos. We share the same name, a gift I'll always treasure."
  },
  {
    name: "Praise Ajayi",
    relation: "Grandchild",
    text: "My first public words were written to you. At 5:30 each morning, you rose to pray. You taught me that love can look like routine, and holiness can feel like home. Rest softly, my Gmama."
  },
  {
    name: "Tobi Ajayi",
    relation: "Grandchild",
    text: "92 years and every single day reflected the love of Jesus. I'll miss having cabin biscuits and Bama while listening to radio Lagos, 'tin wa, tin wa'. I love you, Grand Mummy. Muah muah on both cheeks."
  },
  {
    name: "Blessing Oloruntoba",
    relation: "Granddaughter",
    text: "Grandma, I miss you! Who will call me 'soldier woman' when I rush upstairs? Waking up and not seeing you has been a strange feeling. Till we meet again, my angel."
  },
  {
    name: "Taiwo Oloruntoba",
    relation: "Grandchild",
    text: "From that day I came to your house in Olorunsogo, you accepted me as one of your Children. You were the epitome of a godly mother. You died a righteous woman with your children surrounding your table."
  },
  {
    name: "Sir Shino Yilu",
    relation: "Grandson",
    text: "You were the hub that brought us all together. I remember the nights I slept in your room, waking me up at midnight to go pee. You were the OG gentle parenting. 'Would Grandmummy be proud of this action?'"
  },
  {
    name: "Temidayo Osomo",
    relation: "Granddaughter",
    text: "The new crisp naira notes at Christmas, the Saturday morning breakfasts of moi moi and ogi, the phone calls that wouldn't end until I sang with you. You were loved, and I will forever miss you."
  },
  {
    name: "Abimbola Ajibola",
    relation: "Granddaughter",
    text: "All she needed to say was, 'Give me my pamotore,' and we knew instantly that it was time to behave. Farewell, my dear Gmama, you will always remain in my heart."
  },
  {
    name: "Kemi 'Henrietta' Ogunnaike",
    relation: "Granddaughter",
    text: "Growing up surrounded by love... you would spoil us and equally discipline us with the same hand. I miss the 'Grandmummy won tun de' chants. Rest well, ma-mummy."
  },
  {
    name: "Oluwafemi Yilu",
    relation: "Grandson",
    text: "Grandmummy Oyoyo!!! That chant is forever etched in our memories. You imbued in us love, discipline, humility, and the importance of family. I love you, Gmama."
  },
  {
    name: "Kayode Grillo",
    relation: "Grandson",
    text: "Grand mummy!!! My grandmother, my mother, my father, I never had. You held me together. 'Mo eni omo t’oun je.' Rest well, my angel."
  },
  {
    name: "Damilola Osomo",
    relation: "Granddaughter",
    text: "92 years of Grace. My fondest memories will always be on Olorunshogo Street—looking down the road, waiting for you. I’m going to miss our Saturday morning breakfasts."
  },
  {
    name: "Toni Ajayi",
    relation: "Granddaughter",
    text: "Gmama!!! You truly lived a long and incredible life. Words alone aren’t enough to show how much impact you made in my life and how much I will miss you. Rest in peace."
  },
  {
    name: "Bola Hollist",
    relation: "Family Friend",
    text: "Mummy Ajayi was my second mother. I remember vividly moving freely between No. 5 and No. 8 Turton Street. Her purposeful, determined stride was unmatched. May the Lord grant her eternal rest."
  },
  {
    name: "Funke George",
    relation: "Adoptive Daughter",
    text: "Mummy took me in after my biological mother became a widow. She set our feet on the straight and narrow. Mummy dearest, may your soul rest in perfect peace. Adiue."
  },
  {
    name: "The Great Grandchildren",
    relation: "Great Grandchildren",
    text: "I remember how you would lovingly bring out goodies and chocolates from your wardrobe just for us. Thank you for taking care of us and for the love you showed in those little moments."
  },
  {
    name: "Omo'ba Foli Ayayi",
    relation: "Nephew",
    text: "My beloved aunt was a source of endless love, kindness and wisdom. Her generosity knew no bounds, and her spirit was a beautiful reminder of the goodness that exists in the world. Adieu, my sweet aunt."
  },
  {
    name: "Pastor Odette S. Makanjuola",
    relation: "Niece",
    text: "To my amazing Aunty and my mum’s look-alike, you embodied God's love. Your service as a Deaconess reflected your heart for others. 'Well done, good and faithful servant.' Good night!"
  },
  {
    name: "Tutu and Kemi",
    relation: "Niece",
    text: "To us, you are Mummy Turton Street. We have treasured memories of growing up with your kids and were treated as your own. Thank you for the wonderful memories. Rest in perfect peace."
  },
  {
    name: "Mrs Cynthia K. Akinlawon",
    relation: "Cousin",
    text: "Sissie Funmilayo was a kind and very wise woman, a protector, a helper. Though there are no more tomorrows to share, the yesterdays remain forever in our memories."
  },
  {
    name: "Omoba Akinpelu Browne",
    relation: "Cousin",
    text: "Sisi Funmilayo was a shining star. Even in her golden years, she danced with joy. She bid us farewell joining the last family meeting through Zoom, calling our names one by one. Sun re o."
  },
  {
    name: "Michael Ajayi",
    relation: "Family Member",
    text: "I can never forget your hug and your beautiful smile, as well as your lovely food that always makes me happy. Till we meet again. May Your Soul Rest in Peace."
  },
  {
    name: "Sade Mokwenye",
    relation: "Family Member",
    text: "Mummy, your bond with my mum, Mama Sokunle, went far beyond Busy Bee Society—into true sisterhood. Thank you for the gap you bridged in our lives. Adieu, Mummy."
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
  },
  {
    name: "Femi Obikoya",
    relation: "Family Member",
    text: "The great Mrs Ajayi. Iya oninu ire. She’s lovely and dearest to all who came into her life. We always love you, but God loves you more. Rest in peace."
  },
  {
    name: "Kunbi Njoku",
    relation: "Family Member",
    text: "A true picture of motherhood and a shining example to us all. Rest in perfect peace, Mama, your legacy of strength and love lives on."
  },
  {
    name: "Eva & Patrick",
    relation: "Family Members",
    text: "Mama rere. A good Mother. Abiyamo tooto. A true Mother. Ever gentle, graceful, peaceful and kind. May Mama's gentle soul rest in peace. Amen."
  },
  {
    name: "Anny Eweka",
    relation: "Family Member",
    text: "Maman, whenever you come to Togo, you must come and see my mum, and you must never come empty-handed. Thank you for the 'Showers of Blessing' you shared with us."
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
