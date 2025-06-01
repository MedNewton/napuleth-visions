"use client"

import { useState } from "react";
import styles from "./index.module.css";
import Image from "next/image";
import Link from "next/link";
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/zoom.css';


import img1 from '../assets/images/image1.webp'
import logo from '../assets/images/logo.webp'
import itFlag from '../assets/images/italian.png'
import enFlag from '../assets/images/english.png'


export default function Home() {

  const [language, setLanguage] = useState<string>("en")

  const toggleLanguage = () => {
    if (language == "en") setLanguage("it");
    else if (language == "it") setLanguage("en")
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Menu menuButton={
            <h4 style={{cursor: 'pointer'}}>
              <span>{language == "en" ? "Language" : "Lingua"}</span>
              <span style={{fontSize: '0.6rem'}}>&#9660;</span>
            </h4>
          } menuClassName="my-menu" direction="bottom" align="center" position="auto" arrow={false}>
            <MenuItem className="my-menuitem" onClick={toggleLanguage} style={{ cursor: 'pointer' }}>{language == "en" ? "English" : "Inglese"}</MenuItem>
            <MenuItem className="my-menuitem" onClick={toggleLanguage} style={{ cursor: 'pointer' }}>{language == "en" ? "Italian" : "Italiano"}</MenuItem>
          </Menu>
        </div>
        <div className={styles.imageContainer}>
          <Image src={logo} alt="logo" width={200} height={80} style={{
            filter: 'brightness(0)'
          }} />
        </div>
        {
          language == "it" && (
            <div>
              <p>
                Napuleth Visions è un progetto espositivo che si inserisce nel contesto di Napuleth con l&apos;obiettivo di creare una
                piattaforma di scambio tra la realtà delle criptovalute e il sistema dell&apos;arte contemporanea. Il progetto ambisce a
                diventare un appuntamento ricorrente, che esplora le intersezioni tra economia digitale e pratiche artistiche per favorire
                un dialogo critico sulle trasformazioni del valore nell&apos;era della decentralizzazione.
              </p>
              <p>
                Napuleth Visions è un&apos;iniziativa innovativa, nata dall&apos;energia e dalla visione di un gruppo di giovani creativi altamente
                qualificati, con competenze sia nel campo dell&apos;arte che della tecnologia. La mostra non è solo un evento espositivo, ma
                un punto d&apos;incontro stabile tra arte e innovazione, destinato a crescere e a trasformarsi anno dopo anno. L&apos;obiettivo a
                lungo termine è sviluppare soluzioni tecnologiche su misura per il mondo dell&apos;arte, ridefinendo le modalità di fruizione
                e produzione artistica nell&apos;era digitale.
              </p>
            </div>
          )
        }
        {
          language == "en" && (
            <div>
              <p>
                Napuleth Visions is an exhibition project that fits into the context of Napuleth with the aim of creating a platform for exchange between the cryptocurrency world and the contemporary art system. The project aims to become a recurring event, exploring the intersections between the digital economy and artistic practices to foster a critical dialogue on the transformations of value in the era of decentralization.
              </p>
              <p>
                Napuleth Visions is an innovative initiative, born from the energy and vision of a group of highly qualified young creatives, with skills in both art and technology. The exhibition is not just an exhibition event, but a stable meeting point between art and innovation, destined to grow and transform year after year. The long-term goal is to develop tailor-made technological solutions for the art world, redefining the ways of enjoying and producing art in the digital era.
              </p>
            </div>
          )
        }



        {
          language == "it" && (
            <div>
              <h4 className={styles.title}>
                Abstract
              </h4>
              <p>
                La mostra esplora il concetto di &quot;concrescenza&quot;, inteso come risultato di forze in continua interazione che danno forma alla materia, al significato e al valore. Ispirata dal pensiero di Bruno Latour, la mostra mette in discussione le tradizionali dicotomie tra fisico e digitale, soggetto e oggetto, arte e mercato.
              </p>
              <p>
                Attraverso il confronto con il fenomeno delle criptovalute, Concrescenze analizza il valore come entità fluida e in evoluzione, plasmata dalle dinamiche di rete. Il parallelo tra blockchain e arte digitale diventa un punto chiave per comprendere come il valore, liberato dai supporti fisici, si costruisca attraverso interazioni e riconfigurazioni costanti.
              </p>
              <p>
                La mostra, che avrà luogo a Villa Doria d&apos;Angri a Posillipo nell&apos;ambito di Napuleth Open Village 2025, vuole essere una piattaforma di sperimentazione tra arte e nuove economie digitali. Attraverso un percorso immersivo, invita il pubblico a riflettere sul ruolo della rete e dell&apos;ibridazione nella ridefinizione del valore nell&apos;era contemporanea.
              </p>
            </div>
          )
        }
        {
          language == "en" && (
            <div>
              <h4 className={styles.title}>
                Abstract
              </h4>
              <p>
                The exhibition explores the concept of &quot;concrescence&quot;, understood as the result of continuously interacting forces that shape
                matter, meaning and value. Inspired by the thought of Bruno Latour, the exhibition questions traditional
                dichotomies between physical and digital, subject and object, art and market.
              </p>
              <p>
                Through the comparison with the phenomenon of cryptocurrencies, Concrescenze analyzes value as a fluid and evolving entity, shaped by network dynamics. The parallel between blockchain and digital art becomes a key point to understand how value, freed from physical supports, is built through constant interactions and reconfigurations.
              </p>
              <p>
                The exhibition, which will take place at Villa Doria d&apos;Angri in Posillipo as part of Napuleth Open Village 2025, aims to be a platform for experimentation between art and new digital economies. Through an immersive journey, it invites the public to reflect on the role of the network and hybridization in redefining value in the contemporary era.
              </p>
            </div>
          )
        }

{
          language == "it" && (
            <div>
              <h4 className={styles.title}>
                Artisti
              </h4>
              <h4 className={styles.artists}>
                Clarissa Falco
              </h4>
              <p>
                Clarissa Falco (Genova, 1995) lavora come artista visiva e performativa su tematiche legate al corpo, riflettendo sulla sua condizione in un dialogo costante con elementi macchinici. Le sue opere esprimono l’idea del corpo concepito come macchina. La distinzione tra soggetto e oggetto diventa evidente: il soggetto viene privato della sua apparenza per diventare motore e ingranaggio, parte di una macchina. Nell’attività performativa il binarismo macchina-corpo si esprime attraverso il gesto automatico e ripetitivo, intrappolato in un loop temporale sempre uguale a sé stesso. Falco ha conseguito un Master in Arti Visive e Studi Curatoriali presso la NABA (2020). 
              </p>
              <p>
                Mostre recenti: Crashing Ceramics, group exhibition curated by Feng Boyi, Longquan Wangou, China, 4003, personale, Galleria Ipercubo, Milano (2024); Master Control Program, performance con K. Jarnuszkiewicz, mostra Adolf Ryszka. Space bears shadow, Zachęta, National Gallery of Art, Varsavia (2023); Maybe One Animal Bit It Twice, personale, ScopeBLN, curata da Boris Kostadinov, Berlino (2023); Frictions, MUG Giannini Museum, curata da Galleria Monti e Ilaria Monti, Latina (2022); Mirrored in Spectral Machines, con Camilla Alberti, SpazioSerra, Milano (2022).
              </p>

              <h4 className={styles.artists}>
                Lorenzo Lunghi
              </h4>
              <p>
                Lorenzo Lunghi (Crema 1993) è uno scultore e performance artist. La sua pratica scultorea-performativa nasce dal DIY tra immaginario neo-luddista e alienazione fantascientifca, in una prospettiva magico- rudimentale. Dopo il BFA presso l·Accademia Carrara, Bergamo (2018), consegue il MFA presso HEAD, Ginevra (2021). 
              </p>
              <p> 
                Ha fatto parte del collettivo DITTO (2016-2019), di cui citiamo le mostre: Eclissi (MACAO, Milano, 2018); Spettri (Villa Farinacci, Roma, 2018); Blind Date (Current, Milano, 2018). Dal 2019 cura mostre e workshop in spazi extraurbani: Erbacce (Brugherio, 2020); Miraggio (Fontanile Fontanone, 2019). Ha esposto in diversi contesti, fra cui: La Rada (Locarno, 2023); Manifattura Tabacchi (Firenze, 2022); Plattform (Kulturhaus Palazzo, 2022); Giulietta (Basilea, 2021); ANCONTEMPORANEA (Ancona, 2021); Localedue (Bologna, 2021); Palazzo delle Esposizioni (Roma, 2020); Sonnenstube (Spazio Morel, 2019).
              </p>

              <h4 className={styles.artists}>
                Adriano Tenore
              </h4>
              <p>
                Adriano Tenore (Napoli, 1991) è un artista multimediale italo-francese. Grazie alla sua formazione accademica in Antropologia e Sociologia, la sua ricerca si concentra principalmente sulla cultura umana intesa come risultato di processi di creazione sparsi, spesso geograficamente e cronologicamente disorganici, ma in qualche modo convergenti in un unico e sfaccettato flusso di produzione culturale. La tendenza ad adottare una prospettiva più ampia consente di andare oltre una visione strettamente culturale, intrecciandola con le forze biologiche che guidano il percorso evolutivo della nostra specie.
              </p>
              <p>                 
                La sua pratica artistica si esprime principalmente attraverso spazi audiovisivi immersivi e interattivi dove, oltre ai contenuti, il significato emerge dal contesto e dall’azione. Centrale nel suo approccio è un ritorno a segni istintivi e primordiali, capaci di evocare emozioni umane fondamentali e di risuonare su un piano profondamente sensoriale. Attualmente lavora come CG Lead e Art Director; negli ultimi anni il suo focus si è rivolto al Design Interattivo e alle esperienze immersive mediate dall’Intelligenza Artificiale, indagando il rapporto sempre più stretto tra esseri umani ed AI, ridefinendo il concetto di transumanesimo e alimentando nuovi input nell’interdipendenza tra natura e tecnologia.
              </p>
              <p> 
                Mostre recenti: Water me (2025); Bestiario sintetico (La Santissima, Napoli 2025); Exodus (Fondazione Morra Greco, Napoli, 2024; Casa delle Donne, Roma); ZTA, Napoli; Ex Asilo Filangieri, Napoli; Ex OPG, Napoli; Kung flu (LightBox.NY Studios, 2018); Onironautica (Ex Asilo Filangieri, Napoli, 2016).
              </p>

              <h4 className={styles.artists}>
                Emilio Vavarella
              </h4>
              <p>
                Emilio Vavarella (Ph.D., Harvard University) coniuga ricerca interdisciplinare e sperimentazione mediale. Vavarella è Assistant Professor of Media and Film Studies allo Skidmore College (NY) e artista in residenza presso il Broad Institute di MIT e Harvard. 
              </p>
              <p> 
                Il suo lavoro è stato esposto alla 18ma Biennale di Venezia (Padiglione Italia, Architettura), Museo MAXXI di Roma, Museo Reina Sofia di Madrid, Museo dell’Hermitage di S. Pietroburgo, The Photographers’ Gallery di Londra, KANAL – Centre Pompidou a Bruxelles, MAMbo – Museo d’Arte Moderna di Bologna, Madre – Museo d’Arte Contemporanea di Napoli, Museum of Contemporary Art di Zagabria, Museu de Ciències Naturals di Barcellona, Museo Nacional Bellas Artes di Santiago del Cile, Museum of Contemporary Art Vojvodina di Novi Sad (Serbia), il Museo MBAL (Svizzera), il National Art Center di Tokyo, l’Eyebeam Art + Technology Center di New York, la Off – Biennale de Il Cairo, la BJCEM – Biennale del Mediterraneo, e la Biennale di Kiev. 
              </p>
              <p> 
                I suoi film sono stati proiettati presso il Toronto Images Festival, il Torino Film Festival, Jeu de Paume (Parigi), HKW – Haus der Kulturen der Welt (Berlino), e in molteplici festival di arti mediali, tra cui l’EMAF – European Media Art Festival di Osnabrück, il JMAF – Japan Media Arts Festival di Tokyo, il Filmwinter – Festival for Expanded Media di Stoccarda, e il NYEAF – New York Electronic Arts Festival. 
              </p>
              <p> 
                Vavarella è stato insignito di numerosi premi e riconoscimenti ed è stato vincitore di numerosi bandi e competizioni artistiche e scientifiche. Tra i più significativi si segnalano l’Italian Council award (2019) e l’Harvard Horizon Fellowship (2023). Il suo lavoro appare regolarmente su quotidiani, riviste di settore e pubblicazioni scientifiche.
              </p>

            </div>
          )
        }
        {
          language == "en" && (
            <div>
              <h4 className={styles.title}>
                Artists
              </h4>
              <h4 className={styles.artists}>
                Clarissa Falco
              </h4>
              <p>
                Clarissa Falco (Genoa, 1995) is a visual and performance artist whose practice explores themes related to the body, reflecting on its condition in constant dialogue with machinic elements. Her works expresses the idea of the body conceived as a machine. The distinction between subject and object becomes apparent: the subject is stripped of its appearance to become a motor and gear, part of a machine. In her performances, the machine-body binary is conveyed through automatic, repetitive gestures, trapped in a temporal loop that constantly repeats itself. Falco holds a Master’s degree in Visual Arts and Curatorial Studies from NABA (2020).
              </p>
              <p>
                Recent exhibitions include: Crashing Ceramics, group exhibition curated by Feng Boyi, Longquan Wangou, China; 4003, solo show, Galleria Ipercubo, Milan (2024); Master Control Program, performance with K. Jarnuszkiewicz, part of the exhibition Adolf Ryszka. Space Bears Shadow, Zachęta – National Gallery of Art, Warsaw (2023); Maybe One Animal Bit It Twice, solo show, ScopeBLN, curated by Boris Kostadinov, Berlin (2023); Frictions, MUG Giannini Museum, curated by Galleria Monti and Ilaria Monti, Latina (2022); Mirrored in Spectral Machines, with Camilla Alberti, SpazioSerra, Milan (2022).
              </p>

              <h4 className={styles.artists}>
                Lorenzo Lunghi
              </h4>
              <p>
                Lorenzo Lunghi (Crema, 1993) is a sculptor and performance artist. His sculpture-performance practice comes from DIY and lies between neo-Luddite imagery and sci-fi alienation, in a magical-rudimental perspective. He holds a BFA from the Accademia Carrara, Bergamo (2018), and a MFA from HEAD, Geneva (2021). 
              </p>
              <p> 
                He was part of the DITTO collective (2016-2019), whose exhibitions we mention: Eclissi (MACAO, Milano, 2018); Spettri (Villa Farinacci, Roma, 2018); Blind Date (Current, Milano, 2018). Since 2019 starts curating a series of exhibitions and workshop in extra-urban sites: Erbacce (Brugherio, 2020); Miraggio (Fontanile Fontanone, 2019). He exhibited in various art spaces, including: La Rada (Locarno, 2023); Manifattura Tabacchi (Florence, 2022); Plattform22 (Kulturhaus Palazzo, 2022); Giulietta (Basel, 2021); ANCONTEMPORANEA (Ancona, 2021); Localedue (Bologna, 2021); Palazzo delle Esposizioni (Rome, 2020); Sonnenstube (Spazio Morel, 2019).
              </p>

              <h4 className={styles.artists}>
                Adriano Tenore
              </h4>
              <p>
                Adriano Tenore (Napoli, 1991) is an Italian-French Multimedia Artist. Due to his academic background in Anthropology and Sociology, his exploration mainly focuses on human culture as the result of scattered processes of creation, often geografically and chronologically disorganic but somehow converging in a unique multifaceted stream of cultural production. This tendency to adopt a broader perspective allows to move beyond a strictly cultural point of view, intertwining it instead with the biological forces that drive the evolutionary journey of our species.
              </p>
              <p>                   
                His artistic practice tends to express itself through immersive and interactive audio-visual spaces where, in addition to content, the meaning emerges through context and action. Central to his approach is a return to instinctive, primal signs that evoke fundamental human emotions and resonate on a deeply sensory level. Currently working as CG Lead and Art Director, his focus in the last years has been on Interactive Design and Ai-mediated immersive experiences, reasearching on the growing relationship between humans and artificial intelligence, redefining the concept of trans-humanism and feeding new inputs in the interdependence between nature and technology. 
              </p>
              <p> 
                Recent exhibitions include: Water me (2025); Bestiario sintetico (La Santissima, Naples, 2025); Exodus (Fondazione Morra Greco, Naples, 2024; Casa delle Donne, Rome); ZTA, Naples; Ex Asilo Filangieri, Naples; Ex OPG, Naples; Kung Flu (LightBox.NY Studios, 2018); Onironautica (Ex Asilo Filangieri, Naples, 2016).
              </p>

              <h4 className={styles.artists}>
                Emilio Vavarella
              </h4>
              <p>
                Emilio Vavarella (Ph.D., Harvard University) combines interdisciplinary research with media experimentation. Vavarella is Assistant Professor of Media and Film Studies at Skidmore College (NY) and artist-in-residence at the Broad Institute of MIT and Harvard. 
              </p>
              <p> 
                His work has been exhibited at the 18th Venice Biennale (Italian Pavilion, Architecture), MAXXI Museum in Rome, Reina Sofia Museum in Madrid, the Hermitage Museum in St. Petersburg, The Photographers’ Gallery in London, KANAL – Centre Pompidou in Brussels, MAMbo – Museum of Modern Art in Bologna, Madre – Museum of Contemporary Art in Naples, Museum of Contemporary Art in Zagreb, Museu de Ciències Naturals in Barcelona, Museo Nacional Bellas Artes in Santiago de Chile, Museum of Contemporary Art Vojvodina in Novi Sad (Serbia), MBAL Museum (Switzerland), the National Art Center in Tokyo, Eyebeam Art + Technology Center in New York, the Off-Biennale in Cairo, the BJCEM – Biennale of the Mediterranean, and the Kyiv Biennale.
              </p>
              <p> 
                His films have been screened at the Toronto Images Festival, Torino Film Festival, Jeu de Paume (Paris), HKW – Haus der Kulturen der Welt (Berlin), and at various media art festivals including EMAF – European Media Art Festival in Osnabrück, JMAF – Japan Media Arts Festival in Tokyo, Filmwinter – Festival for Expanded Media in Stuttgart, and NYEAF – New York Electronic Arts Festival.
              </p>
              <p> 
                Vavarella has received numerous awards and recognitions and has been the winner of several artistic and scientific grants and competitions. Notable among them are the Italian Council award (2019) and the Harvard Horizon Fellowship (2023). His work is regularly featured in newspapers, art magazines, and academic publications.
              </p>

            </div>
          )
        }


        {
          language == "it" && (
            <div>
              <h4 className={styles.title}>
                Contatti
              </h4>
              <p>
                Per informazioni sui livelli di partnership e sponsorizzazioni, contattare: <Link href="mailto:visions@napuleth.org" style={{ textDecoration: "underline" }}>visions@napuleth.org</Link>
              </p>
            </div>
          )
        }
        {
          language == "en" && (
            <div>
              <h4 className={styles.title}>
                Contact
              </h4>
              <p>
                For inquiries regarding limited partnerships and sponsorships tiers, please contact: <Link href="mailto:visions@napuleth.org" style={{ textDecoration: "underline" }}>visions@napuleth.org</Link>
              </p>
            </div>
          )
        }

        <div className={styles.imageContainer}>
          <Image src={img1} alt="napuleth visions" width="1000"
            height="500"
            sizes="100vw, (max-width: 600px) 500px" objectFit="cover"></Image>
        </div>

      </div>
    </main>
  );
}
