import React, {useState} from 'react'
import "./referenzen.scss"
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

    

const Referenzen = () => {

   

    const items =[
        {
            id: 1,
            title: "Magnum Helium Gasflasche",
            content: "Verleihen Sie Ihren Feiern und Veranstaltungen mit der Magnum Helium Gasflasche eine besondere Note und schaffen Sie unvergessliche Erinnerungen für Ihre Gäste.",
            describ: "Dieses Produkt verkaufte sich 500+ mal auf Amazon im letzten Monat",
            color: "#6982A4",
            img: "./3.png",
            link: "https://www.amazon.de/MAGNUM-Helium-Gasflasche-30-Luftballons/dp/B0CXT8X1V2"
        },
        {
            id: 2,
            title: `Website "Restaurant-Café Artemis"`,
            content: "Genießen Sie bei uns köstliches Eis und erlesene Speisen aus der ganzen Welt. Von italienischem Gelato bis zu exotischen Aromen bieten wir Ihnen eine Vielfalt an Geschmackserlebnissen.",
            describ: "Mit täglich durchschnittlich 100+ Page-Sessions",
            color: "#465A78",
            img: "./Artemis.png",
            link: "https://www.artemis-buxtehude.de/"
        },
        {
            id: 3,
            title: "Gaskocher mit Grillplatte",
            content: "Unser extra stabiler Gaskocher, hergestellt von einer eingetragenen deutschen Marke, ist die ideale Wahl für alle, die ein zuverlässiges und langlebiges Outdoor-Kochgerät suchen.",
            describ: "Über 200 mal im letzten Monat auf Amazon verkauft",
            color: "#465A78",
            img: "./2.png",
            link: "https://www.amazon.de/Magnum%C2%AE-Gaskocher-Grillplatte-inkl-Gaskartuschen/dp/B0CWY74ZX3/ref=sr_1_2?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1PXI44D12FS0D&dib=eyJ2IjoiMSJ9.dTPglvdhnSOO8QLjjuH0l6GoYrg9CFTxEuY-GJLjxfwOBgXEWd8oFI7ykxiLZ7UEJd3LtHMEJBMu8fJpaL0ucQPUPR5oVn_evA-D9bdd3dn7qPcRPwToWnQ8qq8Z7Ap9SBJFTbSQajeiKSbx3W8C7TdElsCAd7sQ4ONwKlWluBkZggaBhvhowI4taZkc5Sdhb7UyWvAcUfv98aT6RD36QwTKpElIuOo5FZmnnOyReSGkr0ALfUhF_vBKIlZgDm6Oj2oYCsF7f9XLLJeABQaQ9eYIGZuHV4wJERe7jvEdBu0.Uc1dIoJXNZC2uGVUoft1Uwk_JC126tqROsZbRCMrX50&dib_tag=se&keywords=magnum+camping&qid=1711403079&sprefix=magnum+camping%2Caps%2C81&sr=8-2"
        },
        {
            id: 4,
            title: `Webseite "Ammo-Hairdesign"`,
            content: "Eine einfache, jedoch attraktive Webseite, die dafür gedacht ist, Kunden anzuziehen!",
            describ: "One Pager mit allen nötigen Funktionen",
            color: "#465A78",
            img: "./2.png",
            link: "https://www.amazon.de/Magnum%C2%AE-Gaskocher-Grillplatte-inkl-Gaskartuschen/dp/B0CWY74ZX3/ref=sr_1_2?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1PXI44D12FS0D&dib=eyJ2IjoiMSJ9.dTPglvdhnSOO8QLjjuH0l6GoYrg9CFTxEuY-GJLjxfwOBgXEWd8oFI7ykxiLZ7UEJd3LtHMEJBMu8fJpaL0ucQPUPR5oVn_evA-D9bdd3dn7qPcRPwToWnQ8qq8Z7Ap9SBJFTbSQajeiKSbx3W8C7TdElsCAd7sQ4ONwKlWluBkZggaBhvhowI4taZkc5Sdhb7UyWvAcUfv98aT6RD36QwTKpElIuOo5FZmnnOyReSGkr0ALfUhF_vBKIlZgDm6Oj2oYCsF7f9XLLJeABQaQ9eYIGZuHV4wJERe7jvEdBu0.Uc1dIoJXNZC2uGVUoft1Uwk_JC126tqROsZbRCMrX50&dib_tag=se&keywords=magnum+camping&qid=1711403079&sprefix=magnum+camping%2Caps%2C81&sr=8-2"
        },
        {
            id: 5,
            title: "Campinglampe - 320 Lumen",
            content: "Entdecken Sie die ultimative Campinglampe für Ihr nächstes Abenteuer im Freien - unsere hochwertige Campinglampe! Egal, ob Sie eine Nacht im Wald verbringen oder Ihren Garten bei einem gemütlichen Lagerfeuer erhellen möchten, unsere Campinglampe ist der perfekte Begleiter.",
            describ: "Über 150 Rezensionen auf unserer Commerce Plattform",
            color: "#7B8FAB",
            img: "./Lampe",
            link: "https://stahlmann-commerce.de/collections/sale/products/stahlmann-%C2%AE-hohenverstellbares-bugelbrett-mit-rutschfesten-fussen"
        },
        {
            id: 6,
            title: "Wäscheständer ausziehbarer mit 20 m Trockenfläche",
            content: "Mit unserem ausziehbaren Wäscheständer erledigen Sie die Wäschetrocknung spielend leicht und effizient. Maximale Trockenfläche, Stabilität und platzsparendes Design - alles in einem Produkt.",
            describ: "63% würden diesen Artikel auf Otto weiterempfehlen",
            color: "#52687F",
            img: "./Lampe",
            link: "https://stahlmann-commerce.de/collections/sale/products/stahlmann-%C2%AE-hohenverstellbares-bugelbrett-mit-rutschfesten-fussen"
        },
        {
            id: 7,
            title: "Kartoffel Aufbewahrungsbox 2er Set Kartoffelbox mit Entnahmeklappe",
            content: "Unsere Kartoffel Aufbewahrungsbox sorgt für eine optimale Luftzirkulation, wodurch Kartoffeln, Zwiebeln und andere Gemüsesorten länger frisch bleiben und nicht so schnell verderben.",
            describ: "Über 200 auf Amazon im letzten Monat verkauft",
            color: "#52687F",
            img: "./Lampe",
            link: "https://stahlmann-commerce.de/collections/sale/products/stahlmann-%C2%AE-hohenverstellbares-bugelbrett-mit-rutschfesten-fussen"
        },
    ]

  return (
    <div className='referenzen'>
        <div className='gradient'>
            <img src='./Service_Bottom.png' alt='gradient' />
        </div>

        <div className='content'>
            <div className='title'>
                <h6>WORAUF WIR STOLZ SIND</h6>
                <h1>UNSERE <b>REFERENZEN</b></h1>
            </div>
            <div className='portfolio'>
                <Carousel id='carousel'>
                    {items.map((item)=>(
                        <Carousel.Item key={item.id} id='carousel_item' style={{backgroundColor: `${item.color}`}}>
                            <div id='CarouselCard'>
                                <div className='image'>
                                    <img src={item.img} alt='Ä' />
                                </div>    
                                <div className='info'>
                                    <h1>{item.title}</h1>
                                    <svg width="195" height="32" viewBox="0 0 195 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M57.0288 0L61.9661 10.7043L73.6722 12.0922L65.0176 20.0957L67.315 31.6578L57.0288 25.9L46.7425 31.6578L49.0399 20.0957L40.3853 12.0922L52.0914 10.7043L57.0288 0Z" fill="white"/>
                                        <path d="M137.798 0L142.735 10.7043L154.441 12.0922L145.787 20.0957L148.084 31.6578L137.798 25.9L127.512 31.6578L129.809 20.0957L121.154 12.0922L132.86 10.7043L137.798 0Z" fill="white"/>
                                        <path d="M178.182 0L183.12 10.7043L194.826 12.0922L186.171 20.0957L188.468 31.6578L178.182 25.9L167.896 31.6578L170.193 20.0957L161.539 12.0922L173.245 10.7043L178.182 0Z" fill="white"/>
                                        <path d="M16.6434 0L21.5808 10.7043L33.2869 12.0922L24.6323 20.0957L26.9297 31.6578L16.6434 25.9L6.35723 31.6578L8.65459 20.0957L0 12.0922L11.7061 10.7043L16.6434 0Z" fill="white"/>
                                        <path d="M97.4133 0L102.351 10.7043L114.057 12.0922L105.402 20.0957L107.699 31.6578L97.4133 25.9L87.127 31.6578L89.4244 20.0957L80.7698 12.0922L92.4759 10.7043L97.4133 0Z" fill="white"/>
                                    </svg>
                                    <p>"{item.content}"</p>
                                    <p>-{item.describ}</p>
                                    <a target='_blank' style={{width: "max-content"}} href={item.link}><Button variant='none' style={{backgroundColor: "#E3B767", color: "#fff", padding: "10px"}}>Entdecke Mehr</Button></a>
                                </div>
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </div>
    </div>
  )
}

export default Referenzen