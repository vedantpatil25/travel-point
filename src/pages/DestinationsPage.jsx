import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTA from '../components/common/CTA';
import PageHero from '../components/common/PageHero';
import { destinations } from '../data';

export default function DestinationsPage() {
  return <><PageHero kicker="Destination expertise" title={<>The places we<br /><em>know deeply.</em></>} copy="Four regions across India, each opened up with local understanding and thoughtful planning." /><section className="section section--cream"><div className="destination-list">{destinations.map(destination => <Link className="destination-list-row" key={destination.slug} to={`/destinations/${destination.slug}`}><img src={destination.image} alt={`${destination.name} travel`} loading="lazy" /><div><span className="kicker">{destination.eyebrow}</span><h2>{destination.name}</h2><p>{destination.places}</p></div><ArrowRight /></Link>)}</div></section><CTA /></>;
}
