import React from 'react';
import Navbar from "../../components/navbar/Navbar"
import Footer from '../../components/footer/Footer';
import Angebote from '../../components/Angebote/Angebote';
import Kontakt from "../../components/Kontakt/Kontakt";

const Serviceapp = () => {
  return (
    <div className='serviceapp'>
        <Navbar type="Services" />
        <section id='angebote'>
          <Angebote />
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

export default Serviceapp