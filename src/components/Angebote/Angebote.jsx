import React from 'react';
import "./angebote.scss";


const items = [
    {
        id:1,
        title: "FBM Beratung",
        definition: "FBM Beratung, oder Finanz-, Business- und Managementberatung, ist ein Bereich der Beratungsbranche, der Unternehmen dabei hilft, ihre finanzielle Leistung zu verbessern, Geschäftsprozesse zu optimieren und strategische Entscheidungen zu treffen. Von Finanzplanung und Risikomanagement bis hin zur Unternehmensstrategie und Organisationsentwicklung bieten FBM-Beratungsunternehmen maßgeschneiderte Lösungen an, die darauf abzielen, die individuellen Bedürfnisse und Ziele ihrer Kunden zu erfüllen. In einer sich ständig wandelnden Geschäftswelt fungiert FBM-Beratung als unverzichtbares Instrument, um Unternehmen dabei zu unterstützen, sich anzupassen, zu wachsen und langfristigen Erfolg zu erzielen, indem sie auf externe Fachkenntnisse und Erfahrungen zurückgreifen.",        
        strategie: "Unser erster Schritt ist es, Ihre spezifischen Bedürfnisse und Herausforderungen zu verstehen. Daher bieten wir eine kostenlose Erstberatung oder Analyse an, um Ihre Situation zu bewerten und Ihre Ziele zu klären. Kontaktieren Sie uns einfach über unser Online-Formular, per Telefon oder per E-Mail, und wir werden uns umgehend mit Ihnen in Verbindung setzen.Nach dieser Analyse werden wir ein maßgeschneidertes Angebot erstellen, das auf Ihren Bedürfnissen basiert und verschiedene Optionen für unsere Dienstleistungen beinhaltet. Gemeinsam können wir den besten Ansatz wählen, der Ihren Anforderungen und Ihrem Budget entspricht.",
        
    },
    {
        id:2,
        title: "OTTO & Amazon SEO Beratung",
        definition: "OTTO & Amazon SEO Beratung ist ein spezialisierter Service, der Unternehmen dabei unterstützt, ihre Sichtbarkeit und Positionierung auf den Online-Plattformen OTTO und Amazon zu verbessern. Durch gezielte Suchmaschinenoptimierung (SEO) helfen diese Beratungsdienste Unternehmen dabei, in den Suchergebnissen der Plattformen besser gefunden zu werden und ihre Produkte effektiver zu vermarkten. Dies kann durch Optimierung von Produktbeschreibungen, Keyword-Recherche, Bildoptimierung, Bewertungsmanagement und anderen strategischen Maßnahmen erreicht werden. Ziel ist es, das Ranking der Produkte zu steigern, die Klickrate zu erhöhen und letztendlich den Umsatz zu steigern.",
        strategie: "Keyword-Recherche: Identifizieren Sie relevante Keywords, die von Kunden bei der Suche nach Produkten auf OTTO und Amazon verwendet werden. Dies umfasst sowohl allgemeine Keywords als auch spezifische Schlüsselbegriffe, die Ihr Produkt genau beschreiben. Optimierte Produktbeschreibungen: Erstellen Sie Produktbeschreibungen, die nicht nur informativ sind, sondern auch die identifizierten Keywords enthalten. Verwenden Sie relevante Schlüsselbegriffe in Titeln, Bulletpoints, Beschreibungen und anderen relevanten Feldern. Bildoptimierung: Verwenden Sie hochwertige Bilder Ihrer Produkte und optimieren Sie sie mit aussagekräftigen Dateinamen und Alt-Tags, die relevante Keywords enthalten. Bewertungsmanagement: Aktives Management von Kundenbewertungen kann sich positiv auf das Ranking Ihrer Produkte auswirken. Bitten Sie zufriedene Kunden um Bewertungen und reagieren Sie professionell auf negative Bewertungen, um das Vertrauen der Kunden zu stärken.",
       
    },
    {
        id:3,
        title: "Amazon-Listing",
        definition: "Maximieren Sie Ihre Sichtbarkeit auf OTTO und Amazon mit unserer erstklassigen SEO-Beratung. Unser erfahrenes Team entwickelt individuelle Strategien, um Ihre Produkte optimal zu präsentieren und Ihr Ranking zu verbessern. Vertrauen Sie auf unsere Expertise, um Ihre Online-Präsenz zu stärken und Ihre Verkäufe zu steigern.",
        strategie: "Unser erster Schritt ist es, Ihre spezifischen Bedürfnisse und Herausforderungen zu verstehen. Daher bieten wir eine kostenlose Erstberatung oder Analyse an, um Ihre Situation zu bewerten und Ihre Ziele zu klären. Kontaktieren Sie uns einfach über unser Online-Formular, per Telefon oder per E-Mail, und wir werden uns umgehend mit Ihnen in Verbindung setzen.Nach dieser Analyse werden wir ein maßgeschneidertes Angebot erstellen, das auf Ihren Bedürfnissen basiert und verschiedene Optionen für unsere Dienstleistungen beinhaltet. Gemeinsam können wir den besten Ansatz wählen, der Ihren Anforderungen und Ihrem Budget entspricht.",
       
    }, 
    {
        id:4,
        title: "OTTO-ADS",
        definition: "Profitieren Sie von unserer erstklassigen OTTO-ADS-Beratung, um Ihre Präsenz auf OTTO zu maximieren. Unser erfahrenes Team entwickelt individuelle Strategien, um Ihre Produkte gezielt zu platzieren und Ihre Sichtbarkeit zu steigern. Vertrauen Sie auf unsere Expertise, um Ihre Reichweite zu erweitern und Ihren Erfolg auf OTTO zu steigern.",
        strategie: "Unser erster Schritt ist es, Ihre spezifischen Bedürfnisse und Herausforderungen zu verstehen. Daher bieten wir eine kostenlose Erstberatung oder Analyse an, um Ihre Situation zu bewerten und Ihre Ziele zu klären. Kontaktieren Sie uns einfach über unser Online-Formular, per Telefon oder per E-Mail, und wir werden uns umgehend mit Ihnen in Verbindung setzen.Nach dieser Analyse werden wir ein maßgeschneidertes Angebot erstellen, das auf Ihren Bedürfnissen basiert und verschiedene Optionen für unsere Dienstleistungen beinhaltet. Gemeinsam können wir den besten Ansatz wählen, der Ihren Anforderungen und Ihrem Budget entspricht.",
       
    },
    {
        id:5,
        title: "Amazon-ADS",
        definition: "Erreichen Sie mit unserer Amazon-ADS-Beratung Ihre Ziele auf Amazon. Unser erfahrenes Team entwickelt maßgeschneiderte Strategien, um Ihre Produkte effektiv zu bewerben und Ihre Präsenz zu stärken. Vertrauen Sie auf unsere Expertise, um Ihre Sichtbarkeit zu maximieren und Ihren Umsatz auf Amazon zu steigern.",
        strategie: "Unser erster Schritt ist es, Ihre spezifischen Bedürfnisse und Herausforderungen zu verstehen. Daher bieten wir eine kostenlose Erstberatung oder Analyse an, um Ihre Situation zu bewerten und Ihre Ziele zu klären. Kontaktieren Sie uns einfach über unser Online-Formular, per Telefon oder per E-Mail, und wir werden uns umgehend mit Ihnen in Verbindung setzen.Nach dieser Analyse werden wir ein maßgeschneidertes Angebot erstellen, das auf Ihren Bedürfnissen basiert und verschiedene Optionen für unsere Dienstleistungen beinhaltet. Gemeinsam können wir den besten Ansatz wählen, der Ihren Anforderungen und Ihrem Budget entspricht.",
        
    },
    {
        id:6,
        title: "Account Pflege",
        definition: "Pflegen Sie Ihren Amazon-Account professionell mit unserer Expertenberatung. Unser erfahrenes Team kümmert sich um die Optimierung Ihres Kontos, damit Sie sich auf Ihr Kerngeschäft konzentrieren können. Vertrauen Sie auf unsere Expertise, um Ihre Performance zu maximieren und Ihren Amazon-Erfolg langfristig zu sichern.",
        strategie: "Unser erster Schritt ist es, Ihre spezifischen Bedürfnisse und Herausforderungen zu verstehen. Daher bieten wir eine kostenlose Erstberatung oder Analyse an, um Ihre Situation zu bewerten und Ihre Ziele zu klären. Kontaktieren Sie uns einfach über unser Online-Formular, per Telefon oder per E-Mail, und wir werden uns umgehend mit Ihnen in Verbindung setzen.Nach dieser Analyse werden wir ein maßgeschneidertes Angebot erstellen, das auf Ihren Bedürfnissen basiert und verschiedene Optionen für unsere Dienstleistungen beinhaltet. Gemeinsam können wir den besten Ansatz wählen, der Ihren Anforderungen und Ihrem Budget entspricht.",
      
    },
    {
        id:6,
        title: "Webseiten Gestaltung",
        definition: "Steigern Sie Ihre Online-Sichtbarkeit mit unserer herausragenden Webseitengestaltung und Entwicklung. Unser versiertes Team konzipiert individuelle Lösungen, um Ihre Website optimal zu gestalten und Ihr Markenimage wirkungsvoll zu präsentieren. Vertrauen Sie auf unsere Expertise, um eine attraktive Website zu schaffen, die Ihre Unternehmensziele unterstützt und Ihren Erfolg im digitalen Raum vorantreibt.",
        strategie: "Unsere Webdesign-Strategie vereint Schönheit, Funktion und Sichtbarkeit. Wir setzen auf ein ansprechendes, schönes und attraktives Design, das die Besucher Ihrer Website begeistert und einen bleibenden Eindruck hinterlässt. Gleichzeitig legen wir großen Wert darauf, dass Ihre Website informativ ist und alle relevanten Informationen ansprechend präsentiert werden, um Ihre Besucher zu informieren und zu engagieren. Darüber hinaus optimieren wir jedes Element Ihrer Website für Suchmaschinen, um sicherzustellen, dass sie von potenziellen Kunden leicht gefunden wird. Durch die Integration von SEO-Praktiken in das Design und die Entwicklung Ihrer Website maximieren wir die Sichtbarkeit und steigern den organischen Traffic, um Ihren digitalen Erfolg zu fördern.",
    }
]


const Angebote = () => {
  return (
    <div className='angebote'>
        <h1>WAS WIR <b>ZU BIETEN</b> HABEN:</h1>
        <h2>UNSERE SERVICEANGEBOTE</h2>
        <div className='container'>
            {items.map((item)=>(
                <table key={item.id}>
                <thead>
                    <h1>{item.title}</h1>
                    <tr>
                        <th>Was ist das?</th>
                        <th style={{borderRight: "none"}}>Wie machen wir das?</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{item.definition}</td>
                        <td style={{border: "none"}}>{item.strategie}</td>
                    </tr>
                </tbody>
            </table>
            ))}
        </div>
    </div>
  )
}

export default Angebote