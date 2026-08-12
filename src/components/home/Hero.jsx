import {ArrowRight} from 'lucide-react';
import {Link} from 'react-router-dom';
import Button from '../common/Button';
import HomeFlightPath from './HomeFlightPath';
import { Reveal, motion } from '../common/Motion';

export default function Hero() {
    return <section className="hero">
        <div className="hero-image"/>
        <div className="hero-overlay"/>
        <motion.div className="hero-content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .8 }}><motion.div className="hero-brand-lockup" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .12, duration: .7 }}><strong>TRAVEL POINT</strong><span>EXPLORE. EXPERIENCE. ENJOY.</span></motion.div><p className="eyebrow">TRAVEL & TOURISM · ESTABLISHED 2018</p><h1>Go
            where<br/><em>you feel alive.</em></h1><p className="hero-intro">Thoughtful journeys, shaped around you —
            from the heart of India to destinations worldwide.</p>
            <motion.div className="hero-actions" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .48, duration: .7 }}><Button to="/custom-travel">Plan your journey</Button><Link
                className="text-link text-link--light" to="/destinations">Explore destinations <ArrowRight
                size={17}/></Link></motion.div>
        </motion.div>
        <HomeFlightPath />
        <div className="hero-detail-card">
            <span className="hero-detail-card__eyebrow">TRAVEL POINT</span>
            <strong>Your trusted<br />travel partner.</strong>
            <div className="hero-detail-card__meta"><span>Established 2018</span><span>24/7 travel support</span></div>
        </div>
        <div className="hero-note"><span>01</span><span>Journey begins here</span></div>
    </section>;
}
