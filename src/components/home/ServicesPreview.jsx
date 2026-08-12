import {ArrowRight} from 'lucide-react';
import {Link} from 'react-router-dom';
import {services} from '../../data';
import Icon from '../common/Icon';
import SectionTitle from '../common/SectionTitle';
import { Stagger, StaggerItem } from '../common/Motion';

export default function ServicesPreview() {
    return <section className="services-preview section section--cream"><SectionTitle kicker="Ways to wander"
                                                                                      title="Travel made personal."
                                                                                      copy="From a first family holiday to an important business offsite, every detail has a reason."/>
        <Stagger className="service-grid">{services.map(service => <StaggerItem className="service-card" key={service.slug}>
            <Link className="service-card__link" to={`/services/${service.slug}`}>
                <span className="service-number">{service.number}</span><span className="service-icon"><Icon name={service.icon}/></span>
                <h3>{service.title}</h3><p>{service.short}</p><span className="card-arrow"><ArrowRight size={18}/></span>
            </Link>
        </StaggerItem>)}</Stagger>
    </section>;
}
