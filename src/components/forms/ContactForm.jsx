import { useForm, ValidationError } from '@formspree/react';
import { ArrowRight, Check, Mail, MapPin, Phone } from 'lucide-react';
import { contact, services } from '../../data';
import SectionTitle from '../common/SectionTitle';

export default function ContactForm() {
    const [state, handleSubmit] = useForm('xoeawrld');

    return <section className="contact-section section">
        <div className="contact-intro"><SectionTitle kicker="Start a conversation"
                                                     title={<>Let’s plan<br/><em>something good together.</em></>}
                                                     copy="Have a destination in mind, or just a feeling? We’d love to hear from you."/>
            <div className="contact-details"><a href={`tel:${contact.phone.replaceAll(' ', '')}`}><Phone/>{contact.phone}</a><a
                href={`mailto:${contact.email}`}><Mail/>{contact.email}</a><span><MapPin/>{contact.address}</span></div>
        </div>
        <form className="inquiry-form" action="https://formspree.io/f/xoeawrld" method="POST" onSubmit={handleSubmit} noValidate>
            {state.succeeded ? <div className="form-success"><Check size={28}/><h3>Thanks for reaching out.</h3><p>Your enquiry is ready
                for the Travel Point team. We’ll be in touch through the details you shared.</p></div> : <>
                <label htmlFor="contact-name">Name<input id="contact-name" name="name" required placeholder="Your name"/></label>
                <label htmlFor="contact-email">Email<input id="contact-email" name="email" type="email" required placeholder="you@example.com"/><ValidationError prefix="Email" field="email" errors={state.errors}/></label>
                <label htmlFor="contact-type">What are you planning? <select id="contact-type" name="type" defaultValue="">
                    <option value="" disabled>Select an option</option>
                    {services.map(service => <option key={service.slug} value={service.title}>{service.title}</option>)}
                </select></label>
                <label htmlFor="contact-message">Tell us a little more<textarea id="contact-message" name="message" rows="5" required
                    placeholder="Where would you like to go? What should we know?"/><ValidationError prefix="Message" field="message" errors={state.errors}/></label>
                {state.errors && <p className="form-error">There was a problem sending your enquiry. Please check the fields and try again.</p>}
                <button className="button button--gold" type="submit" disabled={state.submitting}>{state.submitting ? 'Sending…' : 'Send enquiry'} <ArrowRight size={17}/></button>
            </>}
        </form>
    </section>;
}
