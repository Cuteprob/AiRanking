import Script from 'next/script';

import { GOOGLE_ADSENSE_URL } from '@/lib/env';

export const runtime = 'edge';

export default function GoogleAdScript() {
  return <Script async src={GOOGLE_ADSENSE_URL} crossOrigin='anonymous' />;
}
