import {ArrowRight} from 'lucide-react';
import {Link} from 'react-router-dom';
import CTA from '../components/common/CTA';
import Icon from '../components/common/Icon';
import PageHero from '../components/common/PageHero';
import {services} from '../data';

export default function ServicesPage() {
    return <><PageHero kicker="Ways to travel" title={<>A journey for<br/><em>every reason.</em></>}
                       copy="From domestic discovery to international holidays, business travel and bespoke escapes."/>
        <section className="section section--cream">
            <div className="service-list">{services.map(service => <Link className="service-row" key={service.slug}
                                                                         to={`/services/${service.slug}`}><span>{service.number}</span><Icon
                name={service.icon} size={25}/>
                <div><h2>{service.title}</h2><p>{service.description}</p></div>
                <ArrowRight/></Link>)}</div>
        </section>
        <CTA/></>;
}
