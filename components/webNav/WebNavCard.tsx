import Link from 'next/link';

// import { SquareArrowOutUpRight } from 'lucide-react';

import { WebNavigationListRow } from '@/lib/data';

import BaseImage from '../image/BaseImage';

export default function WebNavCard({ name, thumbnailUrl, title, content }: WebNavigationListRow) {
  return (
    <div className='flex flex-col gap-3 rounded-[12px] bg-slate-200 p-2 lg:p-5'>
      <Link href={`/ai/${name}`} title={title}>
        <BaseImage
          width={278}
          height={156}
          src={thumbnailUrl || ''}
          alt={title}
          title={title}
          className='aspect-[278/156] rounded-[8px] bg-white/40 hover:opacity-70 '
        />

        <h3 className='mb-2 line-clamp-1 flex-1  items-center pt-2 text-sm font-bold hover:opacity-70 lg:text-base'>
          {title}
        </h3>

        {/* <SquareArrowOutUpRight className='size-5' /> */}
        {/* <span className='sr-only'>{title}</span> */}

        <p className='line-clamp-5 text-xs text-black/70 hover:opacity-70 lg:text-sm'>{content}</p>
      </Link>
    </div>
  );
}
