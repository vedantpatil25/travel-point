import { Reveal } from './Motion';

export default function SectionTitle({ kicker, title, copy, light = false }) {
  return <Reveal className={`section-title ${light ? 'section-title--light' : ''}`}>
    <span className="kicker">{kicker}</span>
    <h2>{title}</h2>
    {copy && <p>{copy}</p>}
  </Reveal>;
}
