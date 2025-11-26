import Hero from '../components/Hero';
import About from '../components/About';
import Statistics from '../components/Statistics';
import Services from '../components/Services';
import Clients from '../components/Clients';
import Testimonials from '../components/Testimonials';
import Team from '../components/Team';
import WhyChooseUs from '../components/WhyChooseUs';
import GrowBusiness from '../components/GrowBusiness';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Statistics />
            <Services />
            <Clients />
            <Testimonials />
            <Team />
            <WhyChooseUs />
            <GrowBusiness />
            <Contact />
        </>
    );
};

export default Home;