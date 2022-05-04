import { createStylesCache as createCache } from '@astral/ui/server';

export function createStylesCache() {
  return createCache({ key: 'css', prepend: true });
}

export default createStylesCache
