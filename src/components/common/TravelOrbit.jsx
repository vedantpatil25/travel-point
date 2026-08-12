import { Compass, Plane, Sparkles } from 'lucide-react';

export default function TravelOrbit({ className = '' }) {
  return <div className={`travel-orbit ${className}`} aria-hidden="true">
    <div className="travel-orbit__halo travel-orbit__halo--outer" />
    <div className="travel-orbit__halo travel-orbit__halo--middle" />
    <div className="travel-orbit__halo travel-orbit__halo--inner" />
    <div className="travel-orbit__globe"><div className="travel-orbit__globe-shine" /><div className="travel-orbit__globe-grid" /><img src="/assets/branding/travel-point-logo.png" alt="" /></div>
    <Plane className="travel-orbit__plane travel-orbit__plane--one" size={28} />
    <Plane className="travel-orbit__plane travel-orbit__plane--two" size={18} />
    <Sparkles className="travel-orbit__spark travel-orbit__spark--one" size={16} />
    <Sparkles className="travel-orbit__spark travel-orbit__spark--two" size={11} />
    <Compass className="travel-orbit__compass" size={22} />
  </div>;
}
