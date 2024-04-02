import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./components/hero/hero";
import Navbar from "./components/navbar/Navbar";
import Benefit from "./components/Benefit/Benefit";
import Services from "./components/Services/Services";
import Referenzen from "./components/Referenzen/Referenzen";
import Footer from "./components/footer/Footer";
import Kontakt from "./components/Kontakt/Kontakt";
import "./app.scss";

const App = () => {
  return (
  <div className="App ">
    <Navbar />
    <section id="hero">
      <Hero />
    </section>
    <section id="benefit">
      <Benefit />
    </section>
    <section id="services">
      <Services />
    </section>
    <section id="referenzen">
      <Referenzen />
    </section>
    <section id="kontakt">
      <Kontakt />
    </section>
    <section id="footer">
      <Footer />
    </section>
  </div>
  )
};

export default App;
