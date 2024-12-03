// import Navbar from './components/Navbar'

// const App = () => {
//   return (
//     <>
//       <div className='overflow-hidden flex flex-col justify-center items-center w-[100vw]'>
//         <Navbar />
//         <div>

//         </div>
//       </div>
//     </>
//   )
// }

// export default App



import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import WhatYouLearn from './components/WhatYouLearn';
// import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Router>
      <div className="font-sans text-gray-800">
        <Hero />
        <Services />
        <About />
        <WhatYouLearn />
        {/* <Testimonials /> */}
        <ContactForm />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
