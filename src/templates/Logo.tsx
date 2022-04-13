import { useRouter } from 'next/router';

import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';
  const router = useRouter();

  return (
    <span className={`text-gray-900 inline-flex items-center ${fontStyle}`}>
      <img
        src={`${router.basePath}assets/images/f5-logo.svg`}
        alt={''}
        className="h-8 w-8 mr-2"
      />

      {AppConfig.site_name}
    </span>
  );
};

export { Logo };
