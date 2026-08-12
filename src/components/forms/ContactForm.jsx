import {useState} from 'react';
import {ArrowRight, Check, Mail, MapPin, Phone} from 'lucide-react';
import {contact, services} from '../../data';
import SectionTitle from '../common/SectionTitle';

export default function ContactForm() {
    const [sent, setSent] = useState(false);
    const [error, setError] = useState('');
    const submit = event => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        if (!form.get('name') || !form.get('email') || !form.get('message')) {
            setError('Please complete your name, email and travel details.');
            return;
        }
        setError('');
        setSent(true);
    };
    return <section className="contact-section section">
        <div className="contact-intro"><SectionTitle kicker="Start a conversation"
                                                     title={<>Let’s plan<br/><em>something good together.</em></>}
                                                     copy="Have a destination in mind, or just a feeling? We’d love to hear from you."/>
            <div className="contact-details"><a
                href={`tel:${contact.phone.replaceAll(' ', '')}`}><Phone/>{contact.phone}</a><a
                href={`mailto:${contact.email}`}><Mail/>{contact.email}</a><span><MapPin/>{contact.address}</span></div>
        </div>
        <form className="inquiry-form" onSubmit={submit} noValidate>{sent ?
            <div className="form-success"><Check size={28}/><h3>Thanks for reaching out.</h3><p>Your enquiry is ready
                for the Travel Point team. We’ll be in touch through the details you shared.</p></div> : <>
                <label>Name<input name="name" placeholder="Your name"/></label><label>Email<input name="email"
                                                                                                  type="email"
                                                                                                  placeholder="you@example.com"/></label><label>What
                are you planning? <select name="type" defaultValue="">
                    <option value="" disabled>Select an option</option>
                    {services.map(service => <option key={service.slug}>{service.title}</option>)}
                </select></label><label>Tell us a little more<textarea name="message" rows="5"
                                                                       placeholder="Where would you like to go? What should we know?"/></label>{error &&
                <p className="form-error">{error}</p>}
                <button className="button button--gold" type="submit">Send enquiry <ArrowRight size={17}/></button>
            </>}</form>
    </section>;
}
