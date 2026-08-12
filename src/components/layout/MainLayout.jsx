import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { motion } from '../common/Motion';
import Footer from './Footer';
import Navbar from './Navbar';
import ScrollToTop from './ScrollToTop';
import ScrollTrain from '../common/ScrollTrain';

const metadata = {
  '/': ['TRAVEL POINT — Your Trusted Travel Partner', 'Thoughtful travel experiences across India and international destinations.'],
  '/about': ['About Travel Point — Your Trusted Travel Partner', 'Learn about Travel Point, our principles and our customer-focused approach to travel.'],
  '/services': ['Travel Services — TRAVEL POINT', 'Domestic, international, corporate, adventure, pilgrimage and custom travel services.'],
  '/destinations': ['Destinations — TRAVEL POINT', 'Explore Travel Point destination expertise across four regions of India.'],
  '/corporate-travel': ['Corporate Travel — TRAVEL POINT', 'End-to-end corporate travel solutions for offsites, events and employee travel.'],
  '/custom-travel': ['Custom Travel — TRAVEL POINT', 'Shape a bespoke journey around your preferences, budget and travel objectives.'],
  '/contact': ['Contact Travel Point', 'Connect with Travel Point in New Delhi to begin planning your next journey.']
};

function RouteMetadata() {
  const { pathname } = useLocation();
  useEffect(() => {
    const fallback = pathname.startsWith('/services/') ? 'Travel Service — TRAVEL POINT' : pathname.startsWith('/destinations/') ? 'Destination Expertise — TRAVEL POINT' : 'Page not found — TRAVEL POINT';
    const [title, description] = metadata[pathname] || [fallback, 'TRAVEL POINT — Your Trusted Travel Partner.'];
    document.title = title;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta); }
    meta.content = description;
  }, [pathname]);
  return null;
}

export default function MainLayout({ children }) {
  const { pathname } = useLocation();
  return <><RouteMetadata /><ScrollToTop /><Navbar />
    <AnimatePresence mode="wait" initial={false}>
      <motion.main key={pathname} className="route-shell" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .32, ease: 'easeOut' }}>{children}</motion.main>
    </AnimatePresence>
    <Footer /><ScrollTrain /></>;
}
