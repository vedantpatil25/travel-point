import { motion, useReducedMotion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

export function Reveal({ children, className = '', delay = 0, y = 24, once = true }) {
  const reduceMotion = useReducedMotion();
  return <motion.div
    className={className}
    initial={reduceMotion ? false : { opacity: 0, y }}
    whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
    viewport={{ once, amount: 0.16 }}
    transition={{ duration: 0.8, delay, ease }}
  >{children}</motion.div>;
}

export function Stagger({ children, className = '', delay = 0 }) {
  const reduceMotion = useReducedMotion();
  return <motion.div
    className={className}
    initial={reduceMotion ? false : 'hidden'}
    whileInView={reduceMotion ? undefined : 'show'}
    viewport={{ once: true, amount: 0.12 }}
    variants={{
      hidden: {},
      show: { transition: { staggerChildren: 0.08, delayChildren: delay } },
    }}
  >{children}</motion.div>;
}

export const StaggerItem = ({ children, className = '' }) => {
  const reduceMotion = useReducedMotion();
  return <motion.div
    className={className}
    variants={reduceMotion ? undefined : { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
    transition={{ duration: 0.65, ease }}
  >{children}</motion.div>;
};

export { motion };
