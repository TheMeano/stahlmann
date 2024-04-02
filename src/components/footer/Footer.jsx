import React from 'react'
import "./footer.scss";

const Footer = () => {
  return (
    <div className='footer'>
        <div className='navigation'>
            <div className='slots'>
                <img style={{maxWidth: "233px", maxHeight: "151px", alignSelf: "center", mixBlendMode: ""}} src='./Stahlmann_solutions.png' alt='Logo' />
            </div>
            <div className='slots'>
                <a href='#'><b>Navigation</b></a>
                <a href='#'>Erstgespräch</a>
                <a href='#'>Referenzen</a>
                <a href='#'>Services</a>
                <a href='#'>Insights</a>
                <a href='#'>Team</a>
            </div>
            <div className='slots'>
                <a href='#'><b>Navigation</b></a>
                <a href='#'>LoremIpsum</a>
                <a href='#'>LoremIpsum</a> 
                <a href='#'>LoremIpsum</a>
                <a href='#'>LoremIpsum</a>
                <a href='#'>LoremIpsum</a>
            </div>
        </div>
        <div className='legal'>
            <div className='slots'>
                AGB
            </div>
            <div className='slots'>
                Datenschutz
            </div>
            <div className='slots'>
                Impressum
            </div>
        </div>
    </div>
  )
}

export default Footer