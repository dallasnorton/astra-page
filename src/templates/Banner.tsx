import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="NVIDIA 2022 GTC Conference"
      subtitle="Detection of DGA based malicious domain names using real-time ML techniques"
      button={
        <Link href="https://www.nvidia.com/gtc/session-catalog/?search=sood&search=sood&tab.scheduledorondemand=1583520458947001NJiE#/session/16385740840790013OIS">
          <a>
            <Button>Watch Conference Talk</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
