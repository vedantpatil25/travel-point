import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { destinations } from '../../data';
import SectionTitle from '../common/SectionTitle';
import { Stagger, StaggerItem } from '../common/Motion';

export default function DestinationPreview() {
  return <section className="destinations section"><SectionTitle kicker="Destination expertise" title="India, with more to discover." copy="Deep knowledge and established networks across four distinctive regions — each with its own rhythm." /><Stagger className="destination-grid">{destinations.map((destination, index) => <StaggerItem className={`destination-card destination-card--${index + 1}`} key={destination.slug}><Link to={`/destinations/${destination.slug}`}><img src={destination.image} alt={`${destination.name} travel`} loading="lazy" /><div className="destination-shade" /><div className="destination-copy"><span>{destination.eyebrow}</span><h3>{destination.name}</h3><p>{destination.places}</p><ArrowRight size={19} /></div></Link></StaggerItem>)}</Stagger><div className="center-link"><Link className="text-link" to="/destinations">See all destination expertise <ArrowRight size={17} /></Link></div></section>;
}
