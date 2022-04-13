import React, { useState } from 'react';

import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import ListBox from '../Listbox/Listbox';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => {
  const [isLoading, setIsLoading] = useState(false);
  const onChange = async (value: { name: string }) => {
    try {
      setIsLoading(true);
      const resp = await fetch('https://cat-fact.herokuapp.com/facts');
      const data = await resp.json();
      setIsLoading(false);
      console.log(data);
    } catch (error) {
      console.warn(error);
      setIsLoading(false);
    }
  };

  return (
    <Background color="bg-primary-50">
      <Section yPadding="py-6">
        <NavbarTwoColumns logo={<Logo xl />}>
          {isLoading && (
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-primary-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          )}
          <ListBox onChange={onChange} />
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
