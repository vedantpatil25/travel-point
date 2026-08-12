import ContactForm from '../components/forms/ContactForm';
import PageHero from '../components/common/PageHero';

export default function ContactPage() {
  return <><PageHero kicker="Contact Travel Point" title={<>Your next journey<br /><em>starts here.</em></>} copy="Reach out to the Travel Point team in New Delhi." /><ContactForm /></>;
}
