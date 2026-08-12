import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from './Motion';

export default function Button({ to = '/contact', children = 'Start planning', dark = false }) {
  return <motion.div whileHover={{ y: -3 }} whileTap={{ scale: .97 }} className="button-motion"><Link className={`button ${dark ? 'button--dark' : 'button--gold'}`} to={to}>{children}<ArrowRight size={17} /></Link></motion.div>;
}
