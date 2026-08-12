import {useParams} from 'react-router-dom';
import Button from '../components/common/Button';
import Icon from '../components/common/Icon';
import PageHero from '../components/common/PageHero';
import SectionTitle from '../components/common/SectionTitle';
import {services} from '../data';
import NotFoundPage from './NotFoundPage';

export default function ServiceDetailPage() {
    const {slug} = useParams();
    const service = services.find(item => item.slug === slug);
    if (!service) return <NotFoundPage/>;
    return <><PageHero kicker={`Service ${service.number}`} title={<>{service.title}<br/><em>your way.</em></>}
                       copy={service.description}/>
        <section className="detail-section section">
            <div className="detail-icon"><Icon name={service.icon} size={46}/></div>
            <div><SectionTitle kicker="A considered approach" title="Built around what matters to you."
                               copy="We listen first, then bring the right planning, support and destination knowledge to your journey. Tell us what you have in mind and we’ll help shape the details."/><Button
                to="/contact">Talk to Travel Point</Button></div>
        </section>
    </>;
}
