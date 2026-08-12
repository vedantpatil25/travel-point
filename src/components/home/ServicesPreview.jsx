import {ArrowRight} from 'lucide-react';
import {Link} from 'react-router-dom';
import {services} from '../../data';
import Icon from '../common/Icon';
import SectionTitle from '../common/SectionTitle';

export default function ServicesPreview() {
    return <section className="services-preview section section--cream"><SectionTitle kicker="Ways to wander"
                                                                                      title="Travel made personal."
                                                                                      copy="From a first family holiday to an important business offsite, every detail has a reason."/>
        <div className="service-grid">{services.map(service => <Link className="service-card"
                                                                     to={`/services/${service.slug}`}
                                                                     key={service.slug}><span
            className="service-number">{service.number}</span><span className="service-icon"><Icon name={service.icon}/></span>
            <h3>{service.title}</h3><p>{service.short}</p><span className="card-arrow"><ArrowRight
                size={18}/></span></Link>)}</div>
    </section>;
}
