// Kasaysayan: Philippine History Quiz App - Question Database
// All questions are carefully curated, historically verified, and educational.

export const categories = {
  'pre-colonial': 'Pre-Colonial & Early Contacts',
  'spanish': 'Spanish Era & Revolution',
  'american-japanese': 'American & Japanese Occupations',
  'modern': 'Post-War & Modern Era',
  'mix': 'The Ultimate Mix'
};

export const questions = [
  // ==========================================
  // CATEGORY: PRE-COLONIAL & EARLY CONTACTS (15 questions)
  // ==========================================
  {
    id: 'pc-1',
    category: 'pre-colonial',
    difficulty: 'easy',
    question: 'Who was the chief of Mactan who successfully defeated Ferdinand Magellan in the Battle of Mactan in 1521?',
    options: [
      'Rajah Humabon',
      'Lapulapu',
      'Rajah Sulayman',
      'Datu Puti'
    ],
    answer: 1,
    explanation: 'Lapulapu is widely regarded as the first national hero of the Philippines for repelling the Spanish expedition led by Magellan on April 27, 1521.'
  },
  {
    id: 'pc-2',
    category: 'pre-colonial',
    difficulty: 'easy',
    question: 'What is the name of the traditional pre-colonial script used in Luzon and other parts of the Philippines before Spanish colonization?',
    options: [
      'Sanskrit',
      'Alibata',
      'Baybayin',
      'Hanunoo'
    ],
    answer: 2,
    explanation: 'Baybayin is an ancient writing system that belongs to the Brahmic family. The term "Alibata" was coined much later in 1914 by Paul Versoza and is technically inaccurate as it is based on Arabic letters (Alif, Ba, Ta).'
  },
  {
    id: 'pc-3',
    category: 'pre-colonial',
    difficulty: 'medium',
    question: 'Which island is officially recognized in Philippine history as the site of the first Catholic Mass, held on Easter Sunday, March 31, 1521?',
    options: [
      'Cebu Island',
      'Limasawa Island',
      'Homonhon Island',
      'Mazaua (Butuan)'
    ],
    answer: 1,
    explanation: 'Under Republic Act No. 2733, Limasawa Island in Southern Leyte is officially recognized as the site of the first Catholic Mass in the Philippines, celebrated by Father Pedro de Valderrama.'
  },
  {
    id: 'pc-4',
    category: 'pre-colonial',
    difficulty: 'medium',
    question: 'What was the term used for the pre-colonial class of spiritual leaders, healers, and shamans, who were predominantly women?',
    options: [
      'Babaylan',
      'Datu',
      'Maharlika',
      'Timawa'
    ],
    answer: 0,
    explanation: 'Babaylan (or Catalonan in Tagalog regions) were respected community leaders who held roles in spiritual healing, agriculture, astronomy, and preserving cultural epics.'
  },
  {
    id: 'pc-5',
    category: 'pre-colonial',
    difficulty: 'hard',
    question: 'What is the oldest known written document found in the Philippines, dated to approximately 900 AD?',
    options: [
      'The Boxer Codex',
      'The Laguna Copperplate Inscription',
      'The Calatagan Pot Inscription',
      'The Maragtas Chronicle'
    ],
    answer: 1,
    explanation: 'The Laguna Copperplate Inscription, discovered in 1989, is written in a Kawi script in Old Malay, containing elements of Sanskrit, Old Javanese, and Old Tagalog. It records the clearance of a debt.'
  },
  {
    id: 'pc-6',
    category: 'pre-colonial',
    difficulty: 'medium',
    question: 'What was the "Sandugo", a ritual performed by Spanish explorer Miguel López de Legazpi and Datu Sikatuna of Bohol in 1565?',
    options: [
      'A decorative crown',
      'A blood compact',
      'A war dance',
      'A trade agreement'
    ],
    answer: 1,
    explanation: 'The Sandugo was a blood compact symbolizing friendship and alliance. Drops of blood from both leaders were mixed into wine and consumed together.'
  },
  {
    id: 'pc-7',
    category: 'pre-colonial',
    difficulty: 'easy',
    question: 'In pre-colonial Philippine society, what was the basic social, political, and economic unit, usually consisting of 30 to 100 families?',
    options: [
      'Pueblo',
      'Barangay',
      'Sultanate',
      'Cabecera'
    ],
    answer: 1,
    explanation: 'The word "barangay" comes from "balangay", a type of seafaring vessel. Early settlers traveled in these boats and established coastal or riverine communities under that name.'
  },
  {
    id: 'pc-8',
    category: 'pre-colonial',
    difficulty: 'medium',
    question: 'Who was the Muslim ruler of Manila who fiercely resisted the Spanish forces of Martin de Goiti and Miguel Lopez de Legazpi in 1570-1571?',
    options: [
      'Rajah Sulayman',
      'Sultan Kudarat',
      'Rajah Humabon',
      'Rajah Lakandula'
    ],
    answer: 0,
    explanation: 'Rajah Sulayman (or Rajah Soliman) was the co-ruler of Maynila along with Rajah Matanda. He burned Manila before retreating to resist Spanish conquest.'
  },
  {
    id: 'pc-9',
    category: 'pre-colonial',
    difficulty: 'hard',
    question: 'Which historical sultanate, established in 1405, is considered the oldest continuous Islamic state in the Philippines?',
    options: [
      'Sultanate of Maguindanao',
      'Sultanate of Sulu',
      'Sultanate of Lanao',
      'Sultanate of Ternate'
    ],
    answer: 1,
    explanation: 'The Sultanate of Sulu was founded in 1405 by Johore-born Shari\'ful Hashem Syed Abu Bakr, establishing Islamic governance and trade networks centered around Jolo.'
  },
  {
    id: 'pc-10',
    category: 'pre-colonial',
    difficulty: 'medium',
    question: 'What is the name of the 16th-century Spanish manuscript containing beautiful colored illustrations of pre-colonial Filipinos in gold ornaments?',
    options: [
      'Boxer Codex',
      'Murillo Velarde Map',
      'Sucesos de las Islas Filipinas',
      'Relacion de las Islas Filipinas'
    ],
    answer: 0,
    explanation: 'The Boxer Codex (named after scholar Charles Boxer) depicts various ethnic groups of the Philippines and Southeast Asia in high-quality gold-leaf drawings, illustrating their rich textiles and jewelry.'
  },
  {
    id: 'pc-11',
    category: 'pre-colonial',
    difficulty: 'hard',
    question: 'What was the specific social class of nobles and warrior elites in Visayan pre-colonial society, equivalent to the Tagalog Maharlika?',
    options: [
      'Aliping Namamahay',
      'Timawa',
      'Bagani',
      'Oripun'
    ],
    answer: 2,
    explanation: 'While "Maharlika" is the elite warrior/noble class in Luzon, in the Visayas, the "Bagani" (or sometimes "Kababayan") represented the warrior elite, while "Timawa" represented the free class.'
  },
  {
    id: 'pc-12',
    category: 'pre-colonial',
    difficulty: 'medium',
    question: 'Which explorer successfully completed the first circumnavigation of the globe, even though he himself died in the Philippines?',
    options: [
      'Ferdinand Magellan',
      'Ruy López de Villalobos',
      'Sebastian Elcano',
      'Miguel López de Legazpi'
    ],
    answer: 2,
    explanation: 'Juan Sebastián Elcano took command of the ship Victoria after Magellan was killed in Mactan and guided the remaining crew back to Spain in 1522, completing the circumnavigation.'
  },
  {
    id: 'pc-13',
    category: 'pre-colonial',
    difficulty: 'hard',
    question: 'Which Spanish explorer named the islands "Las Islas Filipinas" in honor of Prince Philip II of Spain in 1543?',
    options: [
      'Ferdinand Magellan',
      'Ruy López de Villalobos',
      'Miguel López de Legazpi',
      'Álvaro de Saavedra'
    ],
    answer: 1,
    explanation: 'Ruy López de Villalobos sailed from Mexico and named the islands of Samar and Leyte "Las Islas Filipinas", a name that eventually expanded to cover the entire archipelago.'
  },
  {
    id: 'pc-14',
    category: 'pre-colonial',
    difficulty: 'easy',
    question: 'What was the main commercial trade partner of the pre-colonial Philippines, as evidenced by large amounts of porcelain found in archaeological sites?',
    options: [
      'India',
      'China',
      'Japan',
      'Arabia'
    ],
    answer: 1,
    explanation: 'Chinese trade with the Philippines was extensive, dating back to the Song Dynasty (960–1279 AD) or earlier. Massive quantities of Celadon and blue-and-white porcelain have been recovered.'
  },
  {
    id: 'pc-15',
    category: 'pre-colonial',
    difficulty: 'hard',
    question: 'In pre-colonial Tagalog society, what was the distinction between an "Aliping Namamahay" and an "Aliping Sa Gigilid"?',
    options: [
      'Namamahay owned houses and property; Sa Gigilid lived in the master\'s house and had no property.',
      'Namamahay were war captives; Sa Gigilid were debt servants.',
      'Namamahay were noble warriors; Sa Gigilid were farmers.',
      'Namamahay were priests; Sa Gigilid were merchants.'
    ],
    answer: 0,
    explanation: 'An Aliping Namamahay (household servant) was a freeholder who lived in their own home, farmed, and paid a portion of their harvest. An Aliping Sa Gigilid (hearth servant) lived in the master\'s house, could be sold, and had no property.'
  },

  // ==========================================
  // CATEGORY: SPANISH ERA & REVOLUTION (15 questions)
  // ==========================================
  {
    id: 'sp-1',
    category: 'spanish',
    difficulty: 'easy',
    question: 'Who is the national hero of the Philippines whose novels "Noli Me Tángere" and "El Filibusterismo" inspired the Philippine Revolution?',
    options: [
      'Andres Bonifacio',
      'Jose Rizal',
      'Emilio Aguinaldo',
      'Apolinario Mabini'
    ],
    answer: 1,
    explanation: 'Dr. Jose Rizal, executed by the Spanish military on December 30, 1896, exposed the abuses of the Spanish colonial government and the Catholic friars through his writings.'
  },
  {
    id: 'sp-2',
    category: 'spanish',
    difficulty: 'easy',
    question: 'What was the secret revolutionary society founded by Andres Bonifacio in Manila on July 7, 1892, to fight for independence from Spain?',
    options: [
      'La Liga Filipina',
      'Katipunan (KKK)',
      'Propaganda Movement',
      'Magdalo'
    ],
    answer: 1,
    explanation: 'The Katipunan (Kataas-taasang, Kagalang-galangang Katipunan ng mga Anak ng Bayan) was founded after Jose Rizal was arrested and exiled to Dapitan, signaling the end of peaceful reform attempts.'
  },
  {
    id: 'sp-3',
    category: 'spanish',
    difficulty: 'medium',
    question: 'Where and when did Emilio Aguinaldo declare the Independence of the Philippines from Spanish rule?',
    options: [
      'Malolos, Bulacan on September 15, 1898',
      'Kawit, Cavite on June 12, 1898',
      'Pugad Lawin on August 23, 1896',
      'Barasoain Church on January 23, 1899'
    ],
    answer: 1,
    explanation: 'Philippine independence was proclaimed from the window of Emilio Aguinaldo\'s ancestral home in Kawit, Cavite, where the national flag was unfurled and the national anthem was played publicly for the first time.'
  },
  {
    id: 'sp-4',
    category: 'spanish',
    difficulty: 'medium',
    question: 'Who is known as the "Sublime Paralytic" and the "Brains of the Revolution," serving as the first Prime Minister and advisor to Emilio Aguinaldo?',
    options: [
      'Antonio Luna',
      'Apolinario Mabini',
      'Marcelo H. del Pilar',
      'Juan Luna'
    ],
    answer: 1,
    explanation: 'Despite losing the use of his legs to polio in 1896, Apolinario Mabini drafted the constitutional plans for the First Philippine Republic and acted as its premier advisor.'
  },
  {
    id: 'sp-5',
    category: 'spanish',
    difficulty: 'medium',
    question: 'What is the collective name of the three Filipino priests—Mariano Gomez, Jose Burgos, and Jacinto Zamora—who were executed by garrote in 1872?',
    options: [
      'Gomburza',
      'Trisagion',
      'Katipunan Priests',
      'Ilustrados'
    ],
    answer: 0,
    explanation: 'The execution of Gomburza on February 17, 1872, on false charges of subversion linked to the Cavite Mutiny, served as a massive catalyst for Filipino nationalism.'
  },
  {
    id: 'sp-6',
    category: 'spanish',
    difficulty: 'easy',
    question: 'What was the primary commercial system that connected Manila with Acapulco, Mexico from 1565 to 1815, trading silk, porcelain, and silver?',
    options: [
      'The Silk Road',
      'The Manila Galleon Trade',
      'The Royal Philippine Company',
      'The Encomienda System'
    ],
    answer: 1,
    explanation: 'The Manila Galleon Trade brought immense wealth to Spanish merchants in Manila, exchanging luxury Chinese goods for silver mined in Spanish America (Mexico and Peru).'
  },
  {
    id: 'sp-7',
    category: 'spanish',
    difficulty: 'hard',
    question: 'In the history of the Katipunan, what convention held in March 1897 replaced the KKK with a revolutionary government and elected Emilio Aguinaldo as president over Andres Bonifacio?',
    options: [
      'The Biak-na-Bato Convention',
      'The Tejeros Convention',
      'The Naic Pact',
      'The Malolos Congress'
    ],
    answer: 1,
    explanation: 'The Tejeros Convention exposed deep regional divisions (Magdalo vs. Magdiwang). Bonifacio, insulted by Daniel Tirona\'s questioning of his educational credentials, declared the election results null and void.'
  },
  {
    id: 'sp-8',
    category: 'spanish',
    difficulty: 'hard',
    question: 'Who was the chief editor and writer of the reformist newspaper "La Solidaridad", published in Spain, who wrote under the pen name "Plaridel"?',
    options: [
      'Graciano López Jaena',
      'Marcelo H. del Pilar',
      'Jose Rizal',
      'Mariano Ponce'
    ],
    answer: 1,
    explanation: 'Marcelo H. del Pilar took over the editorship of La Solidaridad from Graciano López Jaena. He was a brilliant lawyer and propagandist who died of tuberculosis in Barcelona.'
  },
  {
    id: 'sp-9',
    category: 'spanish',
    difficulty: 'medium',
    question: 'Which female revolutionary leader from Ilocos fought Spanish forces after her husband, Diego Silang, was assassinated in 1763?',
    options: [
      'Melchora Aquino',
      'Gabriela Silang',
      'Teresa Magbanua',
      'Gregoria de Jesus'
    ],
    answer: 1,
    explanation: 'María Josefa Gabriela Silang, known as the "Joan of Arc of Ilocandia," led rebel forces for four months before being captured and executed by the Spanish.'
  },
  {
    id: 'sp-10',
    category: 'spanish',
    difficulty: 'easy',
    question: 'Who was known as "Tandang Sora", the Grand Woman of the Revolution, who fed, treated, and housed wounded Katipuneros in her home?',
    options: [
      'Gregoria de Jesus',
      'Melchora Aquino',
      'Teresa Magbanua',
      'Marina Dizon'
    ],
    answer: 1,
    explanation: 'Melchora Aquino was 84 years old when the revolution broke out in 1896. Spanish authorities arrested and exiled her to Guam for her revolutionary support.'
  },
  {
    id: 'sp-11',
    category: 'spanish',
    difficulty: 'hard',
    question: 'What treaty, signed in December 1897 between Aguinaldo and Spanish Governor-General Primo de Rivera, temporarily paused the revolution in exchange for money and exile to Hong Kong?',
    options: [
      'Treaty of Paris',
      'Pact of Biak-na-Bato',
      'Treaty of Manila',
      'Agreement of Naic'
    ],
    answer: 1,
    explanation: 'The Pact of Biak-na-Bato failed to establish lasting peace. Both sides distrusted each other: Aguinaldo used the funds to buy weapons in Hong Kong, while Spanish forces continued arrests.'
  },
  {
    id: 'sp-12',
    category: 'spanish',
    difficulty: 'medium',
    question: 'What was the "Cedula Personal", which Andres Bonifacio and the Katipuneros famously tore up during the "Cry of Pugad Lawin" in August 1896?',
    options: [
      'A tax certificate representing Spanish subjugation',
      'A military draft card',
      'A land title deed',
      'A Catholic baptismal certificate'
    ],
    answer: 0,
    explanation: 'The tearing of the cedula (residence tax certificate) was a symbolic act of defiance against three centuries of Spanish taxes and colonial rule, marking the official start of the armed revolution.'
  },
  {
    id: 'sp-13',
    category: 'spanish',
    difficulty: 'medium',
    question: 'Who was the wife of Andres Bonifacio, known as the "Lakambini of the Katipunan", who guarded the secret documents and seal of the society?',
    options: [
      'Teresa Magbanua',
      'Gregoria de Jesus',
      'Delfina Herbosa',
      'Marcela Agoncillo'
    ],
    answer: 1,
    explanation: 'Gregoria de Jesús married Bonifacio in 1893. She endured harsh conditions in the forests of Luzon, keeping the KKK\'s archives safe from Spanish raids.'
  },
  {
    id: 'sp-14',
    category: 'spanish',
    difficulty: 'hard',
    question: 'Which Spanish Governor-General introduced the formal, permanent surname system in 1849 via the "Catálogo Alfabético de Apellidos"?',
    options: [
      'Valeriano Weyler',
      'Narciso Clavería y Zaldúa',
      'Carlos Maria de la Torre',
      'Fermin Jaudenes'
    ],
    answer: 1,
    explanation: 'Governor-General Narciso Clavería y Zaldúa issued the decree to standardize family names for census and tax collection purposes, giving Filipinos a catalog of Spanish and local surnames to choose from.'
  },
  {
    id: 'sp-15',
    category: 'spanish',
    difficulty: 'hard',
    question: 'Which battle, fought on May 1, 1898, resulted in the complete destruction of the Spanish Pacific squadron by the US Navy under Commodore George Dewey?',
    options: [
      'Battle of Manila Bay',
      'Mock Battle of Manila',
      'Battle of Tirad Pass',
      'Battle of Alapan'
    ],
    answer: 0,
    explanation: 'The Battle of Manila Bay was a decisive naval engagement in the Spanish-American War. The US Asiatic Squadron destroyed Admiral Patricio Montojo\'s fleet, ending Spanish naval power in the region.'
  },

  // ==========================================
  // CATEGORY: AMERICAN & JAPANESE OCCUPATIONS (15 questions)
  // ==========================================
  {
    id: 'aj-1',
    category: 'american-japanese',
    difficulty: 'easy',
    question: 'What treaty, signed on December 10, 1898, officially ended the Spanish-American War and sold the Philippines to the United States for $20 million?',
    options: [
      'Treaty of Manila',
      'Treaty of Paris',
      'Treaty of Versailles',
      'Bates Treaty'
    ],
    answer: 1,
    explanation: 'The Treaty of Paris transferred control of the Philippines, Guam, and Puerto Rico from Spain to the United States. Filipinos were not consulted or represented in these negotiations.'
  },
  {
    id: 'aj-2',
    category: 'american-japanese',
    difficulty: 'medium',
    question: 'Who was the brilliant but hot-tempered Filipino General who founded the Military Academy, edited the paper "La Independencia," and was assassinated by his own presidential guards in Cabanatuan in 1899?',
    options: [
      'Gregorio del Pilar',
      'Antonio Luna',
      'Macario Sakay',
      'Miguel Malvar'
    ],
    answer: 1,
    explanation: 'General Antonio Luna, regarded as the most capable military strategist of the Philippine-American War, was killed on June 5, 1899, by members of the Kawit Battalion who harbored grudges against him.'
  },
  {
    id: 'aj-3',
    category: 'american-japanese',
    difficulty: 'easy',
    question: 'Who served as the first President of the Philippine Commonwealth, established in 1935, and is credited with initiating the national language (Filipino)?',
    options: [
      'Emilio Aguinaldo',
      'Manuel L. Quezon',
      'Sergio Osmeña',
      'Jose P. Laurel'
    ],
    answer: 1,
    explanation: 'Manuel Luis Quezon was inaugurated Commonwealth President on November 15, 1935. He advocated for a national language based on Tagalog, earning him the title "Ama ng Wikang Pambansa".'
  },
  {
    id: 'aj-4',
    category: 'american-japanese',
    difficulty: 'medium',
    question: 'What tragic 1942 event forced over 60,000 Filipino and American soldiers to march more than 100 kilometers under brutal conditions from Mariveles to Capas, Tarlac?',
    options: [
      'The Bataan Death March',
      'The Battle of Corregidor',
      'The Leyte Landing',
      'The Retreat to Tirad Pass'
    ],
    answer: 0,
    explanation: 'Following the surrender of Bataan on April 9, 1942, Imperial Japanese forces marched prisoners of war under blazing heat. Thousands of starving and sick soldiers died or were killed along the way.'
  },
  {
    id: 'aj-5',
    category: 'american-japanese',
    difficulty: 'medium',
    question: 'Which US General famously declared "I shall return" upon evacuating to Australia in 1942, and fulfilled his promise by landing in Leyte on October 20, 1944?',
    options: [
      'Douglas MacArthur',
      'Arthur MacArthur',
      'Dwight Eisenhower',
      'Jonathan Wainwright'
    ],
    answer: 0,
    explanation: 'General Douglas MacArthur made the promise after the fall of Corregidor. He landed on Red Beach, Palo, Leyte alongside President Sergio Osmeña to begin the liberation of the Philippines.'
  },
  {
    id: 'aj-6',
    category: 'american-japanese',
    difficulty: 'hard',
    question: 'Who was the young Filipino general who fought a heroic rear-guard battle at Tirad Pass in 1899 to allow President Emilio Aguinaldo to escape from pursuing American troops?',
    options: [
      'Artemio Ricarte',
      'Gregorio del Pilar',
      'Miguel Malvar',
      'Macario Sakay'
    ],
    answer: 1,
    explanation: 'General Gregorio "Goyo" del Pilar, known as the "Boy General" at just 24 years old, held off the US 33rd Infantry Regiment with 60 men. He was killed in action on December 2, 1899.'
  },
  {
    id: 'aj-7',
    category: 'american-japanese',
    difficulty: 'hard',
    question: 'Which revolutionary leader refused to surrender to the Americans, established the "Republika ng Katagalugan" in the mountains of Rizal, and was hanged as a bandit in 1907?',
    options: [
      'Macario Sakay',
      'Miguel Malvar',
      'Artemio Ricarte',
      'Simeon Ola'
    ],
    answer: 0,
    explanation: 'Macario Sakay wore long hair and operated a guerrilla movement in southern Luzon. He was lured out of the mountains on a false promise of amnesty and was hanged on September 13, 1907.'
  },
  {
    id: 'aj-8',
    category: 'american-japanese',
    difficulty: 'medium',
    question: 'What group of American teachers arrived in the Philippines in August 1901 aboard a transport ship to establish the public school system?',
    options: [
      'The Peace Corps',
      'The Thomasites',
      'The Jesuits',
      'The Pensionados'
    ],
    answer: 1,
    explanation: 'The "Thomasites" (named after the US Army transport ship Thomas) comprised about 500 American educators who laid the foundations of the secular, English-based public school system.'
  },
  {
    id: 'aj-9',
    category: 'american-japanese',
    difficulty: 'hard',
    question: 'In 1901, a tragic encounter in Samar occurred where local fighters killed 48 US soldiers, leading US General Jacob H. Smith to order his troops to turn the island into a "howling wilderness." What is this incident called?',
    options: [
      'The Bud Dajo Massacre',
      'The Balangiga Encounter',
      'The Battle of Manila',
      'The Cabanatuan Raid'
    ],
    answer: 1,
    explanation: 'The Balangiga Encounter on September 28, 1901, was a surprise attack by residents of Balangiga, Samar. In retaliation, the US launched a brutal campaign and seized three church bells (the Balangiga Bells), which were finally returned in 2018.'
  },
  {
    id: 'aj-10',
    category: 'american-japanese',
    difficulty: 'easy',
    question: 'Who served as the President of the Second Philippine Republic, which was a puppet government established under the Japanese military occupation in 1943?',
    options: [
      'Manuel L. Quezon',
      'Jose P. Laurel',
      'Elpidio Quirino',
      'Ramon Magsaysay'
    ],
    answer: 1,
    explanation: 'Dr. Jose P. Laurel accepted the presidency under the Japanese occupation. Historical consensus view is that he accepted the post to protect the civilian population from even harsher military rule.'
  },
  {
    id: 'aj-11',
    category: 'american-japanese',
    difficulty: 'medium',
    question: 'What was the name of the anti-Japanese peasant guerrilla movement in Central Luzon, founded by Luis Taruc in 1942, which later rebelled against the post-war government?',
    options: [
      'Makapili',
      'Hukbalahap (Huks)',
      'NPA',
      'MNLF'
    ],
    answer: 1,
    explanation: 'Hukbalahap stands for "Hukbo ng Bayan Laban sa Hapon" (People\'s Army Against Japan). Composed mainly of farming peasants, they became a highly organized, lethal guerrilla force.'
  },
  {
    id: 'aj-12',
    category: 'american-japanese',
    difficulty: 'hard',
    question: 'Which US act, passed in 1934, officially established the 10-year transition period under the Commonwealth government leading to full Philippine independence?',
    options: [
      'Jones Law (1916)',
      'Tydings-McDuffie Act',
      'Hare-Hawes-Cutting Act',
      'Cooper Act (1902)'
    ],
    answer: 1,
    explanation: 'The Tydings-McDuffie Act (Philippine Independence Act) was drafted in Washington, DC, and accepted by Manuel L. Quezon, setting a firm timeline for the recognition of Philippine sovereignty.'
  },
  {
    id: 'aj-13',
    category: 'american-japanese',
    difficulty: 'medium',
    question: 'What currency, printed on cheap paper by the Japanese military and mockingly called "mickey mouse money," experienced severe hyperinflation during WWII?',
    options: [
      'Pesos',
      'Japanese War Notes',
      'Real',
      'Aldabon'
    ],
    answer: 1,
    explanation: 'The military administration printed massive amounts of fiat pesos. As the war progressed and goods became scarce, the money became almost worthless, requiring suitcases of cash to buy a single loaf of bread.'
  },
  {
    id: 'aj-14',
    category: 'american-japanese',
    difficulty: 'hard',
    question: 'What pro-Japanese militia, founded by Benigno Ramos and Aurelio Alvero, wore blue uniforms and acted as informants and armed guards for the Japanese military?',
    options: [
      'Hukbalahap',
      'Makapili',
      'Kempeitai',
      'Kalibapi'
    ],
    answer: 1,
    explanation: 'The Makapili (Makabayan: Katipunan ng mga Pilipino) were feared collaborators who wore woven baskets (bayong) over their heads with eyeholes to point out suspected guerrillas to the Japanese Kempeitai.'
  },
  {
    id: 'aj-15',
    category: 'american-japanese',
    difficulty: 'hard',
    question: 'In February-March 1945, the liberation of Manila resulted in a devastating urban battle that destroyed historic buildings and claimed the lives of approximately 100,000 civilians. What was this battle called?',
    options: [
      'Battle of Manila',
      'Sack of Manila',
      'Raid of Manila',
      'Liberation of Luzon'
    ],
    answer: 0,
    explanation: 'The Battle of Manila was one of the worst urban warfare scenes in the Pacific. Japanese naval troops under Admiral Sanji Iwabuchi refused to surrender, committing atrocities against civilians and destroying Intramuros.'
  },

  // ==========================================
  // CATEGORY: POST-WAR & MODERN ERA (15 questions)
  // ==========================================
  {
    id: 'mo-1',
    category: 'modern',
    difficulty: 'easy',
    question: 'On what date did the United States officially recognize the independence of the Philippines, marking the birth of the Third Republic?',
    options: [
      'June 12, 1898',
      'July 4, 1946',
      'February 25, 1986',
      'November 15, 1935'
    ],
    answer: 1,
    explanation: 'Following the Treaty of Manila in 1946, the US withdrew sovereignty. July 4 was celebrated as Independence Day until 1962, when President Diosdado Macapagal changed the national holiday to June 12.'
  },
  {
    id: 'mo-2',
    category: 'modern',
    difficulty: 'easy',
    question: 'Which extremely popular President, known as the "Idol of the Masses" and "Champion of the Common Man," died in a tragic plane crash on Mount Manunggal in 1957?',
    options: [
      'Elpidio Quirino',
      'Ramon Magsaysay',
      'Carlos P. Garcia',
      'Diosdado Macapagal'
    ],
    answer: 1,
    explanation: 'Ramon Magsaysay defeated the Huk rebellion, opened Malacañang to ordinary citizens, and wore the Barong Tagalog to his inauguration. His death in the plane "Mt. Pinatubo" devastated the nation.'
  },
  {
    id: 'mo-3',
    category: 'modern',
    difficulty: 'easy',
    question: 'What massive, peaceful civilian and military uprising along a major highway in February 1986 successfully ended the 20-year regime of Ferdinand Marcos?',
    options: [
      'The EDSA People Power Revolution',
      'The First Quarter Storm',
      'The Cavite Mutiny',
      'The Katipunan Revolt'
    ],
    answer: 0,
    explanation: 'The EDSA People Power Revolution (Feb 22–25, 1986) gathered millions of citizens, nuns, and reformist soldiers, successfully deposing Marcos without bloodshed and swearing in Corazon Aquino.'
  },
  {
    id: 'mo-4',
    category: 'modern',
    difficulty: 'medium',
    question: 'Who was the first female President of the Philippines, who took office in 1986 and oversaw the drafting of the current 1987 Philippine Constitution?',
    options: [
      'Gloria Macapagal Arroyo',
      'Corazon Aquino',
      'Imelda Marcos',
      'Miriam Defensor Santiago'
    ],
    answer: 1,
    explanation: 'Corazon "Cory" Aquino, widow of assassinated senator Benigno "Ninoy" Aquino Jr., was installed as President following the EDSA Revolution, restoring democratic institutions.'
  },
  {
    id: 'mo-5',
    category: 'modern',
    difficulty: 'medium',
    question: 'Which President introduced the "Filipino First Policy", which prioritized local businesses and domestic goods over foreign imports in the late 1950s?',
    options: [
      'Diosdado Macapagal',
      'Carlos P. Garcia',
      'Ferdinand Marcos',
      'Ramon Magsaysay'
    ],
    answer: 1,
    explanation: 'President Carlos P. Garcia introduced the Filipino First Policy to foster domestic industrialization and protect Filipino trade interests from foreign dominance.'
  },
  {
    id: 'mo-6',
    category: 'modern',
    difficulty: 'medium',
    question: 'Under which President did the Philippines change its Independence Day celebration from July 4 to June 12?',
    options: [
      'Manuel Roxas',
      'Diosdado Macapagal',
      'Ferdinand Marcos',
      'Corazon Aquino'
    ],
    answer: 1,
    explanation: 'President Diosdado Macapagal signed Proclamation No. 28 in 1962, declaring June 12 a national holiday to honor Aguinaldo\'s declaration of independence in 1898.'
  },
  {
    id: 'mo-7',
    category: 'modern',
    difficulty: 'hard',
    question: 'What is the official document number of the Proclamation of Martial Law signed by Ferdinand Marcos, which placed the entire nation under military rule in September 1972?',
    options: [
      'Proclamation No. 1081',
      'Proclamation No. 88',
      'Proclamation No. 51',
      'Proclamation No. 2001'
    ],
    answer: 0,
    explanation: 'Proclamation No. 1081 was signed by Marcos on September 21, 1972. It was formally announced to the nation on live television and radio on the evening of September 23, 1972.'
  },
  {
    id: 'mo-8',
    category: 'modern',
    difficulty: 'hard',
    question: 'In 1968, what tragic event involving the secret training and alleged massacre of Muslim recruits on Corregidor Island sparked the Moro insurgency in Mindanao?',
    options: [
      'The Jabidah Massacre',
      'The Bud Dajo Incident',
      'The Mendiola Massacre',
      'The Plaza Miranda Bombing'
    ],
    answer: 0,
    explanation: 'The Jabidah Massacre involved the execution of young Tausug and Sama commandos who mutinied when they learned their mission (Operation Merdeka) was to infiltrate Sabah. It led to the founding of the Moro National Liberation Front (MNLF).'
  },
  {
    id: 'mo-9',
    category: 'modern',
    difficulty: 'medium',
    question: 'Which active volcano in Luzon erupted in June 1991, producing the second-largest volcanic eruption of the 20th century and forcing the closure of US military bases?',
    options: [
      'Mount Mayon',
      'Mount Pinatubo',
      'Taal Volcano',
      'Mount Kanlaon'
    ],
    answer: 1,
    explanation: 'Mount Pinatubo\'s cataclysmic eruption ejected billions of tons of ash and aerosols into the stratosphere, lowering global temperatures by 0.5°C and covering Central Luzon in lahar.'
  },
  {
    id: 'mo-10',
    category: 'modern',
    difficulty: 'hard',
    question: 'What is the name of the agreement signed in 2014 between the Philippine Government and the Moro Islamic Liberation Front (MILF), paving the way for the Bangsamoro Autonomous Region?',
    options: [
      'The Tripoli Agreement',
      'The Comprehensive Agreement on the Bangsamoro (CAB)',
      'The Treaty of Manila',
      'The Davao Concord'
    ],
    answer: 1,
    explanation: 'The CAB, signed during the administration of Benigno Aquino III, marked the culmination of 17 years of peace negotiations and resulted in the organic law establishing the Bangsamoro Autonomous Region in Muslim Mindanao (BARMM).'
  },
  {
    id: 'mo-11',
    category: 'modern',
    difficulty: 'medium',
    question: 'Which former President was impeached in 2000 on charges of plunder and corruption, leading to a second peaceful uprising known as EDSA II (EDSA Dos) in January 2001?',
    options: [
      'Fidel V. Ramos',
      'Joseph Estrada',
      'Gloria Macapagal Arroyo',
      'Benigno Aquino III'
    ],
    answer: 1,
    explanation: 'Joseph "Erap" Estrada was accused of receiving illegal gambling pay-offs (Jueteng). When the impeachment court voted not to open an envelope containing crucial bank evidence, people massed at EDSA, forcing his ouster.'
  },
  {
    id: 'mo-12',
    category: 'modern',
    difficulty: 'hard',
    question: 'Which Philippine President was a retired military general who oversaw the economic boom of the mid-1990s under the slogan "Philippines 2000" and signed a peace pact with the MNLF in 1996?',
    options: [
      'Joseph Estrada',
      'Fidel V. Ramos',
      'Gloria Macapagal Arroyo',
      'Ferdinand Marcos'
    ],
    answer: 1,
    explanation: 'Fidel V. Ramos (FVR), who served from 1992 to 1998, focused on deregulation, resolving the power crisis of the early 90s, and pursuing national reconciliation with various rebel factions.'
  },
  {
    id: 'mo-13',
    category: 'modern',
    difficulty: 'hard',
    question: 'Which prominent opposition Senator was shot and killed on the tarmac of the Manila International Airport on August 21, 1983, sparking nationwide protests against the Marcos regime?',
    options: [
      'Benigno "Ninoy" Aquino Jr.',
      'Jose W. Diokno',
      'Lorenzo Tañada',
      'Gerardo Roxas'
    ],
    answer: 0,
    explanation: 'The assassination of Benigno "Ninoy" Aquino Jr. upon returning from exile in the US galvanized the passive opposition. The airport was later renamed Ninoy Aquino International Airport (NAIA) in his honor.'
  },
  {
    id: 'mo-14',
    category: 'modern',
    difficulty: 'easy',
    question: 'Which archipelago nation located in Southeast Asia consists of 7,641 islands (updated from the traditional 7,107) and has its capital in Manila?',
    options: [
      'Indonesia',
      'The Philippines',
      'Malaysia',
      'East Timor'
    ],
    answer: 1,
    explanation: 'In 2016, the National Mapping and Resource Information Authority (NAMRIA) of the Philippines announced it had mapped 534 previously unrecorded islands, updating the total count to 7,641.'
  },
  {
    id: 'mo-15',
    category: 'modern',
    difficulty: 'hard',
    question: 'What landmark 2016 international legal ruling, filed under the UNCLOS, rejected China\'s historical "nine-dash line" claims over resource-rich waters of the West Philippine Sea?',
    options: [
      'The South China Sea Arbitration (The Hague)',
      'The Treaty of Paris Boundary Review',
      'The Manila Bay Environment Accord',
      'The Scarborough Shoal Demarcation Act'
    ],
    answer: 0,
    explanation: 'The Permanent Court of Arbitration in The Hague ruled unanimously in favor of the Philippines, finding that China has no legal basis for historic rights within the nine-dash line and that its actions breached Philippine sovereign rights inside its EEZ.'
  }
];

// Timelines for Chronology Mode
// Each timeline contains exactly 4 events that must be ordered from oldest (index 0) to newest (index 3).
export const timelines = [
  {
    id: 'tl-1',
    title: 'The Road to Revolution',
    hint: 'From reformist writings to the declaration of war.',
    events: [
      { text: 'Founding of the Katipunan (KKK) in Manila', year: 1892, clue: 'Founded on July 7, right after La Liga Filipina was dissolved.' },
      { text: 'The Cry of Pugad Lawin and tearing of the Cedulas', year: 1896, clue: 'Happened in August, launching the active armed conflict.' },
      { text: 'Declaration of Independence in Kawit, Cavite', year: 1898, clue: 'Emilio Aguinaldo proclaimed independence in June.' },
      { text: 'Inauguration of the First Philippine Republic (Malolos)', year: 1899, clue: 'The Malolos Republic was formally established in January.' }
    ]
  },
  {
    id: 'tl-2',
    title: 'World War II Timeline',
    hint: 'From the initial invasion to the return of MacArthur.',
    events: [
      { text: 'Surrender of Allied Forces in Bataan (Death March)', year: 1942, clue: 'Occurred in April, shortly after the Japanese invasion.' },
      { text: 'Establishment of the Japanese-puppet Second Republic', year: 1943, clue: 'Jose P. Laurel was inaugurated as president in October.' },
      { text: 'General Douglas MacArthur lands in Leyte ("I shall return")', year: 1944, clue: 'MacArthur landed in October to fulfill his famous vow.' },
      { text: 'The Battle of Manila and Liberation of the Capital', year: 1945, clue: 'A devastating urban battle that raged in early spring.' }
    ]
  },
  {
    id: 'tl-3',
    title: 'Pre-Colonial Contacts & Conquests',
    hint: 'From ancient writing to Spanish unification.',
    events: [
      { text: 'Creation of the Laguna Copperplate Inscription', year: 900, clue: 'The oldest known written document found in the islands.' },
      { text: 'The Arrival of Ferdinand Magellan in Samar', year: 1521, clue: 'The first European contact recorded by Antonio Pigafetta.' },
      { text: 'Miguel López de Legazpi performs the Sandugo in Bohol', year: 1565, clue: 'Legazpi\'s blood compact with Datu Sikatuna.' },
      { text: 'Establishment of the Manila Galleon Trade route', year: 1572, clue: 'Legazpi established Manila as the capital, linking it to Acapulco.' }
    ]
  },
  {
    id: 'tl-4',
    title: 'Early American Rule & Resistance',
    hint: 'From the sale of the islands to civilian administration.',
    events: [
      { text: 'Signing of the Treaty of Paris between Spain and the US', year: 1898, clue: 'Signed in December, ending the Spanish-American War.' },
      { text: 'Heroic rear-guard action of General Goyo del Pilar at Tirad Pass', year: 1899, clue: 'Del Pilar was killed in December while defending Aguinaldo\'s retreat.' },
      { text: 'The Balangiga Encounter in Samar and capture of the Bells', year: 1901, clue: 'A surprise assault in Samar led by Vicente Lukban\'s forces.' },
      { text: 'Hanging of revolutionary leader Macario Sakay', year: 1907, clue: 'Sakay was executed after refusing to recognize US sovereignty.' }
    ]
  },
  {
    id: 'tl-5',
    title: 'Modern Presidents & Milestones',
    hint: 'From post-war recovery to contemporary achievements.',
    events: [
      { text: 'Inauguration of the Third Republic and Independence from the US', year: 1946, clue: 'Manuel Roxas took office on July 4.' },
      { text: 'Declaration of Martial Law under Proclamation No. 1081', year: 1972, clue: 'Signed by Ferdinand Marcos in September.' },
      { text: 'The EDSA People Power Revolution installs Corazon Aquino', year: 1986, clue: 'Millions of citizens peacefully overthrew the regime.' },
      { text: 'The Permanent Court of Arbitration rules on the West Philippine Sea', year: 2016, clue: 'The historic ruling at The Hague under UNCLOS.' }
    ]
  }
];

// Historical rank badges based on accumulated XP
export const achievements = [
  { id: 'badge-explorer', title: 'Lakbay-Lahi (Explorer)', description: 'Answered your very first question', xpRequired: 10 },
  { id: 'badge-warrior', title: 'Kawani (Officer)', description: 'Reached 200 XP', xpRequired: 200 },
  { id: 'badge-soldier', title: 'Katipunero (Soldier)', description: 'Reached 500 XP', xpRequired: 500 },
  { id: 'badge-intellectual', title: 'Ilustrado (Scholar)', description: 'Reached 1,000 XP', xpRequired: 1000 },
  { id: 'badge-general', title: 'Heneral (General)', description: 'Reached 2,000 XP', xpRequired: 2000 },
  { id: 'badge-hero', title: 'Bayani (National Hero)', description: 'Reached 3,500 XP', xpRequired: 3500 }
];
