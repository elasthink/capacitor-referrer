import { registerPlugin } from '@capacitor/core';

import type { ReferrerPlugin } from './definitions';

const Referrer = registerPlugin<ReferrerPlugin>('Referrer');
export { Referrer };
