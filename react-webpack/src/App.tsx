import { DashboardLayout, ThemeProvider } from '@astral/ui';
import iconSrc from '@astral/illustrations/no-certificates.svg';

import { theme } from './config/theme';
import MainPage from './pages/main';

const App = () => (
  <ThemeProvider theme={theme}>
    <DashboardLayout>
      <DashboardLayout.Header
        logoAlt="Астрал"
        logoSrc={iconSrc}
        LogoLink={({ Logo }) => <a href="/">{Logo}</a>}
      />
      <DashboardLayout.SideBar>sidebar</DashboardLayout.SideBar>
      <DashboardLayout.Main>
        <MainPage />
      </DashboardLayout.Main>
    </DashboardLayout>
  </ThemeProvider>
);

export default App;
