export default function SectionTitle({ kicker, title, copy, light = false }) {
  return <div className={`section-title ${light ? 'section-title--light' : ''}`}>
    <span className="kicker">{kicker}</span>
    <h2>{title}</h2>
    {copy && <p>{copy}</p>}
  </div>;
}
