import TravelOrbit from './TravelOrbit';
import { Reveal, motion } from './Motion';

export default function PageHero({ kicker, title, copy }) {
  return <section className="page-hero">
    <Reveal><p className="eyebrow">{kicker}</p><h1>{title}</h1>{copy && <p>{copy}</p>}</Reveal>
    <motion.div initial={{ opacity: 0, scale: .9, rotate: -5 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1, delay: .15, ease: [0.22, 1, 0.36, 1] }}><TravelOrbit className="travel-orbit--page" /></motion.div>
  </section>;
}
