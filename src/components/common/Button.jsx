import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Button({ to = '/contact', children = 'Start planning', dark = false }) {
  return <Link className={`button ${dark ? 'button--dark' : 'button--gold'}`} to={to}>{children}<ArrowRight size={17} /></Link>;
}
