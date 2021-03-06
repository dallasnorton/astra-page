import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => {
  return (
    <Background color="bg-primary-50">
      <Section yPadding="py-6">
        <NavbarTwoColumns logo={<Logo xl />}>
          <li>
            <Link href="https://github.com/dallasnorton/astra-page">
              <a>GitHub</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Sign in</a>
            </Link>
          </li>
        </NavbarTwoColumns>
      </Section>

      <Section yPadding="pt-20 pb-32">
        <HeroOneButton
          title={
            <>
              {'Using ML/AI to Detect\n'}
              <span className="text-primary-500">AGDs</span>
            </>
          }
          description="Powered by F5"
          button={
            <Link href="https://f5.sharepoint.com/sites/InnovateF5/SitePages/Astra--Using-ML-AI-to-Detect-AGDs.aspx">
              <a>
                <Button xl>Learn More</Button>
              </a>
            </Link>
          }
        />
      </Section>
    </Background>
  );
};

export { Hero };
