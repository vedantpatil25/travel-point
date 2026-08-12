import { Sparkles } from 'lucide-react';
import ContactForm from '../components/forms/ContactForm';
import PageHero from '../components/common/PageHero';

export default function CustomTravelPage() {
  return <><PageHero kicker="Your journey, your way" title={<>Make it<br /><em>meaningful.</em></>} copy="Bespoke travel itineraries built around your preferences, budget and travel objectives." /><ContactForm /><section className="section custom-note"><Sparkles /><div><h2>Every traveller is unique.</h2><p>That’s why we start with your idea — not a fixed package. Share as much or as little as you know, and we’ll help shape the next step.</p></div></section></>;
}
