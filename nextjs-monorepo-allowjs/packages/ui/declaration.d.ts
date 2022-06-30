/// <reference types="@emotion/react/types/css-prop" />

declare module '@emotion/react' {
  import { Theme as BaseTheme } from '@astral/ui';

  export interface Theme extends BaseTheme {}
}

declare module '*.ttf' {
  const src: string;

  export default src;
}

declare module '*.woff' {
  const src: string;

  export default src;
}

declare module '*.woff2' {
  const src: string;

  export default src;
}

declare module '*.svg?component' {
  import { FunctionComponent } from 'react';

  const Icon: FunctionComponent<{
    className?: string;
    width?: number;
    height?: number;
    style?: Record<string, string>;
  }>;

  export default Icon;
}

declare module '*.svg' {
  const image: string;

  export default image;
}

declare module '*.png' {
  const image: string;

  export default image;
}

declare module '*.jpg' {
  const image: string;

  export default image;
}
