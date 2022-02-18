import { createStylesCache as createCache } from '@astral/ui';

export function createStylesCache() {
  return createCache({ key: 'css', prepend: true });
}

export default createStylesCache
