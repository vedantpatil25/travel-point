import {ArrowRight} from 'lucide-react';
import {Link} from 'react-router-dom';

export default function FeatureBand() {
    return <section className="feature-band section">
        <div className="feature-image"/>
        <div className="feature-content"><p className="kicker">A little more certainty</p><h2>Explore further.<br/><em>Feel
            looked after.</em></h2><p>With quality assurance, transparent pricing, comprehensive pre-travel information
            and 24/7 travel support, your journey has a considered team behind it.</p><Link
            className="text-link text-link--light" to="/about">Why Travel Point <ArrowRight size={17}/></Link></div>
    </section>;
}
