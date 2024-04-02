import React from 'react'
import { motion } from "framer-motion"





const Links = ({ setOpen, type }) => {

  const itemVariants ={
    open: {
      y: 0,
      opacity: 1
    },
    closed:{
      y: 50,
      opacity: 0
    }
  }

  const variants ={
    open: {
      transition: {
        staggerChildren: 0.1
      }
    },
    closed:{
      transition:{
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  }

  const items = [
    {
      content: "Referenzen",
      link: "/#referenzen"
    },
    {
      content: "Services",
      link: "/unsere-angebote"
    },
    {
      content: "Über Uns",
      link: "/über-uns"
    },
    {
      content: "Zum Erstgespräch",
      link: "#kontakt"  
    },
    {
      content : "Home",
      link: "/"
    }
  ]

 


  return (
    <div>
      <motion.div className='links' variants={variants}>
          {items.map((item)=> (
            <motion.a variants={itemVariants} whileHover={{scale: 1.1}} whileTap={{scale: 0.95}} key={item.content} href={item.link}>{item.content}</motion.a>
          ))}
            {/* <motion.a target='_blank' variants={itemVariants} whileHover={{scale: 1.1}} whileTap={{scale: 0.95}} href='/datenschutzerklaerung_meana_webdesign.pdf'>Datenschutz</motion.a>
            <motion.a variants={itemVariants} whileHover={{scale: 1.1}} whileTap={{scale: 0.95}} href='/impressum'>Impressum</motion.a>
            <motion.a target='_blank' variants={itemVariants} whileHover={{scale: 1.1}} whileTap={{scale: 0.95}} href='/Allgemeine Geschäftsbedingungen-Meana-Webdesign.pdf'>AGB's</motion.a> */}
          </motion.div>
      </div>
  )
}

export default Links