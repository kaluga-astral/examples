import { createCache } from '@astral/ui';

export function createEmotionCache() {
  return createCache({ key: 'css', prepend: true });
}

export default createEmotionCache
