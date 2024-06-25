import React from 'react';
import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';

import { formatTime } from '@/lib/utils/timeUtils';
import Faq from '@/components/Faq';

import DesktopTable from './DesktopTable';
import MobileTable from './MobileTable';

export const runtime = 'edge';

const ScrollToTop = dynamic(() => import('@/components/page/ScrollToTop'), { ssr: false });

export default function Page() {
  const t = useTranslations('Startup');

  return (
    <div className='flex flex-col'>
      <div className='my-5 flex flex-col text-center lg:mx-auto lg:my-10 lg:gap-4'>
        <h1 className='font-serif text-2xl font-bold  text-violet-600 lg:text-5xl'>{t('title')}</h1>
        <div>
          <h2 className='font-semi-bold text-balance text-xs text-black lg:text-xl'>{t('subTitle')}</h2>
          <h2 className='font-semi-bold text-balance text-xs text-black lg:text-xl'>
            {t('updateTime')} {formatTime(new Date().setDate(new Date().getDate() - 1), 'YYYY-MM-DD')}
          </h2>
        </div>
      </div>
      <DesktopTable />
      <MobileTable />
      <Faq />
      <ScrollToTop />
    </div>
  );
}
