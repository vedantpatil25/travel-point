import { Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { contact } from '../../data';

export default function Footer() {
  return <footer className="footer"><div className="footer-main">
    <div><img className="footer-logo" src="/assets/branding/travel-point-logo.png" alt="Travel Point" /><p className="footer-tag">Explore. Experience. Enjoy.</p><p className="footer-copy">Your trusted travel partner for thoughtful journeys across India and the world.</p></div>
    <div><p className="footer-label">Explore</p><Link to="/about">About us</Link><Link to="/services">All services</Link><Link to="/destinations">Destinations</Link><Link to="/corporate-travel">Corporate travel</Link></div>
    <div><p className="footer-label">Connect</p><a href={`tel:${contact.phone.replaceAll(' ', '')}`}><Phone size={15} /> {contact.phone}</a><a href={`mailto:${contact.email}`}><Mail size={15} /> Email us</a><span><MapPin size={15} /> New Delhi, India</span></div>
  </div><div className="footer-bottom"><span>© {new Date().getFullYear()} TRAVEL POINT</span><span>Established 2018 · Your Journey, Our Priority</span></div></footer>;
}
