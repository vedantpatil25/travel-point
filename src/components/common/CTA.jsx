import Button from './Button';

export default function CTA() {
    return <section className="cta section">
        <div className="cta-inner">
            <span className="kicker">Let’s make your next trip unforgettable!</span>
            <h2>Where will your<br/><em>next story take you?</em></h2>
            <Button to="/custom-travel" dark>Make it your own</Button>
        </div>
    </section>;
}
