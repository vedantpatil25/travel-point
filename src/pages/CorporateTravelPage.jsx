import { BriefcaseBusiness } from 'lucide-react';
import Button from '../components/common/Button';
import PageHero from '../components/common/PageHero';
import SectionTitle from '../components/common/SectionTitle';
import { services } from '../data';

export default function CorporateTravelPage() {
  const service = services.find(item => item.slug === 'corporate-travel');
  return <><PageHero kicker="For business" title={<>Travel that keeps<br /><em>business moving.</em></>} copy={service.description} /><section className="section corporate-grid"><div><SectionTitle kicker="Corporate travel management" title="The journey between the meetings matters." copy="Travel Point provides end-to-end corporate travel solutions for business offsites, events and employee travel management — with organized support and cost-effective solutions." /><Button to="/contact">Start a conversation</Button></div><div className="corporate-card"><BriefcaseBusiness size={28} /><span className="kicker">End-to-end support</span><h3>Clear planning.<br />Considered execution.</h3><p>Tell us about your team, event or business travel needs.</p></div></section></>;
}
