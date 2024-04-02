import React from 'react';
import "./überuns.scss";
import Navbar from "../../components/navbar/Navbar";
import Kontakt from '../../components/Kontakt/Kontakt';
import Footer from '../../components/footer/Footer';
import {motion} from "framer-motion";

const Überuns = () => {

    const items = [
        {
            Hd : "Das sind wir.",
            cont :"Seit unserer Gründung sind wir darauf bedacht, unseren Kunden eine breite Auswahl an qualitativ hochwertigen Produkten zu einem fairen Preis anzubieten. Unser Sortiment umfasst eine Vielzahl von Produkten für verschiedene Bedürfnisse und Anforderungen.",
            img : "./android-chrome-512x512.png"
        },
        {
            Hd: "Umweltfreundlich.",
            cont: "Als umweltfreundliches Unternehmen achten wir darauf, unsere Aktivitäten und Prozesse so nachhaltig wie möglich zu gestalten. Wir setzen uns für den Schutz der Umwelt ein und bemühen uns, unseren ökologischen Fußabdruck zu minimieren.",
            img : "./Umweltfreundlich.webp"
        },
        {
            Hd : "Kundennah.",
            cont : "Unser Ziel ist es, eine langfristige und vertrauensvolle Beziehung zu unseren Kunden aufzubauen. Wir hören zu, beraten und unterstützen Sie bei der Wahl des passenden Produkts oder der Lösung für Ihre Anforderungen.",
            img: "./Kundennah.webp"
        },
        {
            Hd: "Schnell.",
            cont: "Bei Stahlmann Commerce GmbH legen wir großen Wert auf eine schnelle und zuverlässige Lieferung Ihrer Bestellung. Wir wissen, dass Zeit oft eine entscheidende Rolle spielt und Sie Ihre Bestellung so schnell wie möglich benötigen.",
            img: "./Schnell.webp"
        }
    ]

  return (
    <div className='überuns'>
        <Navbar type="Über-uns" />
        <section id='überuns-inhalt' className='container' >
            <h1>ÜBER <b>UNS</b></h1>
            <h2>WILLKOMMEN BEI STAHLMANN SOLUTIONS</h2>
            <p>Ihrem zuverlässigen Partner für hochwertige Produkte aus den Bereichen Outdoor, Camping, Haushalt und KFZ!
            <br/>
            <br/>
            Seit unserer Gründung im Jahr 2021 sind wir darauf bedacht, unseren Kunden eine breite Auswahl an qualitativ hochwertigen Produkten zu einem fairen Preis anzubieten. Unser Sortiment umfasst eine Vielzahl von Produkten für verschiedene Bedürfnisse und Anforderungen.
            <br/>
            <br/>
            Unsere Leidenschaft gilt dabei insbesondere Produkten, die das Outdoor- und Camping-Erlebnis noch besser und komfortabler machen. Hierzu bieten wir eine große Auswahl an Outdoor- und Campingprodukten an, wie beispielsweise Zelte, Schlafsäcke, Campingkocher, Gaskartuschen und vieles mehr.
            <br/>
            <br/>
            Doch auch in Sachen Haushaltswaren sind wir breit aufgestellt. Unser Sortiment umfasst eine Vielzahl von Produkten, um Ihren Alltag zu erleichtern, wie zum Beispiel Küchenhelfer, Reinigungsprodukte und vieles mehr.
            <br/>
            <br/>
            Ein weiterer Schwerpunkt unseres Angebots liegt auf Produkten für Ihr KFZ. Hierzu bieten wir unter anderem Öle, Additive und Pflegeprodukte an, um Ihr Fahrzeug in Topform zu halten.
            <br/>
            <br/>
            Als umweltbewusstes Unternehmen legen wir besonderen Wert auf Nachhaltigkeit und Umweltschutz. Deshalb achten wir bei der Auswahl unserer Produkte darauf, dass sie umweltfreundlich und nachhaltig sind.
            <br/>
            <br/>
            Unser erfahrenes Team steht Ihnen jederzeit gerne zur Verfügung, um Ihnen bei der Auswahl der richtigen Produkte und Lösungen zu helfen. Wir freuen uns darauf, Ihnen unsere Produkte und unseren Service vorzustellen und Sie als zufriedenen Kunden begrüßen zu dürfen!</p>
        </section>
        <hr style={{opacity: "1", color: "black"}} />
        <section id='das-sind-wir' className='container'>
            {items.map((item)=>(
                <div className={item.Hd === "Umweltfreundlich." || item.Hd === "Schnell." ? "item item-reverse" : "item"  }>
                    <div className='img-cont'>
                        <motion.img  initial={{scale: 0.1}} whileInView={{scale: 1}} viewport={{once: true}} transition={{duration: 0.5}} src={item.img} alt={item.img} />
                    </div>
                    <div className='content'>
                        <h3>{item.Hd}</h3>
                        <p>{item.cont}</p>
                    </div>
                </div>
            ))}
        </section>
        <section id='kontakt'>
            <Kontakt />
        </section>
        <section id='footer'>
            <Footer />
        </section>
    </div>
  )
}

export default Überuns