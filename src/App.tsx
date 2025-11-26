import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TopSoftware from './components/TopSoftware';
import Statistics from './components/Statistics';
import Services from './components/Services';
import Clients from './components/Clients';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import WhyChooseUs from './components/WhyChooseUs';
import GrowBusiness from './components/GrowBusiness';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About/>
      {/* <TopSoftware /> */}
      <Statistics />
      <Services />
      <Clients />
      <Testimonials />
      <Team />
      <WhyChooseUs />
      <GrowBusiness />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
