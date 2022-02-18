import { createTheme, Brand } from '@astral/ui';

const fontsUrls = {
  bold: {
    woff: '/fonts/ubuntu/UbuntuBold.woff',
    woff2: '/fonts/ubuntu/UbuntuBold.woff2'
  },
  light: {
    woff: '/fonts/ubuntu/UbuntuLight.woff',
    woff2: '/fonts/ubuntu/UbuntuLight.woff2'
  },
  regular: {
    woff: '/fonts/ubuntu/UbuntuRegular.woff',
    woff2: '/fonts/ubuntu/UbuntuRegular.woff2'
  },
  medium: {
    woff: '/fonts/ubuntu/UbuntuMedium.woff',
    woff2: '/fonts/ubuntu/UbuntuMedium.woff2'
  }
};

export const theme = createTheme({ brand: Brand.DEFAULT, fontsUrls });

export default theme;
