import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import Faq from '@/components/Faq';

export const runtime = 'edge';

const ScrollToTop = dynamic(() => import('@/components/page/ScrollToTop'), { ssr: false });

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({
    locale,
    namespace: 'Metadata.explore',
  });

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const t = useTranslations('Explore');

  return (
    <div className='flex-y-center mx-auto w-full max-w-pc px-3'>
      <div className='my-5 flex flex-col text-center lg:mx-auto lg:my-10 lg:gap-4'>
        <h1 className='font-serif text-2xl font-bold  text-violet-600 lg:text-5xl'>{t('title')}</h1>
        <h2 className='font-semi-bold text-balance text-xs text-black lg:text-xl'>{t('subTitle')}</h2>
      </div>
      {children}
      <Faq />
      <ScrollToTop />
    </div>
  );
}
