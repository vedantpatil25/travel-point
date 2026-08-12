import {useParams} from 'react-router-dom';
import Button from '../components/common/Button';
import SectionTitle from '../components/common/SectionTitle';
import TravelOrbit from '../components/common/TravelOrbit';
import {destinations} from '../data';
import NotFoundPage from './NotFoundPage';

export default function DestinationDetailPage() {
    const {slug} = useParams();
    const destination = destinations.find(item => item.slug === slug);
    if (!destination) return <NotFoundPage/>;
    const places = destination.places.split(' · ');
    return <>
        <section className="destination-detail-hero">
            <div className="destination-detail-media"><img src={destination.image}
                                                           alt={`${destination.name} landscape`}/>
                <div className="destination-detail-media__shade"/>
                <span className="destination-detail-index">01 / 04</span></div>
            <div className="destination-detail-copy"><TravelOrbit className="travel-orbit--destination"/>
                <div className="destination-detail-copy__inner"><p className="eyebrow">Destination expertise</p>
                    <h1>{destination.name}<br/><em>in your own rhythm.</em></h1><p
                        className="destination-detail-summary">{destination.eyebrow}. Explore with Travel Point’s
                        destination knowledge and established networks.</p>
                    <div className="destination-place-chips">{places.map(place => <span
                        key={place}>{place}</span>)}</div>
                </div>
            </div>
        </section>
        <section className="section detail-destination">
            <div><SectionTitle kicker="Places to begin" title="Let the landscape set the pace."
                               copy={`Travel Point brings together the places that define ${destination.name}: ${destination.places}. We can shape the experience around your travel objectives.`}/>
            </div>
            <div className="detail-destination__action"><p>Build a journey around your preferences, budget and travel
                objectives.</p><Button to="/custom-travel">Build my journey</Button></div>
        </section>
    </>;
}
