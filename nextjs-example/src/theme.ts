import { createTheme, Brand } from '@astral/ui';

const fontsUrls = {
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
};

export const theme = createTheme({ brand: Brand.DEFAULT, fontsUrls });

export default theme;
