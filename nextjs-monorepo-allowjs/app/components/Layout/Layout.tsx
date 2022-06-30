import React from 'react';
import { DashboardLayout } from '@example/ui';

import { Header } from './Header';

export type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = (props) => {
  const { children } = props;

  return (
    <DashboardLayout>
      <Header />
      <DashboardLayout.Main>{children}</DashboardLayout.Main>
    </DashboardLayout>
  );
};
