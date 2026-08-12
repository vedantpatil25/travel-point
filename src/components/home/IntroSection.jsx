import {ArrowRight} from 'lucide-react';
import {Link} from 'react-router-dom';
import SectionTitle from '../common/SectionTitle';

export default function IntroSection() {
    return <section className="intro section">
        <div className="intro-mark">✳</div>
        <SectionTitle kicker="The Travel Point way" title={<>Your journey,<br/><em>our priority.</em></>}
                      copy="Travel Point is a professionally managed travel and tourism enterprise dedicated to exceptional experiences across India and international destinations."/>
        <div className="intro-aside"><span className="aside-line"/><p>We bring destination expertise, personalized
            service and responsible travel practices together — so you can travel with confidence.</p><Link
            className="text-link" to="/about">Discover our story <ArrowRight size={17}/></Link></div>
    </section>;
}
