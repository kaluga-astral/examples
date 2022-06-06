import React from 'react'
import { DashboardLayout } from '@astral/ui'

import {Header} from './Header'

export type LayoutProps = {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = (props) => {
  const { children } = props;

  return (
    <DashboardLayout>
      <Header />
      <DashboardLayout.Sidebar>
        {/* <List>
          <ListItemButton>
            <ListItemIcon>
              <ProfileOutlineMd />
            </ListItemIcon>
            <ListItemText>Главная</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <CompanyOutlineMd />
            </ListItemIcon>
            <ListItemText>Документы</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <SettingsFillMd />
            </ListItemIcon>
            <ListItemText>Контрагенты</ListItemText>
          </ListItemButton>
        </List> */}
      </DashboardLayout.Sidebar>
      <DashboardLayout.Main>
        {children}
      </DashboardLayout.Main>
    </DashboardLayout>
  )
}

export default Layout
