import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
  const navigate = useNavigate();
  return <section className="not-found section"><img src="/assets/branding/travel-point-logo.png" alt="Travel Point" /><p className="eyebrow">Off the map</p><h1>Let’s find<br /><em>your way back.</em></h1><button className="button button--gold" onClick={() => navigate('/')}>Back to home <ArrowRight size={17} /></button></section>;
}
