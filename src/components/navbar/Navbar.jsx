import Button  from "react-bootstrap/Button"
import "./navbar.scss"
import React from 'react'
import Sidebar from "./Sidebar.jsx";
import { motion } from "framer-motion";

const Navbar = ({type}) => {
  return (
    <div className='navbar'>
        <motion.div initial={{scale: 0.2}} animate={{scale: 1}} transition={{duration: 0.5}} className="logo">
            <a href="/"><img className="logoImg" src="./Logo.png" alt="logo" /></a>
            
        </motion.div>
        <div className="menuItems">
            {type === "Services" ? <a href="/">Home</a> : <a href="/unsere-angebote">Services</a>}
            <a href="/#referenzen">Referenzen</a>
            {type === "Über-uns" ? <a href="/">Home</a> : <a href="/über-uns">Über Uns</a> }
            <a href="#kontakt"><Button variant="none" style={{backgroundColor: "#E3B767", color: "white"}}>Zum Erstgespräch</Button></a>
            <div className="side_small">
              <Sidebar />
            </div>
            
        </div>
    </div>
    
  )
}
 
export default Navbar