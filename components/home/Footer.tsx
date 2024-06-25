import { HTMLAttributeAnchorTarget } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

// import { CONTACT_US_EMAIL } from '@/lib/env';
import BaseImage from '../image/BaseImage';

export const runtime = 'edge';

function InfoLink({
  href,
  title,
  target,
  type,
}: {
  href: string;
  title: string;
  target?: HTMLAttributeAnchorTarget;
  type?: string;
}) {
  return (
    <Link
      href={href}
      title={title}
      className='whitespace-nowrap text-xs hover:opacity-70 lg:text-sm'
      target={target}
      type={type}
    >
      {title}
    </Link>
  );
}

export default function Footer() {
  const t = useTranslations('Footer');

  const SupportLinks = [
    {
      title: t('tap4'),
      href: 'https://www.airanking.ai',
    },
    {
      title: t('tattoo'),
      href: 'https://tattooai.design',
    },
  ];

  const INFO_LIST = [
    {
      title: t('privacy'),
      href: '/privacy-policy',
    },
    {
      title: t('termsConditions'),
      href: '/terms-of-service',
    },
  ];

  return (
    <footer className='w-full bg-white'>
      <div className='mx-auto flex min-h-[251px] max-w-pc flex-col items-center justify-between p-10 pb-5 lg:h-[180px] lg:flex-row lg:px-0 lg:pb-10'>
        <div className='flex flex-col items-center lg:items-stretch'>
          <div className='flex flex-row items-center space-x-2 pb-3'>
            <BaseImage
              src='/images/logo.svg'
              alt={t('title')}
              title={t('title')}
              width={32}
              height={32}
              className='size-[32px] lg:size-[50px]'
            />
            <h1 className='flex-center flex font-serif text-xl font-bold text-violet-600 lg:text-2xl'>{t('title')}</h1>
          </div>
          <h2 className='text-xs'>{t('subTitle')}</h2>
        </div>
        <div className='mt-5 flex flex-col items-center gap-y-5 lg:mt-0 lg:flex-row lg:items-stretch lg:gap-x-10'>
          <div className='flex w-full flex-col gap-2'>
            <h2 className='font-bold'>{t('support')}</h2>
            {SupportLinks.map((item) => (
              <a
                href={item.href}
                key={item.href}
                target='_blank'
                rel='noreferrer'
                className='text-xs hover:opacity-70 lg:text-base'
                title={item.title}
              >
                {item.title}
              </a>
            ))}
          </div>
          <div className='grid grid-cols-2 gap-x-10 gap-y-2 lg:grid-cols-1 lg:gap-2'>
            {INFO_LIST.map((item) => (
              <InfoLink key={item.href} href={item.href} title={item.title} />
            ))}
            {/* <a
              href={`mailto:${CONTACT_US_EMAIL}`}
              className='whitespace-nowrap text-xs hover:opacity-70 lg:text-base'
              title={t('contactUs')}
              type='email'
            >
              {t('contactUs')}
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
