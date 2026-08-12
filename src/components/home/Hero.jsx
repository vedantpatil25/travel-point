import {ArrowRight} from 'lucide-react';
import {Link} from 'react-router-dom';
import Button from '../common/Button';
import HomeFlightPath from './HomeFlightPath';

export default function Hero() {
    return <section className="hero">
        <div className="hero-image"/>
        <div className="hero-overlay"/>
        <div className="hero-content"><div className="hero-brand-lockup"><strong>TRAVEL POINT</strong><span>EXPLORE. EXPERIENCE. ENJOY.</span></div><p className="eyebrow">TRAVEL & TOURISM · ESTABLISHED 2018</p><h1>Go
            where<br/><em>you feel alive.</em></h1><p className="hero-intro">Thoughtful journeys, shaped around you —
            from the heart of India to destinations worldwide.</p>
            <div className="hero-actions"><Button to="/custom-travel">Plan your journey</Button><Link
                className="text-link text-link--light" to="/destinations">Explore destinations <ArrowRight
                size={17}/></Link></div>
        </div>
        <HomeFlightPath />
        <div className="hero-detail-card">
            <span className="hero-detail-card__eyebrow">TRAVEL POINT</span>
            <strong>Your trusted<br />travel partner.</strong>
            <div className="hero-detail-card__meta"><span>Established 2018</span><span>24/7 travel support</span></div>
        </div>
        <div className="hero-note"><span>01</span><span>Journey begins here</span></div>
    </section>;
}
