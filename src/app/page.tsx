
import styles from "./index.module.css";
import Image from "next/image";
import Link from "next/link";

import img1 from '../assets/images/image1.webp'
import logo from '../assets/images/logo.webp'


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image src={logo} alt="logo" width={200} height={80} style={{
            filter: 'brightness(0)'
          }} />
        </div>
        <div>
          <h4 className={styles.title}>
            Intro
          </h4>
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
       
        <div>
          <h4 className={styles.title}>
            Abstract mostra
          </h4>
          <p>
            La mostra esplora il concetto di &quot;concrescenza&quot;, inteso come il risultato di forze in continua interazione che modellano
            materia, significato e valore. Ispirata al pensiero di Bruno Latour, l&apos;esposizione mette in discussione le tradizionali
            dicotomie tra fisico e digitale, soggetto e oggetto, arte e mercato.
          </p>
          <p>
            Attraverso il confronto con il fenomeno delle criptovalute, Concrescenze analizza il valore come entità fluida e in
            divenire, plasmata dalle dinamiche di rete. Il parallelo tra blockchain e arte digitale diventa un punto chiave per
            comprendere come il valore, svincolato da supporti fisici, si costruisca tramite interazioni e riconfigurazioni costanti.
          </p>
          <p>
            La mostra, che si svolgerà a Villa Doria d&apos;Angri a Posillipo nell&apos;ambito di Napuleth Open Village 2025, vuole essere
            una piattaforma di sperimentazione tra arte e nuove economie digitali. Attraverso un percorso immersivo, invita il
            pubblico a riflettere sul ruolo della rete e dell&apos;ibridazione nella ridefinizione del valore nell&apos;era contemporanea.
          </p>
        </div>
        <div>
         <h4 className={styles.title}>
            Intro
          </h4>
          <p>
            Napuleth Visions is an exhibition project that fits into the context of Napuleth with the aim of creating a platform for exchange between the cryptocurrency world and the contemporary art system. The project aims to become a recurring event, exploring the intersections between the digital economy and artistic practices to foster a critical dialogue on the transformations of value in the era of decentralization.
          </p>
          <p>
            Napuleth Visions is an innovative initiative, born from the energy and vision of a group of highly qualified young creatives, with skills in both art and technology. The exhibition is not just an exhibition event, but a stable meeting point between art and innovation, destined to grow and transform year after year. The long-term goal is to develop tailor-made technological solutions for the art world, redefining the ways of enjoying and producing art in the digital era.
          </p>
        </div>
        <div>
          <h4 className={styles.title}>
            Abstract exhibition
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
<div>
          <h4 className={styles.title}>
            Contact
          </h4>
          <p>
            For inquiries regarding limited partnerships and sponsorships tiers, please contact: <Link href="mailto:visions@napuleth.org" style={{textDecoration: "underline"}}>visions@napuleth.org</Link>
          </p>
        </div>
         <div className={styles.imageContainer}>
          <div style={{
            width: '60vw',
            height: '75vh',
            backgroundImage: `url(${img1.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}>

          </div>
        </div>

      </div>
    </main>
  );
}
