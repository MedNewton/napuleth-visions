"use client"

import { useState } from "react";
import styles from "./index.module.css";
import Image from "next/image";
import Link from "next/link";
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/zoom.css';


import img1 from '../assets/images/image2.webp'
import sanCarlo from '../assets/images/SanCarlo.png'
import civita from '../assets/images/civita.png'
import commune from '../assets/images/commune.webp'
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
            <h4 style={{ cursor: 'pointer' }}>
              <span>{language == "en" ? "Language" : "Lingua"}</span>
              <span style={{ fontSize: '0.6rem' }}>&#9660;</span>
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
                Napuleth Visions è un progetto culturale e format espositivo nato all&apos;interno di Napuleth
                Open Village, che promuove il dialogo e lo scambio tra il mondo del Web3 e l&apos;arte
                contemporanea. Ideato da un gruppo di giovani creativi con competenze trasversali in arte e
                tecnologia, Napuleth Visions vuole diventare un appuntamento ricorrente, esplorando le
                intersezioni tra economia digitale, innovazione e pratiche artistiche. L&apos;iniziativa si propone
                non solo come evento espositivo, ma come piattaforma stabile e in crescita, con l&apos;obiettivo di
                sviluppare soluzioni tecnologiche su misura per ridefinire la produzione e la fruizione artistica
                nell&apos;era dell&apos;informazione e della digitalizzazione.

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
              <h3 className={styles.title} style={{ marginBottom: '2rem' }}>
                Prima edizione di Napuleth Visions 2025
              </h3>
              <h5 className={styles.subtitle}>
                Foresta di Cristallo
              </h5>
              <p style={{
                fontWeight: 700
              }}>
                A cura di Alessio Esposito
              </p>
              <p>
                Dal 17 al 19 luglio 2025, negli spazi di Villa Doria D&apos;Angri a Napoli, prende vita Foresta di
                Cristallo, la mostra inaugurale di Napuleth Visions. L&apos;esposizione riunisce le opere di
                Clarissa Falco, Lorenzo Lunghi, Adriano Tenore ed Emilio Vavarella.
              </p>
              <p>
                Il titolo della mostra si ispira al romanzo di J.G. Ballard The Crystal World (1966), che
                descrive una realtà in cui la natura si cristallizza, dissolvendo le differenze tra esseri viventi e
                oggetti. Questa metafora guida la riflessione sulle trasformazioni contemporanee in cui
                confini tradizionali si sfumano: tra umano e non umano, reale e digitale, estetico ed
                economico.
              </p>
              <p>
                Foresta di Cristallo esplora, attraverso le opere esposte, la dematerializzazione del valore e
                la ridefinizione del senso in un mondo in cui l&apos;arte, la tecnologia e le economie digitali si
                intrecciano in nuove forme di relazione e mutazione.
              </p>
            </div>
          )
        }
        {
          language == "en" && (
            <div>
              <h3 className={styles.title} style={{ marginBottom: '2rem' }}>
                First edition of Napuleth Visions 2025
              </h3>
              <h5 className={styles.subtitle}>
                La Foresta Di Cristallo
              </h5>
              <p style={{
                fontWeight: 700
              }}>
                Curated by Alessio Esposito
              </p>
              <p>
                From 17 to 19 July 2025, in the spaces of Villa Doria D&apos;Angri in Naples, Foresta di
                Cristallo, the inaugural exhibition of Napuleth Visions, comes to life. The exhibition brings together the works of
                Clarissa Falco, Lorenzo Lunghi, Adriano Tenore and Emilio Vavarella.
              </p>
              <p>
                The title of the exhibition is inspired by J.G. Ballard’s novel The Crystal World (1966), which
                describes a reality in which nature crystallizes, dissolving the differences between living beings and
                objects. This metaphor guides the reflection on contemporary transformations in which
                traditional boundaries are blurred: between human and non-human, real and digital, aesthetic and
                economic.
              </p>
              <p>
                Foresta di Cristallo explores, through the works exhibited, the dematerialization of value and the redefinition of meaning in a world in which art, technology and digital economies intertwine in new forms of relationship and mutation.
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
                Clarissa Falco (Genova, 1995) ha conseguito nel 2020 un Master in Arti Visive e Studi
                Curatoriali presso la NABA. La sua pratica artistica oscilla tra arte visiva e performativa,
                indagando il corpo come dispositivo in dialogo con l&apos;elemento macchinico. Al centro della
                sua ricerca vi è la spoliazione dell&apos;identità visiva del soggetto, che si trasforma in motore e
                ingranaggio di un sistema. Nella dimensione performativa, il binomio corpo-macchina si
                manifesta attraverso gesti automatici e ripetitivi, inscritti in un loop temporale costante e
                ossessivo. Tra le mostre più recenti: Crashing Ceramics, a cura di Feng Boyi e Longquan
                Wangou, in Cina; 4003, Galleria Ipercubo, Milano (2024); Master Control Program, una
                performance con K. Jarnuszkiewicz parte della mostra Adolf Ryszka. Space bears shadow,
                Zachęta, National Gallery of Art, Varsavia (2023); Maybe One Animal Bit It Twice alla
                ScopeBLN, curata da Boris Kostadinov, Berlino (2023); Frictions, curata da Galleria Monti e
                Ilaria Monti al MUG Giannini Museum di Latina (2022); Mirrored in Spectral Machines, con
                Camilla Alberti, SpazioSerra, Milano (2022).

              </p>

              <h4 className={styles.artists}>
                Lorenzo Lunghi
              </h4>
              <p>
                Lorenzo Lunghi (Crema 1993)  trae la sua pratica scultoreo-performativa da un DIY a metà
                tra immaginario neo-luddista e alienazione fantascientifica, in una prospettiva
                magico-rudimentale. Dopo il BFA presso l&apos;Accademia Carrara, Bergamo (2018), consegue il
                MFA presso HEAD, Ginevra (2021). Ha fatto parte del collettivo DITTO (2016-2019), di cui
                citiamo le mostre: Eclissi (MACAO, Milano, 2018); Spettri (Villa Farinacci, Roma, 2018);
                Blind Date (Current, Milano, 2018). Dal 2019 cura mostre e workshop in spazi extraurbani:
                Erbacce (Brugherio, 2020); Miraggio (Fontanile Fontanone, 2019). Ha esposto in diversi
                contesti, tra cui: La Rada (Locarno, 2023); Manifattura Tabacchi (Firenze, 2022); Plattform
                (Kulturhaus Palazzo, 2022); Giulietta (Basilea, 2021); ANCONTEMPORANEA (Ancona,
                2021); Localedue (Bologna, 2021); Palazzo delle Esposizioni (Roma, 2020); Sonnenstube
                (Spazio Morel, 2019).

              </p>

              <h4 className={styles.artists}>
                Adriano Tenore
              </h4>
              <p>
                Adriano Tenore (Napoli, 1991)  è un artista multimediale italo-francese. Con un background
                in Antropologia e Sociologia, sviluppa una ricerca che guarda alla cultura umana come un
                insieme di processi creativi sparsi e discontinui, ma capaci di convergere in un flusso
                condiviso di significati. Il suo sguardo, ampio e trasversale, unisce dimensioni culturali e
                biologiche, esplorando come evoluzione e tecnologia plasmino la nostra esperienza del
                mondo. La sua pratica si concentra su ambienti audiovisivi immersivi e interattivi, in cui il
                senso non nasce solo dai contenuti, ma anche dal contesto e dall&apos;esperienza diretta. Al
                centro del suo approccio c&apos;è un ritorno a segni semplici, viscerali, capaci di toccare corde
                emotive profonde e universali. Oggi lavora come CG Lead e Art Director, con un interesse
                sempre più marcato verso il design interattivo e le esperienze immersive basate
                sull&apos;Intelligenza Artificiale. Le sue opere riflettono sul rapporto tra umano e AI, mettendo in
                discussione i confini del transumanesimo e sperimentando nuove connessioni tra natura e
                tecnologia. Tra le mostre più recenti: Water me (2025); Bestiario sintetico (La Santissima,
                Napoli, 2025); Exodus (Fondazione Morra Greco, Napoli, 2024; Casa delle Donne, Roma);
                ZTA (Napoli); Kung flu (LightBox.NY Studios, 2018); Onironautica (Ex Asilo Filangieri,
                Napoli, 2016).

              </p>

              <h4 className={styles.artists}>
                Emilio Vavarella
              </h4>
              <p>
                Emilio Vavarella (Monfalcone, 1989) Ph.D. presso la Harvard University, coniuga ricerca
                interdisciplinare e sperimentazione mediale. Egli è inoltre Assistant Professor of Media and
                Film Studies allo Skidmore College (NY) e artista in residenza presso il Broad Institute di
                MIT e Harvard. Il suo lavoro è stato esposto alla 18ma Biennale di Venezia (Padiglione Italia,
                Architettura), Museo MAXXI di Roma, Museo Reina Sofia di Madrid, Museo dell&apos;Hermitage
                di S. Pietroburgo, The Photographers&apos; Gallery di Londra, KANAL – Centre Pompidou a
                Bruxelles, MAMbo – Museo d&apos;Arte Moderna di Bologna, Madre – Museo d&apos;Arte
                Contemporanea di Napoli, Museum of Contemporary Art di Zagabria, Museu de Ciències
                Naturals di Barcellona, Museo Nacional Bellas Artes di Santiago del Cile, Museum of
                Contemporary Art Vojvodina di Novi Sad (Serbia), il Museo MBAL (Svizzera), il National Art
                Center di Tokyo, l&apos;Eyebeam Art + Technology Center di New York, la Off – Biennale de Il
                Cairo, la BJCEM – Biennale del Mediterraneo, e la Biennale di Kiev. I suoi film sono stati
                proiettati presso il Toronto Images Festival, il Torino Film Festival, Jeu de Paume (Parigi),
                HKW – Haus der Kulturen der Welt (Berlino), e in molteplici festival di arti mediali, tra cui
                l&apos;EMAF – European Media Art Festival di Osnabrück, il JMAF – Japan Media Arts Festival di
                Tokyo, il Filmwinter – Festival for Expanded Media di Stoccarda, e il NYEAF – New York
                Electronic Arts Festival. Vavarella è stato insignito di numerosi premi e riconoscimenti ed è
                stato vincitore di numerosi bandi e competizioni artistiche e scientifiche. Tra i più significativi
                si segnalano l&apos;Italian Council Award (2019) e l&apos;Harvard Horizon Fellowship (2023). Il suo
                lavoro appare regolarmente su quotidiani, riviste di settore e pubblicazioni scientifiche
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
                Clarissa Falco (Genoa, 1995) obtained a Master in Visual Arts and Curatorial Studies at NABA in 2020. Her artistic practice oscillates between visual and performative art,
                investigating the body as a device in dialogue with the machinic element. At the center of
                her research is the stripping of the visual identity of the subject, which transforms
                itself into the engine and gear of a system. In the performative dimension, the body-machine
                binomial manifests itself through automatic and repetitive gestures, inscribed in a constant
                and obsessive temporal loop. Among the most recent exhibitions: Crashing Ceramics, curated by Feng Boyi and Longquan
                Wangou, in China; 4003, Galleria Ipercubo, Milan (2024); Master Control Program, a
                performance with K. Jarnuszkiewicz part of the exhibition Adolf Ryszka. Space bears shadow,
                Zachęta, National Gallery of Art, Warsaw (2023); Maybe One Animal Bit It Twice at ScopeBLN, curated by Boris Kostadinov, Berlin (2023); Frictions, curated by Galleria Monti and Ilaria Monti at MUG Giannini Museum in Latina (2022); Mirrored in Spectral Machines, with Camilla Alberti, SpazioSerra, Milan (2022).
              </p>

              <h4 className={styles.artists}>
                Lorenzo Lunghi
              </h4>
              <p>
                Lorenzo Lunghi (Crema 1993) draws his sculptural-performative practice from a DIY halfway
                between neo-Luddite imagery and science fiction alienation, in a
                magic-rudimentary perspective. After the BFA at the Accademia Carrara, Bergamo (2018), he obtained the
                MFA at HEAD, Geneva (2021). He was part of the DITTO collective (2016-2019), of which
                we mention the exhibitions: Eclissi (MACAO, Milan, 2018); Spettri (Villa Farinacci, Rome, 2018);
                Blind Date (Current, Milan, 2018). Since 2019 he has curated exhibitions and workshops in extra-urban spaces:
                Erbacce (Brugherio, 2020); Miraggio (Fontanile Fontanone, 2019). He has exhibited in various
                contexts, including: La Rada (Locarno, 2023); Manifattura Tabacchi (Florence, 2022); Plattform
                (Kulturhaus Palazzo, 2022); Giulietta (Basel, 2021); ANCONTEMPORANEA (Ancona,
                2021); Localedue (Bologna, 2021); Palazzo delle Esposizioni (Rome, 2020); Sonnenstube
                (Spazio Morel, 2019).
              </p>

              <h4 className={styles.artists}>
                Adriano Tenore
              </h4>
              <p>
                Adriano Tenore (Naples, 1991) is an Italian-French multimedia artist. With a background in Anthropology and Sociology, he develops research that looks at human culture as a set of scattered and discontinuous creative processes, but capable of converging in a shared flow of meanings. His broad and transversal gaze combines cultural and biological dimensions, exploring how evolution and technology shape our experience of the world. His practice focuses on immersive and interactive audiovisual environments, in which the meaning does not arise only from the contents, but also from the context and direct experience. At the center of his approach is a return to simple, visceral signs, capable of touching deep and universal emotional chords. Today he works as CG Lead and Art Director, with an increasingly marked interest in interactive design and immersive experiences based on Artificial Intelligence. His works reflect on the relationship between humans and AI, questioning the boundaries of transhumanism and experimenting with new connections between nature and technology. Among his most recent exhibitions: Water me (2025); Synthetic Bestiary (La Santissima,
                Naples, 2025); Exodus (Fondazione Morra Greco, Naples, 2024; Casa delle Donne, Rome);
                ZTA (Naples); Kung flu (LightBox.NY Studios, 2018); Onironautica (Ex Asilo Filangieri,
                Naples, 2016).
              </p>

              <h4 className={styles.artists}>
                Emilio Vavarella
              </h4>
              <p>
                Emilio Vavarella (Monfalcone, 1989), Ph.D. from Harvard University, combines interdisciplinary research with media experimentation. He is Assistant Professor of Media and Film Studies at Skidmore College (NY) and artist-in-residence at the Broad Institute of MIT and Harvard. His work has been exhibited at the 18th Venice Biennale (Italian Pavilion, Architecture), MAXXI Museum in Rome, Reina Sofia Museum in Madrid, the Hermitage Museum in St. Petersburg, The Photographers’ Gallery in London, KANAL – Centre Pompidou in Brussels, MAMbo in Bologna, Madre Museum in Naples, the Museum of Contemporary Art in Zagreb, Museu de Ciències Naturals in Barcelona, Museo Nacional Bellas Artes in Santiago, the Museum of Contemporary Art Vojvodina in Novi Sad (Serbia), MBAL Museum in Switzerland, the National Art Center in Tokyo, Eyebeam in New York, the Off–Biennale in Cairo, BJCEM – Biennale of the Mediterranean, and the Kiev Biennale. His films have been screened at the Toronto Images Festival, Torino Film Festival, Jeu de Paume (Paris), HKW – Haus der Kulturen der Welt (Berlin), and numerous media art festivals, including EMAF (Osnabrück), JMAF (Tokyo), Filmwinter (Stuttgart), and NYEAF (New York). Vavarella has received numerous awards and honors, including the Italian Council Award (2019) and the Harvard Horizon Fellowship (2023), and his work is regularly featured in newspapers, specialized magazines, and scientific publications.
              </p>

            </div>
          )
        }

        {
          language == "it" && (

            <h4 className={styles.title}>
              Informazioni sull’Evento
            </h4>

          )
        }

        {
          language == "en" && (

            <h4 className={styles.title}>
              Event Information
            </h4>

          )
        }

        <div style={{
          width: "100%",
          display: "flex",
          flexDirection:"column",
          gap: 0
        }}>
        {
          language == "it" && (
            <div>
              <h4 className={styles.subtitle}>
                Ingresso:
              </h4>
              <p>
                Gratuito per la mostra
              </p>
            </div>
          )
        }
        {
          language == "en" && (
            <div>
              <h4 className={styles.subtitle}>
                Entry:
              </h4>
              <p>
                Free for the exhibition
              </p>
            </div>
          )
        }

        {
          language == "it" && (
            <div>
              <h4 className={styles.subtitle}>
                Sede:
              </h4>
              <p>
                Villa Doria D’Angri
                Via Francesco Petrarca 80, Napoli
              </p>
            </div>
          )
        }
        {
          language == "en" && (
            <div >
              <h4 className={styles.subtitle}>
                Location:
              </h4>
              <p>
                Villa Doria D’Angri
                Via Francesco Petrarca 80, Napoli
              </p>
            </div>
          )
        }
        {
          language == "it" && (
            <div>
              <h4 className={styles.subtitle}>
                Date:
              </h4>
              <p>
                17 - 19 luglio 2025
              </p>
            </div>
          )
        }
        {
          language == "en" && (
            <div>
              <h4 className={styles.subtitle}>
                Date:
              </h4>
              <p>
                17 - 19 July 2025
              </p>
            </div>
          )
        }

        {
          language == "it" && (
            <div>
              <h4 className={styles.subtitle}>
                Orari di apertura:
              </h4>
              <p>
                <span style={{ fontSize: "0.8rem" }}>&#9679;</span>&nbsp;Giovedì 17 luglio (Opening): 18:00 – 22:00
              </p>
              <p>
                <span style={{ fontSize: "0.8rem" }}>&#9679;</span>&nbsp;Venerdì 18 e sabato 19 luglio (Visite): 9:00 – 17:00
              </p>
            </div>
          )
        }
        {
          language == "en" && (
            <div>
              <h4 className={styles.subtitle}>
                Opening hours:
              </h4>
              <p>
                <span style={{ fontSize: "0.8rem" }}>&#9679;</span>&nbsp;Thursday 17th July (Opening): 18:00 – 22:00
              </p>
              <p>
                <span style={{ fontSize: "0.8rem" }}>&#9679;</span>&nbsp;Friday 18th and Saturday 19th July (Visiting hours): 9:00 – 17:00
              </p>
            </div>
          )
        }

{
          language == "it" && (
            <div>
              <h4 className={styles.subtitle}>
                Contatti
              </h4>
              <p>
                Per interviste, immagini ad alta risoluzione e ulteriori informazioni, scrivere a:
                <Link href="mailto:visions@napuleth.org" style={{ textDecoration: "underline" }}>visions@napuleth.org</Link>
              </p>
            </div>
          )
        }
        {
          language == "en" && (
            <div>
              <h4 className={styles.subtitle}>
                Contact
              </h4>
              <p>
                For interviews, high resolution images and further information, write to: <Link href="mailto:visions@napuleth.org" style={{ textDecoration: "underline" }}>visions@napuleth.org</Link>
              </p>
            </div>
          )
        }
        </div>

        

        

        <div className={styles.imageContainer}>
          <Image src={img1} alt="napuleth visions" width="900"
            height="500"
            sizes="100vw, (max-width: 600px) 500px" objectFit="cover"></Image>
        </div>


        {
          language == "it" && (
            <div>
              <h4 className={styles.sponsor}>
                Patrocinato da
              </h4>
              <div className={styles.sponsorContainer}>
                <Image src={sanCarlo}
                  alt="Teatro di San Carlo"
                  width="200"
                  height="150"
                  objectFit="contain"
                ></Image>

                <Image src={civita}
                  alt="Associazione Civita"
                  width="200"
                  height="150"
                  objectFit="contain"
                ></Image>

                <Image src={commune}
                  alt="Commune Di Napoli"
                  width="60"
                  height="10"
                  objectFit="contain"
                  style={{
                    scale: 0.85
                  }}
                ></Image>
              </div>
            </div>
          )
        }
        {
          language == "en" && (
            <div>
              <h4 className={styles.sponsor}>
                With the Patronage of
              </h4>
              <div className={styles.sponsorContainer}>
                <Image src={sanCarlo}
                  alt="Teatro di San Carlo"
                  width="200"
                  height="150"
                  objectFit="contain"
                ></Image>

                <Image src={civita}
                  alt="Associazione Civita"
                  width="200"
                  height="150"
                  objectFit="contain"
                ></Image>

                <Image src={commune}
                  alt="Commune Di Napoli"
                  width="65"
                  height="10"
                  objectFit="contain"
                  style={{
                    scale: 0.85
                  }}
                ></Image>
              </div>
            </div>
          )
        }
      </div>
    </main>
  );
}
