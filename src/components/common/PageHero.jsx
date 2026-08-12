import TravelOrbit from './TravelOrbit';

export default function PageHero({ kicker, title, copy }) {
  return <section className="page-hero">
    <div><p className="eyebrow">{kicker}</p><h1>{title}</h1>{copy && <p>{copy}</p>}</div>
    <TravelOrbit className="travel-orbit--page" />
  </section>;
}
