
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

const tributes = [
  {
    name: "Titi Grillo",
    relation: "Daughter",
    text: "Mummy, I cannot put into words how much you mean to me. Your love shaped my life in ways I am still discovering. Your voice was always calm and reassuring, reminding me that 'Agba ma gbani'—that elders do not abandon their own. Sleep well, Mama Titi.",
    desc: "Mummy, I cannot put into words how much you mean to me. Your love shaped my life in ways I am still discovering. I will never forget how you cared for me after my accident in 1969—your patience, your strength, and the comforting words you spoke stayed with me through the years. In moments of pain and fear, you were my anchor. Whenever there were disagreements between my siblings and me, your voice was always calm and reassuring. You would tell me not to worry, reminding me that 'Agba ma gbani'—that elders do not abandon their own. Those words became a source of peace and guidance for me, and they still echo in my heart today."
  },
  {
    name: "Babs Ajayi",
    relation: "Son",
    text: "Iya ni wura iyebiye... that song aptly sums up Mama Titi. I recall the early morning prayers; she believed that the day begins and ends with prayers. She was my 'lender of last resort', my 'good father' whenever I went prodigal. Sleep well mom.",
    desc: "My mother – A tribute. Iya ni wura iyebiye…. that song aptly sums up Mama Titi as she was popularly known in the neighbourhood and amongst her friends, and she had lots. I recall the early morning prayers; she believed that the day begins and ends with prayers, and that has stuck with me. She was very accommodating. Growing up, our house was always a beehive of activities with friends who were never made to feel uncomfortable. She was the epitome of motherly love; she disciplined with 'one hand' and drew you close with the other. She always found the time to prepare her message on the Saturday when she had to preach the following day, and I always had a preview because she made me proofread it. I was thus exposed to the Bible at a very young age and thank God I still am. Mummy never returns home without buying snacks for us. 'Ki le ra bo?' was a popular phrase at home when growing up. Mum, u will be missed. She was my 'lender of last resort', she was my 'good father' whenever I went prodigal, and she always had a listening ear, no matter the situation. Sleep well mom in the bosom of the Lord."
  },
  {
    name: "Omoyele Yilu",
    relation: "Daughter",
    text: "She showed us the two commandments... In all my 66 years, I never saw my mum fight with anyone. On your 92nd birthday, you insisted on singing every verse of 'Olorun Aye mi'. My mum has now joined the witnesses watching us.",
    desc: "Christ by the example of her life. By her life, she showed us the two commandments. Mark 12:30–31 NKJV And you shall love the LORD your God with all your heart, with all your soul, with all your mind, and with all your strength. This is the first commandment. And the second, like it, is this: You shall love your neighbour as yourself. There is no other commandment greater than these. She loved God with everything in her and loved everyone as she loved herself. In all my 66 years, I never saw my mum fight with anyone. Lessons in Love and Letting Go To Love, My mum taught me to love unconditionally, To Give, She showed generosity in every action, To Let Go, Not to allow anything to go to waste, To Care, Mama Titi was always caring for others. Her Birthday Song: Mami Olufunmilayo Omo Amororo Omo Olowu Oduru Omo Agunloye bi oyinbo on your birthday, January 5, you insisted on singing every verse of the birthday song Olorun Aye mi. There is a great joy in my heart, even as I miss you. Your face was so radiant on Thursday, 8 January, as you were singing 'Jerusalem on high'. My Mum has now joined the witnesses watching us as we run our race here."
  },
  {
    name: "Ronke Wilson",
    relation: "Daughter",
    text: "The only way I could describe my mum was that she loved the Lord with her whole heart. She rose early at 4am to start her worship and quiet time, a practice she continued till her last days. Sleep well in the Lord that you loved so much.",
    desc: "Shaped by faith, 'asleep in the LORD and awake to resurrection with Him,' words failed when the news came that Mum had gone, yet her life testified that she loved the Lord with her whole heart and loved everyone through the love of Christ—simple, unconditional, practical, without judgment—teaching forgiveness, service, and scripture, shaping my Christian life through early devotions, prayers, church meetings, hymns, discipline with love, generosity, care for family, friends, neighbours, children, and grandchildren, making family everywhere she went in Lagos, Lome, Accra, church, work, streets and buses, giving all she had with joyful faith, radiant spirit and unwavering hope, living and preaching Christ, defending the helpless, advocating for justice, offering second chances, loving deeply, serving diligently, singing hymns with joy, nurturing unity, leaving the world as she entered it—empty yet fulfilled by blessing others—and so I say adieu Mum, sleep well in the Lord you loved so much, may your memory be a blessing to all who hear this."
  },
  {
    name: "Simisola Osomo",
    relation: "Daughter",
    text: "Mum, you have fought a good fight. You have finished the race. A crown of righteousness awaits you in Heaven. I am privileged to be your daughter. Sun re o. Love Forever."
  },
  {
    name: "Akin Ajayi",
    relation: "Son",
    text: "I was the last of six children. My mother balanced correction with deep love. At five, I became her 'chief sanitary officer'. She taught me prayer, discipline, and the principle: 'Iwa bi Ọlọrun pẹlu itẹlọrun, ere nla ni'. Sun re Princess.",
    desc: "Love in human form, a tribute to my mom whose essence words cannot fully capture, as the last of six children I learned early that love comes wrapped in discipline when at five I became her little 'chief sanitary officer' (aka agbepo), learning responsibility before childhood, a mother who balanced correction with deep love, ruled our home with firmness and tenderness, whose discipline could be sharp but whose love was deeper still, who tolerated no conflict among her children and whose declared 'ceasefire' silenced even the wind, who waited late into the night praying and watching the road until I was safely home, strong in spirit, gentle in heart, mighty on her knees, loving God deeply and fighting her battles in prayer, teaching through her life prayer, discipline, contentment, frugality, hard work, service to humanity, peaceful coexistence, living by the principles that godliness with contentment is great gain and that nothing should go to waste, now sorely missed as we say sun re Princess Oluwafunmilayo, Ọmọ Olowu Oduru, Ọmọ Amọroro, from your beloved son, Akin Ajayi."
  },
  {
    name: "Pastor Yilu",
    relation: "Son-in-Love",
    text: "My Mother-in-Love... She is a Disciplinarian with the ability to impart discipline to others. She is very Thorough and Detailed—if you introduce her as Henrietta Olufunmilayo AJAYI, she will add - Nee ALAJA BROWNE. A true Giver.",
    desc: "Mother-in-love, my mother-in-love (not in law), this is a sincere tribute from my heart to a disciplinarian who was disciplined and had the ability and capacity to impart discipline to others, very thorough and detailed such that if you introduced her as Henrietta Olufunmilayo Ajayi she would add 'née Alaja Browne,' a giver who ensured everyone who visited her left with something—either biscuits or Tom Tom—and so we say we love you Grandma and we will miss you."
  },
  {
    name: "Abiodun Osomo",
    relation: "Son-in-law",
    text: "Mummy, you have fought a good fight. God decided to take you home at 92. You have lived a very, very good life, so rest well in the loving arms of our Dear Saviour. Sleep in peace, grandma, until we meet again.",
    desc: "A very good life, mummy you fought a good fight and finished your course as God decided to take you home on Friday, January 9, 2026, at 92, having lived a very, very good life, so rest well our dearest mom in the loving arms of our dear Saviour, greatly missed by the many lives you touched in various ways, loved in life and loved in death, thank God you did not suffer before your transition, and sleep in peace grandma until we meet again, from your loving son-in-law."
  },
  {
    name: "Funmi Ajayi",
    relation: "Daughter-in-law",
    text: "Grandmummy, you were such a devoted mother and grandmother. I admired your strength and agility; even getting older didn't stop you from exploring places. Your influence will always be a part of our family's story. Rest in peace.",
    desc: "Grandmummy, you were a devoted mother and grandmother who always put family first and never compromised your faith, playing an important role in raising my husband and children and leaving an influence that will forever be part of our family's story, admired for your strength and agility, your love for exploring places and moving from one place to another even as you grew older, a trait lovingly reflected in those after you, and you will be deeply missed along with your presence in our lives, as we pray that your soul rests in eternal peace."
  },
  {
    name: "Debbie Ajayi",
    relation: "Daughter-in-love",
    text: "Gmama was an angel. When I hear my friends complain about their mother-in-law, I wonder what I did for God to bless me with a Blessing like her. I will miss our dancing and singing together. Rest in the bosom of Christ."
  },
  {
    name: "Ademola Ajibola",
    relation: "Grandson-in-law",
    text: "From the very first moment we met, you welcomed me like your own. Your warmth and love wrapped around me, making me feel truly part of the family. Your legacy lives on through every life you touched.",
    desc: "To Our Dearest Gmama, as my wife fondly calls you, from the very first moment we met you welcomed me like your own and your warmth and love wrapped around me making me feel truly part of the family, I have always admired how your grandchildren respect you and speak so highly of you as a true reflection of the values of family, love, and wisdom you instilled in each of them, and your legacy lives on through every life you touched and in the hearts of all who were blessed to know you, cherished and remembered always."
  },
  {
    name: "Olujare Ogunnaike",
    relation: "Grandson-in-law",
    text: "I remember the first time we met, I was being introduced as your future 'grandson-in-law'. You were so welcoming and warm. That caring nature was the very core of your being. Sleep well in the bosom of our Lord.",
    desc: "A Warm Welcome, Grandmummy as you were fondly called by all, I remember the first time we met when I was introduced as your future 'grandson-in-law,' if there is anything like that, and how you were so welcoming, so warm, immediately making me feel loved and at home, that caring and loving nature being the very core of your being and shining through the lives of everyone blessed to meet you or to call you mummy or grandmummy, loving you deeply while trusting that God loves you even more and called you home, even as we wished for many more years together, resting now in the bosom of our Lord until we meet to part no more."
  },
  {
    name: "Kristin Wilson",
    relation: "Granddaughter",
    text: "My mother is the best human being I know... and I realize I didn't need to be told what shaped her. I could see it in my grandmother. She used to call me every week just to pray with me. Her love was 'love, applied'."
  },
  {
    name: "George Wilson",
    relation: "Grandson",
    text: "Grandmummy, you lived a long and beautiful life. I'll miss you secretly sharing sweets with me, no matter how old I get. I know you are watching over us and still sharing your love with us. I love you."
  },
  {
    name: "Aba & Korkoi",
    relation: "Grandchildren",
    text: "Distance was a fact on a map, but never a fact in how we felt. You made every arrival feel like a homecoming. You taught us that closeness is not about geography. Rest well. We love you.",
    desc: "The Distance She Closed: People often ask why I chose to move to Nigeria as an adult having never grown up here, but the truth is I never felt the distance from my Nigerian roots because my grandmother was present to me through my mother, in her voice, her patience, her faith, and the way she moved through the world, and seeing my mother navigate impossible things with grace, choosing kindness over bitterness and holding steady faith, I realised I did not need to be told what shaped her because I could see it, and that became my way into loving my grandmother, not just through sweets and treats but through the recognition that the woman who made me was herself made by someone who was still alive, still calling, still praying, still giving; Love, Applied: when I try to articulate the weight of this loss I think less of my own grief and more of hers, knowing I had my grandmother in visits, phone calls, and stories while my mother had her daily presence, 4am prayers, and quiet instruction, a loss I can only stand beside, and what I know for certain is that my grandmother never asked for anything, never added to the burden of expectation, but only gave her time, prayers, attention, and whatever she had without keeping score, calling constantly just to pray and bless me, calls I did not always answer as reverently as I should have, assuming there would be another chance, knowing better now; You Held It All Together: the first serious essay I wrote was about her, about how she wove prayer and egbogi, faith and tradition, trusting God and ancestral knowledge as one, delighting in feeding us with moi moi, chin chin, agbo, snacks, prayers, and calls that never gave up, teaching me that faith does not require abandoning culture or roots but holding Christ and community together with effortless grace, even when it was not effortless, and thanking her for teaching me that I should have answered more calls and stayed on the line longer; Love Across Oceans: though we grew up scattered across countries and time zones and saw her mostly in visits, we never felt far from her because she always closed the gap with packages, preparation, thoughtfulness, and love, holding us in her mind even when not physically present, turning every visit into abundance with full tables, ready snacks, carefully chosen treats, watching us eat with satisfaction as if our joy were her own, giving us more than we asked for and making every arrival feel like a homecoming long before we knew what that word meant."
  },
  {
    name: "Debbie Babs",
    relation: "Granddaughter",
    text: "I will never forget Saturday mornings, you making moin moin, and me trying to steal one. One of the last things you said to me was, 'I'm tired,' and I take comfort in knowing you can finally rest. Forever loved.",
    desc: "G-mama, I truly can't believe you are gone, you're the only grandparent I ever really knew and you more than made up for it in every way, I will never forget Saturday mornings with you making moi moi and me always trying to steal one before it was ready only for you to catch me every time, you were the only one who could tease me without me getting upset when things didn't go my way with my dad, I will always remember singing and dancing with all the cousins shouting 'Grandmummy o tu de!' excited over whatever goodies you brought home for us even though I won't miss the agbo that shortly followed, I'm so thankful I was able to see you one last time and one of the last things you said to me was 'I'm tired,' which gives me comfort knowing you can finally rest peacefully, and you are forever loved, deeply missed, and always remembered."
  },
  {
    name: "Henrietta Ajayi",
    relation: "Granddaughter",
    text: "I will miss your warm hugs and the way you always made sure we were okay. Your mornings were always the same: oranges, tea, and listening to Radio Lagos. We share the same name, a gift I'll always treasure.",
    desc: "A Name That Reminds Me of You, Grandmummy I will miss you so much, I will miss your warm hugs and the way you always made sure we were okay, I will miss how you never forgot to give us a Coaster biscuit and Bama as your quiet way of showing love, your mornings that were always the same with oranges, tea, watching TV and listening to Radio Lagos and Tinwa Tinwa at the same time, routines that now feel deeply precious, loving God deeply and finding joy in the church as you lived your faith every day, sharing one of the greatest gifts of having the same name which will always remind me of you, and saying rest peacefully Grandmummy knowing your love will never leave my heart."
  },
  {
    name: "Praise Ajayi",
    relation: "Grandchild",
    text: "My first public words were written to you. At 5:30 each morning, you rose to pray. You taught me that love can look like routine, and holiness can feel like home. Rest softly, my Gmama.",
    desc: "Words That Live, to my Gmama my first public words were written to you with pen and paper placed softly in my hands by you, you pinned my small courage on your door and taught me that my voice could live, at 5:30 each morning you rose to pray with a devotion book older than my years, prayers for everything, faith for every day, a life quietly anchored in God, mornings that learned gentleness from your table, unhurried and deliberate and full of care, teaching me that love can look like routine and holiness can feel like home, your table waiting with orange peels and light, a butter knife, Bama biscuits neatly laid, Radio Lagos 107.5fm humming and Channel AIT glowing awake with the newspaper spread in your hands, 'Mi o gbo Oyinbo,' you would jokingly insist whenever you wanted to hear our language, money slipping into palms without a sound, love disguised as casual grace, and now my Gmama I will remember you in hymns, in dancing, in proverbs, in prayers, in becoming, in every word I dare to write and every morning that still feels like you, missing you forever and resting softly."
  },
  {
    name: "Tobi Ajayi",
    relation: "Grandchild",
    text: "92 years and every single day reflected the love of Jesus. I'll miss having cabin biscuits and Bama while listening to radio Lagos, 'tin wa, tin wa'. I love you, Grand Mummy. Muah muah on both cheeks.",
    desc: "Christlike in Every Way, for 92 years and every single day your life reflected the steadfast love of Jesus, Grandmummy you carried wisdom in your words and kindness in your heart, your life was the true example of what it means to be Christlike, you were the strong root of our family tree and I celebrate your life with deep gratitude for the love you gave me, I will miss sharing cabin biscuits and Bama with tea and oranges for breakfast, eating everything that had sugar, and hearing Radio Lagos play tin wa tin wa ni tin tin even though I do not miss the agbo, and although I am still not ready to let you go I hold on to God's word just as you always did, knowing we will meet again, remembering always your wisdom and kindness, your strength as the root of our family, and the steadfast love of Jesus reflected through your life, loving you forever Grandmummy with kisses on both cheeks and all my love."
  },
  {
    name: "Blessing Oloruntoba",
    relation: "Granddaughter",
    text: "Grandma, I miss you! Who will call me 'soldier woman' when I rush upstairs? Waking up and not seeing you has been a strange feeling. Till we meet again, my angel.",
    desc: "My Angel, Grandma I miss you so much and I still do not believe you are gone, you were always concerned about how I was feeling and kept me entertained, you would not sleep until I came back from tutorial, and I still wonder who will call me 'soldier woman' when I rush upstairs or downstairs, waking up these days has been dreadful because it is just me and turning over without seeing you feels strange, my mummy who would compliment me when I was going to church saying 'baby yi o bad' and pray for me when I was going to work with 'Olorun a fi ayo si,' remembering how I would sneakily give you Tom Tom so Esther would not see, and holding close the lessons you taught me that I only have God and the importance of consistent prayer, loving you always mummy and holding on until we meet again, my angel."
  },
  {
    name: "Taiwo Oloruntoba",
    relation: "Grandchild",
    text: "From that day I came to your house in Olorunsogo, you accepted me as one of your Children. You were the epitome of a godly mother. You died a righteous woman with your children surrounding your table."
  },
  {
    name: "Sir Shino Yilu",
    relation: "Grandson",
    text: "You were the hub that brought us all together. I remember the nights I slept in your room, waking me up at midnight to go pee. You were the OG gentle parenting. 'Would Grandmummy be proud of this action?'",
    desc: "The Hub That Brought Us Together, remembering the lounge in Olorunsogo with its many seats always full and buzzing with people because you were the hub who brought us all together, living out Psalm 128:3 as children gathered joyfully around you, Midnight Prayers and Gentle Parenting, recalling nights spent in your well-ventilated room with your Bible by your bedside, being gently woken at midnight and finding you by early morning on your knees praying Psalm 23 in Yoruba, firm yet loving in your gentle parenting, and Life Skills and Ethical Guides, where you taught us to save through our kóló, guided our choices with integrity, kindness, honesty, and generosity, shaping how we face ethical decisions today, showing us what a life well-lived looks like—doing good, being kind, and living rightly—so we say thank you Grandmummy, you did well, you lived well, and you died well. Your favorite grandchild, Sir Shino Yilu."
  },
  {
    name: "Temidayo Osomo",
    relation: "Granddaughter",
    text: "The new crisp naira notes at Christmas, the Saturday morning breakfasts of moi moi and ogi, the phone calls that wouldn't end until I sang with you. You were loved, and I will forever miss you.",
    desc: "Tom Toms and Agbo, Grandmummy there are so many memories flooding my mind from the Tom Toms you gave me and the agbo I had to drink afterwards, to the crisp naira notes at Christmas, Saturday morning breakfasts of moi moi and ogi, and phone calls that would not end until I sang with you and blew you a kiss, remembering how deeply you loved us all, how constantly you covered us in prayers, wishing I had come home to see you one last time, and holding onto the truth that you were deeply loved and will forever be missed."
  },
  {
    name: "Abimbola Ajibola",
    relation: "Granddaughter",
    text: "All she needed to say was, 'Give me my pamotore,' and we knew instantly that it was time to behave. Farewell, my dear Gmama, you will always remain in my heart.",
    desc: "Today I honour the life of my grandmother, a virtuous woman who shaped my values and faith, a true disciplinarian whose simple words were enough to restore order, fearless in spirit and prayerful in heart, strong in her walk with God where prayer was both her strength and covering, who never returned home empty-handed but brought joy through song, dance, and generosity, teaching us the importance of family, togetherness, integrity, living rightly before God, remembering our roots, believing in second chances, correcting with love, loving deeply, and leaving an enduring legacy that will forever live in our hearts as we miss her dearly and say farewell, knowing she remains with us always."
  },
  {
    name: "Kemi 'Henrietta' Ogunnaike",
    relation: "Granddaughter",
    text: "Growing up surrounded by love... you would spoil us and equally discipline us with the same hand. I miss the 'Grandmummy won tun de' chants. Rest well, ma-mummy.",
    desc: "Grandmummy, the best memories were growing up surrounded by your love for all your grandchildren as you poured so much into us, spoiling us while disciplining us with the same hand, dancing with us whenever you returned as we sang 'Grandmummy won tun de,' bringing sweets and snacks before following it up with the dreaded agbo-jedi, teaching us to save through our kolos kept safely in your closet and guiding us into becoming responsible adults with the help of pamotore, leaving us grateful for every moment we shared with you on this earth, comforted that you remain forever in our hearts, thankful for one last kiss, and saying rest well ma-mummy, you truly deserve it."
  },
  {
    name: "Oluwafemi Yilu",
    relation: "Grandson",
    text: "Grandmummy Oyoyo!!! That chant is forever etched in our memories. You imbued in us love, discipline, humility, and the importance of family. I love you, Gmama.",
    desc: "Grandmummy Oyoyo, that chant forever etched in our memories and shouted so loudly that the whole neighbourhood had to join in, a woman who remained active through almost all her days, a true matriarch who imbued us with love, discipline, humility, and the importance of family, for whom we are deeply grateful for a beautiful and fulfilling life lived, knowing that none of us would be here without you and Grand Daddy, and carrying your legacy with us always."
  },
  {
    name: "Kayode Grillo",
    relation: "Grandson",
    text: "Grand mummy!!! My grandmother, my mother, my father, I never had. You held me together. 'Mo eni omo t'oun je.' Rest well, my angel.",
    desc: "Mo Eni Omo T'oun Je, grand mummy my grandmother, my mother, my father I never had, you held me together and even when wrong or illegal thoughts crossed my mind I always heard your voice reminding me 'mo eni omo t'oun je,' for which I am grateful for your teachings as I continue to walk the path you showed me, carrying your memory forever in my heart, resting in perfect peace, loving you deeply, living by your teachings, missing you so much, thanking you my Gmama my love, and saying rest well my angel."
  },
  {
    name: "Damilola Osomo",
    relation: "Granddaughter",
    text: "92 years of Grace. My fondest memories will always be on Olorunshogo Street—looking down the road, waiting for you. I'm going to miss our Saturday morning breakfasts.",
    desc: "92 Years of Grace, ninety-two years of grace and ninety-two years of pure love, my heart is heavy yet deeply grateful for the life you lived, holding fond memories of Olorunshogo Street where we looked down the road waiting for you and sang 'Grandmummy o tunde, Grandmummy o tunde' when you finally arrived, knowing I will miss you dearly and miss our Saturday morning breakfasts, and saying rest well, Gmama."
  },
  {
    name: "Toni Ajayi",
    relation: "Granddaughter",
    text: "Gmama!!! You truly lived a long and incredible life. Words alone aren't enough to show how much impact you made in my life and how much I will miss you. Rest in peace.",
    desc: "Watching Over Us, Gmama you truly lived a long and incredible life and words alone cannot express the impact you made or how deeply you will be missed, and though it is hard and sad to know you are no longer with us, there is peace in the assurance that you are watching over us in Heaven, loved always as we pray that your soul rests in perfect peace."
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
    text: "I remember how you would lovingly bring out goodies and chocolates from your wardrobe just for us. Thank you for taking care of us and for the love you showed in those little moments.",
    desc: "In loving memory of my great-grandmother, I remember when I was still very young and would come to Lagos for the holidays and how you lovingly brought out goodies and chocolates from your wardrobe just for us, how you gave us mint money when it was time to leave, always with a smile and so much care, and thank you for taking care of us and for the love you showed in those little moments that meant so much, loving you always."
  },
  {
    name: "Omo'ba Foli Ayayi",
    relation: "Nephew",
    text: "My beloved aunt was a source of endless love, kindness and wisdom. Her generosity knew no bounds, and her spirit was a beautiful reminder of the goodness that exists in the world. Adieu, my sweet aunt.",
    desc: "A Shining Light — My beloved aunt was a shining light in our lives, a source of endless love, kindness, and wisdom, with a heart so warm it embraced everyone around her, making us feel cherished and valued; her laughter was infectious, her advice priceless, and her presence a comforting anchor through both good times and challenges, as she taught me meaning, resilience, and compassion not through words alone but through the way she lived her life every single day, her generosity knowing no bounds and her spirit standing as a beautiful reminder of the goodness that exists in the world, and though she is no longer with us in person, her memory lives in our hearts forever, adieu my sweet aunt."
  },
  {
    name: "Pastor Odette S. Makanjuola",
    relation: "Niece",
    text: "To my amazing Aunty and my mum's look-alike, you embodied God's love. Your service as a Deaconess reflected your heart for others. 'Well done, good and faithful servant.' Good night!",
    desc: "A Legacy of Faith and Service — To my amazing aunty and my mum's look-alike, you were a shining star in our lives whose kindness, warmth, and love made a lasting impact on us all, and we will cherish the laughter, adventures, and memories we shared; you embodied God's love in every way, and your service as a deaconess reflected your heart for others, inspiring us through your unwavering faith, warm smile, and wise words, teaching us what it truly means to serve others with humility and love, and though we miss you deeply, we take comfort in the faith you lived out so beautifully, trusting that your legacy of love, faith, and service will continue to inspire us, as we hold onto the words 'Well done, good and faithful servant,' resting in peace until we meet again at His feet."
  },
  {
    name: "Tutu and Kemi",
    relation: "Niece",
    text: "To us, you are Mummy Turton Street. We have treasured memories of growing up with your kids and were treated as your own. Thank you for the wonderful memories. Rest in perfect peace.",
    desc: "Mummy Turton Street — To my mummy, you were my grandmother's younger sister, but to my sister and me, you were Mummy Turton Street, and we treasured memories of growing up with your children and being treated as your own, grateful for the wonderful memories of childhood and the great joy it brought to hear your voice again the day before you left us, especially hearing you call my name Adetutu Omo Jammy, as we rest in the comfort of knowing you are in perfect peace and we thank God for your wonderful life."
  },
  {
    name: "Mrs Cynthia K. Akinlawon",
    relation: "Cousin",
    text: "Sissie Funmilayo was a kind and very wise woman, a protector, a helper. Though there are no more tomorrows to share, the yesterdays remain forever in our memories.",
    desc: "Sissie Funmilayo: A Tribute — A tribute to a beloved cousin, mother, grandmother, and great-grandmother, we give God all the glory for a life well spent as we celebrate the homegoing of Deaconess Henrietta Funmilayo Ajayi, fondly called Sissie Funmilayo, whose 92 years were marked by kindness, wisdom, protection, joy, and unwavering love not only for her immediate family but also for her community, church, and all privileged to know her, a woman of many gifts whose presence in our lives was the greatest gift of all, whose memory we cherish deeply even as yesterday lives on in our hearts, a life that exemplified the fruits of the Spirit—love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control—leaving behind a powerful legacy of faith, humility, strength, generosity, calm spirit, and devotion to Christ, inspiring all who encountered her, and though we grieve her physical absence, we rejoice that her soul rests with the Lord, free from pain and suffering, forever remembered, forever loved, resting well in the bosom of our Lord Jesus Christ, Amen."
  },
  {
    name: "Omoba Akinpelu Browne",
    relation: "Cousin",
    text: "Sisi Funmilayo was a shining star. Even in her golden years, she danced with joy. She bid us farewell joining the last family meeting through Zoom, calling our names one by one. Sun re o.",
    desc: "A Beacon of Love and Faith — Deaconess Henrietta Oluwafunmilayo Ajayi: A Tribute. Sisi Funmilayo, as we her younger cousins fondly called her, was a shining star in our lives, a beacon of love, kindness, and faith who lit up every space she entered, especially during her years at the E.J. Browne family house at Daddy Alaja, Oke Arin, Olowogbowo area of Lagos Island; at 92, she left this world, but her impact will forever echo in our hearts through her unwavering devotion to church affairs, deep spirituality, commitment to community, unbreakable spirit, contagious laughter, and joyful dancing even in her golden years, as she brought people together with warmth, wisdom, and infectious enthusiasm for life; her boundless love for family and friends made every gathering brighter, and as if to bid us farewell, she joined the last family meeting in December 2025 via Zoom, calling our names one by one even from her sick bed, a surreal and unforgettable moment; as we celebrate her life, we remember her vibrant spirit, dancing feet, and heart full of love, knowing that though she may be gone, her memory will continue to inspire us to live with purpose, love deeply, and dance through life's joys and challenges, and may her gentle soul rest peacefully with the Lord — Sun re o, Omo Olowu Oduru."
  },
  {
    name: "Michael Ajayi",
    relation: "Family Member",
    text: "I can never forget your hug and your beautiful smile, as well as your lovely food that always makes me happy. Till we meet again. May Your Soul Rest in Peace.",
    desc: "Till we meet again. You will be missed. The last time I saw you was in 1999 when I came home for my dad's funeral. I remembered when my dad would visit his brother, Uncle Oseni. I can never forget your hug and your beautiful smile, as well as your lovely food that always makes me happy. I pray for your children's strength and comfort to see this through. Till we meet again. May Your Soul Rest in Peace."
  },
  {
    name: "Sade Mokwenye",
    relation: "Family Member",
    text: "Mummy, your bond with my mum, Mama Sokunle, went far beyond Busy Bee Society—into true sisterhood. Thank you for the gap you bridged in our lives. Adieu, Mummy.",
    desc: "A Testament to Devotion Mummy, your life and passing are a testament to your devotion to God and your service to mankind. Growing up, your name was ever-present in my home. You and my mum, Mama Sokunle, were members of Busy Bee Society at Wesley Church, Ikoyi, but your bond went far beyond that—into true sisterhood. My childhood story would be incomplete without your impact. My days of sleepovers at your home on Turton Street, picnics at Tarkwa Bay Beach with your children—where I was treated as one of your own—and holidays spent with your family were truly joyful. Time in your company was always special. You even ensured I sat for my entrance examinations when Mama was unavailable. Mummy, your love and care for Mama cannot be measured. You continually visited her in her old age, regardless of where she lived, and you ensured that any newly posted clergy visited her as well. E soju, e sehin, Mummy. You took a special interest in all my siblings. You held our hands and became a true big sister to my late sister, Chief Mrs G T Wilkey, indeed. Mummy, I cannot thank you enough for the gap you bridged in our lives. We are grateful to God for a life well spent. Adieu, Mummy. May God keep you in His loving arms until we meet again, to part no more."
  },
  {
    name: "Stella Effiwatt",
    relation: "Family Member",
    text: "Mommy was a true picture of motherhood. Thank you for living so well. I will miss you so much. Rest in Peace.",
    desc: "I Chose You as My Mom — I feel so sad about Mom's passing; she was such a special person, and I will always cherish the memories of her warmth and hugs; she had a beautiful way of making everyone feel seen and loved; Mommy was a true picture of motherhood, and I chose you as my mom; I saw your sacrifice and respect for all, which you also impacted on Ronke and Yele; Mommy, you lived a good and humble life worthy of emulation, a life dedicated to service and loving God; thank you for living so well, I will miss you so much. Rest in peace."
  },
  {
    name: "Jadesola Adesuyi",
    relation: "Family Member",
    text: "Mama lived by the principle of honouring the Lord with her substance. She forsook her comfort for Kingdom good. May her sweet soul rest in perfect peace.",
    desc: "Honour the Lord. Adieu Mama! Proverbs 3:9–10: 'Honour the Lord with thy substance, and with the first fruits of all thine increase: so shall thy barns be filled with plenty, and thy presses shall burst out with new wine.' Mama (Mummy Ronke) lived by this principle; she taught her children to build first for God, forsook her comfort for Kingdom good, and instilled the value of service in God's vineyard. We rest assured she is in a good place, having lived a fulfilled and happy life. May her sweet soul rest in perfect peace. Amen. Sun re, Mama rere."
  },
  {
    name: "Femi Obikoya",
    relation: "Family Member",
    text: "The great Mrs Ajayi. Iya oninu ire. She's lovely and dearest to all who came into her life. We always love you, but God loves you more. Rest in peace.",
    desc: "Iya Oninu Ire. The great Mrs Ajayi. Iya oninu ire. She's lovely and dearest to all who came into her life. We always love you, but God loves you more. May your soul continue to rest in the bosom of the Lord. Amen."
  },
  {
    name: "Kunbi Njoku",
    relation: "Family Member",
    text: "A true picture of motherhood and a shining example to us all. Rest in perfect peace, Mama, your legacy of strength and love lives on.",
    desc: "A True Picture of Motherhood. My heart is heavy with the loss of Mama, but I am grateful for the beautiful life she lived as a loving and caring mother to all her children. To Ronke, Bola, sister, yele and all Mama's children, I commiserate with you all and join you in celebrating her life. A true picture of motherhood and a shining example to us all. Rest in perfect peace, Mama, your legacy of strength and love, above all, service to Almighty God lives on. Amen."
  },
  {
    name: "Eva & Patrick",
    relation: "Family Members",
    text: "Mama rere. A good Mother. Abiyamo tooto. A true Mother. Ever gentle, graceful, peaceful and kind. Very Caring. May Mama's gentle soul rest in peace. Amen.",
    desc: "Mama rere. A good Mother. Abiyamo tooto. A true Mother. Ever gentle, graceful, peaceful and kind. Very caring. Eva and I are with you, Ronke, your siblings, children and in-laws. May Mama's gentle soul and the souls of all the faithful departed through the mercy of God rest in peace. Amen."
  },
  {
    name: "Anny Eweka",
    relation: "Family Member",
    text: "Maman, whenever you come to Togo, you must come and see my mum, and you must never come empty-handed. Thank you for the 'Showers of Blessing' you shared with us.",
    desc: "Showers of Blessing — Maman, whenever you come to Togo, you must come and see my mum and never come empty-handed; when I told her that you've passed, she remembered this song you once sang together: 'There shall be showers of blessing, this is the promise of love; there shall be seasons refreshing, sent from the Saviour above… Showers of blessing we need; mercy-drops round us are falling, but for the showers we plead… if we but trust and obey, there shall be seasons refreshing if we let God have His way.' Author: Daniel Webster Whittle (1840–1901); Composer: James McGranahan (1840–1907). Thank you."
  }
];

export default function Tributes() {
  // track which tribute is open (null = all closed)
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleTribute = (index: number) => {
    // Only toggle if the tribute has a desc
    if (tributes[index].desc) {
      setOpenIndex(openIndex === index ? null : index);
    }
  };

  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto" id="tributes">
      {/* Header */}
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl md:text-5xl font-serif text-primary">
          Tributes
        </h2>
        <div className="w-24 h-1 bg-accent mx-auto" />
        <p className="text-muted-foreground font-serif italic max-w-2xl mx-auto">
          &ldquo;The memory of the righteous is blessed.&rdquo; — Proverbs 10:7
        </p>
      </div>

      {/* Masonry layout */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {tributes.map((tribute, index) => {
          const isOpen = openIndex === index;
          const hasDesc = !!tribute.desc;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
              className="break-inside-avoid"
            >
              <Card
                onClick={() => toggleTribute(index)}
                className={`bg-card/50 backdrop-blur-sm border-accent/20 transition-colors duration-300 ${
                  hasDesc
                    ? "cursor-pointer hover:border-accent/50"
                    : "cursor-default"
                }`}
              >
                {/* HEADER */}
                <CardHeader className="pb-3">
                  <CardTitle className="font-serif text-xl text-primary">
                    {tribute.name}
                  </CardTitle>
                  <p className="text-sm text-accent-foreground font-medium uppercase tracking-wider">
                    {tribute.relation}
                  </p>

                  {hasDesc && (
                    <p className="text-xs italic text-muted-foreground mt-1">
                      {isOpen ? "Tap to close" : "Tap to read full tribute"}
                    </p>
                  )}
                </CardHeader>

                {/* CONTENT */}
                <CardContent>
                  <div className="relative">
                    <span className="absolute -top-2 -left-2 text-4xl text-accent/20 font-serif leading-none">
                      &ldquo;
                    </span>

                    <AnimatePresence mode="wait">
                      <motion.p
                        key={isOpen ? "desc" : "text"}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="text-muted-foreground leading-relaxed relative z-10 px-2"
                      >
                        {isOpen && tribute.desc ? tribute.desc : tribute.text}
                      </motion.p>
                    </AnimatePresence>

                    <span className="absolute -bottom-4 right-0 text-4xl text-accent/20 font-serif leading-none">
                      &rdquo;
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}