import {HeartHandshake} from 'lucide-react';
import {principles} from '../../data';
import SectionTitle from '../common/SectionTitle';

export default function PrinciplesSection() {
    return <section className="principles section section--brown"><SectionTitle light kicker="What guides us"
                                                                                title="Good travel leaves something good behind."/>
        <div className="principles-grid">{principles.map(([title, copy], index) => <div className="principle"
                                                                                        key={title}>
            <span>0{index + 1}</span><HeartHandshake size={24}/><h3>{title}</h3><p>{copy}</p></div>)}</div>
    </section>;
}
