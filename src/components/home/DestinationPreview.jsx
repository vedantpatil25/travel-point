import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { destinations } from '../../data';
import SectionTitle from '../common/SectionTitle';

export default function DestinationPreview() {
  return <section className="destinations section"><SectionTitle kicker="Destination expertise" title="India, with more to discover." copy="Deep knowledge and established networks across four distinctive regions — each with its own rhythm." /><div className="destination-grid">{destinations.map((destination, index) => <Link className={`destination-card destination-card--${index + 1}`} to={`/destinations/${destination.slug}`} key={destination.slug}><img src={destination.image} alt={`${destination.name} travel`} loading="lazy" /><div className="destination-shade" /><div className="destination-copy"><span>{destination.eyebrow}</span><h3>{destination.name}</h3><p>{destination.places}</p><ArrowRight size={19} /></div></Link>)}</div><div className="center-link"><Link className="text-link" to="/destinations">See all destination expertise <ArrowRight size={17} /></Link></div></section>;
}
