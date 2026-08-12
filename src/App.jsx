import { Route, Routes } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CorporateTravelPage from './pages/CorporateTravelPage';
import CustomTravelPage from './pages/CustomTravelPage';
import DestinationDetailPage from './pages/DestinationDetailPage';
import DestinationsPage from './pages/DestinationsPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import ServicesPage from './pages/ServicesPage';

export default function App() {
  return <MainLayout><Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/services" element={<ServicesPage />} />
    <Route path="/services/:slug" element={<ServiceDetailPage />} />
    <Route path="/destinations" element={<DestinationsPage />} />
    <Route path="/destinations/:slug" element={<DestinationDetailPage />} />
    <Route path="/corporate-travel" element={<CorporateTravelPage />} />
    <Route path="/custom-travel" element={<CustomTravelPage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes></MainLayout>;
}
