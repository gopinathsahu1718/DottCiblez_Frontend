import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import WebDevelopment from './pages/WebDevelopment';
import SoftwareDesign from './pages/SoftwareDesign';
import SocialMediaAppDevelopment from './pages/SocialMediaAppDevelopment';
import MarketingServices from './pages/MarketingServices';
import DatacenterColocation from './pages/DatacenterColocation';
import ComputerSystemsCommunicationEquipment from './pages/ComputerSystemsCommunicationEquipment';
import CloudDatacenterService from './pages/CloudDatacenterService';
import CyberAuditService from './pages/CyberAuditService';
import EducationSoftware from './pages/EducationSoftware';
import ITInfrastructureService from './pages/ITInfrastructureService';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/web-development-service" element={<WebDevelopment />} />
          <Route path="/software-design-service" element={<SoftwareDesign />} />
          <Route path="/social-media-development-service" element={<SocialMediaAppDevelopment />} />
          <Route path="/social-media-marketing-service" element={<MarketingServices />} />
          <Route path="/datacenter-colocation-service" element={<DatacenterColocation />} />
          <Route path="/csce-service" element={<ComputerSystemsCommunicationEquipment />} />
          <Route path="/cd-service" element={<CloudDatacenterService />} />
          <Route path="/cyber-service" element={<CyberAuditService />} />
          <Route path="/education-software-service" element={<EducationSoftware />} />
          <Route path="/it-infrastructure-service" element={<ITInfrastructureService />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;