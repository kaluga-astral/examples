/// <reference types="@emotion/react/types/css-prop" />

import {
  createTheme,
  Theme as BaseTheme,
  Brand,
} from '@astral/ui';

declare module '@emotion/react' {
  export interface Theme extends BaseTheme {}
}

export const theme = createTheme({ 
  brand: Brand.DEFAULT, 
  fontsUrls: {
    light: {
      woff: '/_assets/fonts/ubuntu/UbuntuLight.woff',
      woff2: '/_assets/fonts/ubuntu/UbuntuLight.woff2',
    },
    regular: {
      woff: '/_assets/fonts/ubuntu/UbuntuRegular.woff',
      woff2: '/_assets/fonts/ubuntu/UbuntuRegular.woff2',
    },
    medium: {
      woff: '/_assets/fonts/ubuntu/UbuntuMedium.woff',
      woff2: '/_assets/fonts/ubuntu/UbuntuMedium.woff2',
    },
    bold: {
      woff: '/_assets/fonts/ubuntu/UbuntuBold.woff',
      woff2: '/_assets/fonts/ubuntu/UbuntuBold.woff2',
    },
  },
});

export default theme;
