import CTA from '../components/common/CTA';
import DestinationPreview from '../components/home/DestinationPreview';
import FeatureBand from '../components/home/FeatureBand';
import Hero from '../components/home/Hero';
import IntroSection from '../components/home/IntroSection';
import PrinciplesSection from '../components/home/PrinciplesSection';
import ServicesPreview from '../components/home/ServicesPreview';

export default function HomePage() {
  return <><Hero /><IntroSection /><ServicesPreview /><FeatureBand /><DestinationPreview /><PrinciplesSection /><CTA /></>;
}
