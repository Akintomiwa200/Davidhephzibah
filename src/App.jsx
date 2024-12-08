import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import WhatYouLearn from './components/WhatYouLearn';
//import Testimonial from './components/Testmonial'; 
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import StockMarketMasterClass from './components/StockMarketMasterClass';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); 
  }, []);

  return (
    <Router>
      <div className="font-sans min-height-[100vh] w-[100vh] overflow-x-hidden text-gray-800">
              <Hero />
        <Services />
        <About />
        <StockMarketMasterClass/>
        <WhatYouLearn />
        <ContactForm />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
