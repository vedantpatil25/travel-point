import { Plane } from 'lucide-react';

export default function HomeFlightPath() {
  return <div className="home-flight-path" aria-hidden="true">
    <svg viewBox="0 0 480 260"><path className="home-flight-path__line" d="M22 208 C120 34 202 236 292 116 S404 34 462 78" /></svg>
    <span className="home-flight-path__dot home-flight-path__dot--one" /><span className="home-flight-path__dot home-flight-path__dot--two" />
    <Plane className="home-flight-path__plane" size={24} />
  </div>;
}
