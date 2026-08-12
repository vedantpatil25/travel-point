import { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { destinations, services } from '../../data';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
    <Link className="brand" to="/" aria-label="Travel Point home"><img src="/assets/branding/travel-point-logo.png" alt="Travel Point" /></Link>
    <nav className={`nav-links ${open ? 'nav-links--open' : ''}`}>
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavigationDropdown label="Services" items={services.map(item => ({ label: item.title, to: `/services/${item.slug}` }))} />
      <NavigationDropdown label="Destinations" items={destinations.map(item => ({ label: item.name, to: `/destinations/${item.slug}` }))} />
      <NavLink to="/corporate-travel">Corporate travel</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <Link className="button button--small button--gold mobile-cta" to="/custom-travel">Plan a journey <ArrowRight size={16} /></Link>
    </nav>
    <Link className="button button--small button--gold desktop-cta" to="/custom-travel">Plan a journey <ArrowRight size={16} /></Link>
    <button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(value => !value)}>{open ? <X /> : <Menu />}</button>
  </header>;
}

function NavigationDropdown({ label, items }) {
  return <div className="nav-dropdown"><button type="button">{label} <ChevronDown size={14} /></button><div className="dropdown-menu">{items.map(item => <Link key={item.to} to={item.to}>{item.label}</Link>)}</div></div>;
}
