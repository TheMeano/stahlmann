import React from 'react'
import "./hero.scss"
import Button from "react-bootstrap/Button"
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className='hero'>
        <motion.div initial={{x: -500}} animate={{x:0}} transition={{duration: 1}} className='Content'>
          <h2>Erfolgreiches Branding & Profitabiliät</h2>
          <h1>Entfalte  die Präsenz deiner Marke.</h1>
          <p>Erfahre messbare Leistungssteigerungen für deine Produkte durch eine integrierte Lösung aus Strategie, hochwertigem Content und effektivem PPC-Management. Mit unserer ganzheitlichen Unterstützung erzielst du optimale Ergebnisse und nachhaltigen Erfolg für dein Unternehmen.</p>
          <a href='#kontakt'><Button variant="none" style={{backgroundColor: "#E3B767", color: "white", padding: "10px 40px"}}>Kostenlose Analyse</Button></a>
        </motion.div>
        <div className='ImgChart'>
          <img src='./Chart.png' alt='chart' />
        </div>
    </div>
  )
}

export default Hero 