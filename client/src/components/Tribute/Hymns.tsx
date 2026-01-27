import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const hymns = [
  {
    title: "There Shall Be Showers of Blessing",
    lyrics: [
      "1. There shall be showers of blessing:",
      "This is the promise of love;",
      "There shall be seasons refreshing,",
      "Sent from the Savior above.",
      "",
      "Chorus:",
      "Showers of blessing,",
      "Showers of blessing we need;",
      "Mercy-drops round us are falling,",
      "But for the showers we plead.",
      "",
      "2. There shall be showers of blessing—",
      "Precious reviving again;",
      "Over the hills and the valleys,",
      "Sound of abundance of rain.",
      "",
      "3. There shall be showers of blessing;",
      "Send them upon us, O Lord!",
      "Grant to us now a refreshing;",
      "Come, and now honor Thy Word.",
      "",
      "4. There shall be showers of blessing;",
      "O that today they might fall,",
      "Now as to God we’re confessing,",
      "Now as on Jesus we call!",
      "",
      "5. There shall be showers of blessing,",
      "If we but trust and obey;",
      "There shall be seasons refreshing,",
      "If we let God have His way."
    ]
  },
  {
    title: "Aigbagbọ Bila (Begone Unbelief)",
    lyrics: [
      "1: Aigbagbọ bila; Kristi mbẹ nihin,",
      "On y'o sì duro fun igbala mi;",
      "Ki nsá mã gbadura, On o ṣe 'ranwọ;",
      "B' On ba wà lọdọ mi, ifoiya kò si.",
      "",
      "2: B' ọ̀na mi ṣõkùn, t'On ba ti ntọ́ mi,",
      "Ngo mã ṣe 'gbọran, On y'o mã pèse;",
      "Bi gbogbo irawọ ẹ̀dá ba ṣaki,",
      "Ọ̀rọ t' ẹnu Rẹ̀ sọ y'o bori dandan.",
      "",
      "3: Ifẹ Rẹ̀ si mi kò jẹki nrò pe",
      "Y'o já mi silẹ, ninu wahala;",
      "Iranwọ ti mo sì nrí lojojumọ,",
      "Nki mi l' aiya wipe y'o mú mi lã já.",
      "",
      "4: Emi o ṣe kùn n'tori ipọnju,",
      "Tabi irora? O ti sọọ tẹlẹ;",
      "Ọ̀rọ Rẹ wip' awọn ajogún 'gbàla",
      "Kò le ṣ' alakọja ninu wahala.",
      "",
      "5: Njẹ b' ohun gbogbo ti nṣiṣẹ fun 're,",
      "ikorò d' adùn, õgùn di onjẹ;",
      "b' oni tilẹ korò, opin fẹrẹ̀ dé;",
      "'Gbana orin 'ṣẹgun y'o ti dùn pọ̀ to!"
    ]
  },
  {
    title: "Igbagbọ Mi Duro Lori (My Hope is Built on Nothing Less)",
    lyrics: [
      "1: Igbagbọ mi duro lori",
      "Ẹ̀jẹ̀ at' ododo Jesu;",
      "Nkò jẹ gbẹkẹle ohun kan,",
      "Lẹhin orukọ nla Jesu:",
      "",
      "Chorus:",
      "Mo duro lé Krist', Apata;",
      "Ilẹ mirann, iyanrìn ni.",
      "",
      "2: B' ire-ije mi tilẹ gùn,",
      "Õr'-ọfẹ Rẹ̀ kò yipada;",
      "B' o ti wù k' ijì nã le tó,",
      "Ìdakọ̀ró mi kò nĩ yẹ̀:",
      "Mo duro lé Krist', Apata; Ilẹ mirann, iyanrìn ni.",
      "",
      "3: Majẹmu ati ẹ̀jẹ̀ Rẹ̀,",
      "L' o gbe mi ró 'gbà 'kún 'mi de;",
      "'Gbati kò s' atìlẹhin mọ,",
      "On jẹ ireti nla fun mi:",
      "Mo duro lé Krist', Apata; Ilẹ mirann, iyanrìn ni.",
      "",
      "4: 'Gbat' ìpè 'kẹhin ba sì dún,",
      "A ba jẹ bá mi ni Tirẹ̀,",
      "Ki nwọ̀ ododo Rẹ̀ nikan,",
      "Ki nduro niwaju itẹ.",
      "Mo duro lé Krist', Apata; Ilẹ mirann, iyanrìn ni."
    ]
  }
];

export default function Hymns() {
  return (
    <section className="py-20 px-4 md:px-8 bg-primary/5">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-serif text-primary">Selected Hymns</h2>
          <div className="w-16 h-[1px] bg-primary/20 mx-auto" />
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {hymns.map((hymn, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-primary/10 bg-white/50 px-4 rounded-lg">
              <AccordionTrigger className="font-serif text-lg md:text-xl text-primary hover:text-accent-foreground hover:no-underline">
                {hymn.title}
              </AccordionTrigger>
              <AccordionContent>
                <div className="py-4 space-y-1 text-center font-medium text-muted-foreground leading-relaxed">
                  {hymn.lyrics.map((line, i) => (
                    <p key={i} className={line === "" ? "h-4" : ""}>{line}</p>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
