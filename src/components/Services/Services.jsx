import React, {useRef, useState} from 'react'
import "./services.scss";
import Card from "react-bootstrap/Card"
import Carousel from "react-bootstrap/Carousel";
import { motion, useInView } from "framer-motion"

const Services = () => {

    const items = [
        {
            id:1,
            title: "FBM Beratung",
            content: "Optimieren Sie Ihren E-Commerce-Erfolg mit unserer spezialisierten FBM-Beratung. Unsere maßgeschneiderten Lösungen stärken Ihre Online-Präsenz, identifizieren Wachstumschancen und optimieren Ihre Vertriebsstrategie für Plattformen wie Amazon. Vertrauen Sie auf unsere bewährte Expertise und steigern Sie Ihre Performance nachhaltig.",
            img: "./service_1.png"
        },
        {
            id:2,
            title: "OTTO & Amazon SEO Beratung",
            content: "Steigern Sie Ihre Sichtbarkeit auf OTTO und Amazon mit unserer professionellen SEO-Beratung. Unser erfahrenes Team bietet maßgeschneiderte Strategien, um Ihre Produkte optimal zu platzieren und Ihr Ranking zu verbessern. Vertrauen Sie auf unsere Expertise, um Ihre Online-Präsenz zu maximieren und Ihre Verkäufe zu steigern.",
            img: "./service_2.png"
        },
        {
            id:3,
            title: "Listing",
            content: "Maximieren Sie Ihre Sichtbarkeit auf OTTO und Amazon mit unserer erstklassigen SEO-Beratung. Unser erfahrenes Team entwickelt individuelle Strategien, um Ihre Produkte optimal zu präsentieren und Ihr Ranking zu verbessern. Vertrauen Sie auf unsere Expertise, um Ihre Online-Präsenz zu stärken und Ihre Verkäufe zu steigern.",
            img: "./service_6.png"
        },
        {
            id:4,
            title: "OTTO-ADS & Amazon-ADS",
            content: "Optimieren Sie Ihre Sichtbarkeit auf OTTO und Amazon mit unserer erstklassigen SEO-Beratung. Unser erfahrenes Team entwickelt individuelle Strategien, um Ihre Produkte optimal zu präsentieren und Ihr Ranking auf beiden Plattformen zu verbessern. Vertrauen Sie auf unsere Expertise, um Ihre Online-Präsenz zu stärken und Ihren Erfolg zu steigern.",
            img: "./service_3.png"
        },
        {
            id:5,
            title: "Websiten Gestaltung",
            content: "Steigern Sie Ihre Online-Präsenz mit unserer hochwertigen Webseitengestaltung und -entwicklung. Unsere Experten schaffen maßgeschneiderte Lösungen, die Ihre Marke optimal präsentieren und Ihren digitalen Erfolg fördern.",
            img: "./service_4.png"
        },
        {
            id:6,
            title: "Account Pflege",
            content: "Pflegen Sie Ihren Amazon-Account professionell mit unserer Expertenberatung. Unser erfahrenes Team kümmert sich um die Optimierung Ihres Kontos, damit Sie sich auf Ihr Kerngeschäft konzentrieren können. Vertrauen Sie auf unsere Expertise, um Ihre Performance zu maximieren und Ihren Amazon-Erfolg langfristig zu sichern.",
            img: "./service_5.png"
        },
    ]

    const ref = useRef();
    const isInView = useInView(ref, {margin: "-100px"})
    
  return (
    <div className='services'>
        <div className='title'>
            <h5>UNSERE SERVICEANGEBOTE</h5>
            <h1>WAS HEISST <b>FULL SERVCICE</b> AGENTUR?</h1>
        </div>
        <div ref={ref} className='offers'>
        {items.map((item)=>(
            <motion.div key={item.id}  whileTap={{scale: 0.95}}  initial={{opacity: 1, x: item.id === 1 || item.id=== 4 ? -800 : item.id === 3 || item.id === 6 ? 800 : 0 }} animate={isInView && {opacity: 1, x: 0}} transition={{duration: 1, delay: item.id === 1 || item.id ===3 ? 0 : item.id === 4 || item.id === 6 ? 1 : 0}} id="wrapper">
            <Card  id='card' style={{ width: '18rem' }}>
                <Card.Img variant="top" id='service_img' src={item.img} />
                <Card.Body>
                  <Card.Title id='benefit_title'>{item.title}</Card.Title>
                  <Card.Text>
                    {item.content}
                  </Card.Text>
                  <a href='/unsere-angebote'>Mehr dazu</a>
                </Card.Body>
              </Card>
              </motion.div>
            ))}
        </div>
        
        <div className="offers_xs">
        <Carousel id='carousel'>
                    {items.map((item)=>(
                        <Carousel.Item key={item.id} id='carousel_item'>
                            <Card  id='card' style={{ width: '18rem' }}>
                                <Card.Img variant="top" id='service_img' src={item.img} />
                            <Card.Body>
                                <Card.Title id='benefit_title'>{item.title}</Card.Title>
                                    <Card.Text>
                                    {item.content}
                                    </Card.Text>
                                <a href='#'>Mehr dazu</a>
                            </Card.Body>
                        </Card>
                        </Carousel.Item>
                    ))}
                </Carousel>
        </div>         
    </div>
  )
}

export default Services