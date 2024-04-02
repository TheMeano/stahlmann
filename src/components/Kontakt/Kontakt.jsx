import React from 'react';
import "./kontakt.scss";
import { motion } from 'framer-motion';

const Kontakt = () => {



  return (
    <motion.div initial={{ opacity: 0}} whileInView={{ opacity: 1}} viewport={{once: true}} transition={{duration: 1}} className='kontakt'>
        <div className='content'>
        <h1>Kontaktformular</h1>
        <h2>Wir freuen uns auf deine Anfrage!</h2>
        <div id='Container'>
            <form className='kontaktform'>
                <div className='labeldiv'>
                    <label htmlFor="Vorname"><h3>Vorname*</h3></label>
                    <motion.input whileFocus={{scale: 1.1}} type='text' name='Vorname' required />
                </div>
                <div className='labeldiv'>
                    <label htmlFor="Nachname"><h3>Nachname*</h3></label>
                    <motion.input whileFocus={{scale: 1.1}} type='text' name='Nachname' required />
                </div>
                <div className='labeldiv'>
                    <label htmlFor="Unternehmen"><h3>In welchem Unternehmen sind sie tätig?*</h3></label>
                    <motion.input whileFocus={{scale: 1.1}} type='text' name='Unternehmen' required />
                </div>
                <div className='labeldiv'>
                    <label htmlFor="Email"><h3>Geschäftliche E-Mail Adresse*</h3></label>
                    <motion.input whileFocus={{scale: 1.1}} type='email' name='Email' required />
                </div>
                <div className='labeldiv'>
                    <label htmlFor="Nummer"><h3>Handynummer</h3></label>
                    <motion.input whileFocus={{scale: 1.1}} type='text' name='Nummer'  />
                </div>
                <div className='labeldiv'>
                    <label htmlFor="Marktplatz"><h3>Auf welchem Marktplatz brauchen sie Unterstützung?</h3></label>
                    <motion.input whileFocus={{scale: 1.1}} type='text' name='Marktplatz'  />
                </div>
                <div className='labeldiv'>
                    <label htmlFor="Woher"><h3>Woher kennen sie Stahlmann Solutions?</h3></label>
                    <motion.input whileFocus={{scale: 1.1}} type='text' name='Woher'  />
                </div>
                <div className='labeldiv'>
                    <label htmlFor="Mitteilung"><h3>Möchten sie uns noch etwas mitteilen?</h3></label>
                    <textarea name='Mitteilung' />
                </div>
                <div className='labeldiv' style={{justifyContent: "end", gap: "10px", flexDirection: "row"}}>
                    <label style={{width: "unset"}} htmlFor="checkbox">Ich habe die Datenschutzrichtlinien durchgelesen und akzeptiert </label>
                    <input type='checkbox' name='checkbox' style={{width: "25px"}} required />
                </div>
                <button>Absenden!</button>
            </form>
        </div>
        </div>
    </motion.div>
  )
}

export default Kontakt