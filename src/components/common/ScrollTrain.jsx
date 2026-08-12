import { useEffect, useRef, useState } from 'react';
import { useReducedMotion, useScroll, useSpring, useTransform, motion } from 'framer-motion';

export default function ScrollTrain() {
  const { scrollYProgress } = useScroll();
  const reduceMotion = useReducedMotion();
  const trackRef = useRef(null);
  const [travelDistance, setTravelDistance] = useState(0);

  useEffect(() => {
    const updateDistance = () => {
      const trackWidth = trackRef.current?.getBoundingClientRect().width ?? window.innerWidth - 48;
      const trainScale = window.matchMedia('(max-width: 700px)').matches ? 1.04 : 1.28;
      const enlargedTrainWidth = 58 * trainScale;
      setTravelDistance(Math.max(trackWidth - enlargedTrainWidth, 0));
    };
    updateDistance();
    window.addEventListener('resize', updateDistance);
    const observer = trackRef.current ? new ResizeObserver(updateDistance) : null;
    observer?.observe(trackRef.current);
    return () => {
      window.removeEventListener('resize', updateDistance);
      observer?.disconnect();
    };
  }, []);

  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: .35 });
  const trainX = useTransform(progress, [0, 1], [0, travelDistance]);
  const progressWidth = useTransform(progress, [0, 1], ['0%', '100%']);
  const labelOpacity = useTransform(progress, [0, .12, .9, 1], [0, 1, 1, 0]);

  return <div className="scroll-train" aria-hidden="true">
    <div className="scroll-train__track" ref={trackRef}><motion.span style={{ width: progressWidth }} /></div>
    <motion.div className="scroll-train__vehicle" style={{ x: trainX }}>
      <div className="scroll-train__vehicle-art">
      <span className="scroll-train__smoke scroll-train__smoke--one" />
      <span className="scroll-train__smoke scroll-train__smoke--two" />
      <div className="scroll-train__engine">
        <span className="scroll-train__chimney" />
        <span className="scroll-train__window" />
        <span className="scroll-train__headlight" />
      </div>
      <div className="scroll-train__car"><span /><span /></div>
      <i className="scroll-train__wheel scroll-train__wheel--one" />
      <i className="scroll-train__wheel scroll-train__wheel--two" />
      <i className="scroll-train__wheel scroll-train__wheel--three" />
      </div>
    </motion.div>
    {!reduceMotion && <motion.span className="scroll-train__destination" style={{ opacity: labelOpacity }}>Journey in motion</motion.span>}
  </div>;
}
