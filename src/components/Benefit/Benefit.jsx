import React, { useRef, useEffect } from 'react'
import "./benefit.scss"
import Card from "react-bootstrap/Card";
import {animate, motion, useInView, useMotionValue, useTransform} from "framer-motion"


const benefits = [
  {
    id: 1,
    title: "MEHR UMSATZ",
    content: "Erobere die Spitze auf Amazon und anderen E-Commerce-Plattformen! Unsere bewährten Strategien und individuellen Maßnahmen bringen dich gezielt an die Spitze deiner Nische. Mit klaren Wachstumsplänen optimieren wir deinen Erfolg und machen dich zum Top-Verkäufer.",
    img: "./Benefit_1.png"
  },
  {
    id: 2,
    title: "VERBESSERUNG DER RENTABILITÄT",
    content: "Wir maximieren deine Umsätze und behalten gleichzeitig deine Gewinnmarge im Blick. Dank effizienter Kampagnen und klar definierter KPIs steigern wir sowohl Umsatz als auch Gewinn nachhaltig, ohne das Werbebudget übermäßig zu erhöhen.",
    img: "./Benefit_2.png"
  },
  {
    id: 3,
    title: "ERHÖHUNG DER ZEITRESSOURCEN",
    content: "Durch unser spezialisiertes Expertenteam optimieren wir gezielt die Performance deiner Produkte auf Marktplätzen. Das schafft Freiraum für dein Team und fördert kontinuierliches Wachstum im Know-how, Monat für Monat",
    img: "./Benefit_3.png"
  }
]

const variants = {
  initial:{
    opacity: 0,
    y: 500
  },
  animate:{
    opacity: 1,
    y: 0
  }
}




const Benefit = () => {

  const ref = useRef();
  const isInView  = useInView(ref, {margin: "-100px"})

  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const controls = animate(count, 2000, {duration: 8})
  
    return controls.stop
  }, [])

  return (
    <div  className='benefit'>
        <div className='svg_hero'>
            <img src='./svg_hero.png' alt='' />
        </div>
        <div className="content">
          <div className='title'>
            <h4>LASS UNS DEN JOB ERLEDIGEN</h4>
            <h1><b>WARUM DU</b> MIT UNS ARBEITEN <br /> SOLLTEST:</h1>
          </div>
          <div ref={ref} className='benefits'>
            {benefits.map((item)=>(
              <motion.div key={item.id} variants={variants}  initial="initial" animate={ isInView && "animate"} transition={{delay: item.id /3}} id="wrapper" >
              <Card  id="card"  style={{ width: '18rem' }}>
                <Card.Img variant="top" id='benefit_img' src={item.img} />
                <Card.Body>
                  <Card.Title id='benefit_title'>{item.title}</Card.Title>
                  <Card.Text >
                    {item.content}
                  </Card.Text>
                </Card.Body>
              </Card>
              </motion.div>
            ))}
          </div> 
        </div>
        <motion.div  initial={{opacity: 0}} animate={{opacity: 1}}  className='customers'>
            <h4>MIT <b>ÜBER</b></h4>
            <motion.div className='numbers'>{rounded}</motion.div>
            <h4>KUNDENREZENSIONS</h4>
            <h5><a target='_blank' href='https://stahlmann-commerce.de/'>AUF UNSERER COMMERCE PLATTFORM</a></h5>
        </motion.div>
        <div className='svg_hero'>
            <img src='./Benefit_bottom_svg.png' alt='' />
        </div>
    </div>
  )
}

export default Benefit