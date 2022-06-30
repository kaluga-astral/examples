import {
  CompanyOutlineMd,
  DashboardLayout,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  ProfileOutlineMd,
  QuitOutlineMd,
  SettingsFillMd,
} from '@example/ui';
import logoSrc from '@example/static/images/disconnect.png';
import { ComponentProps } from 'react';

import { HeaderLogo } from './styles';

const header: ComponentProps<typeof DashboardLayout.Header> = {
  product: {
    name: 'Астрал.Пример',
    logo: () => (
      <HeaderLogo
        src={logoSrc}
        alt="Логотип Астрал.Пример"
        width={20}
        height={20}
      />
    ),
  },
  profile: {
    displayName: 'Григорьев Виталий',
    annotation: 'vitatiy_grig@mail.ru',
    avatar: {
      alt: 'Григорьев Виталий',
      children: 'ГВ',
    },
    menu: (props) => (
      <Menu {...props}>
        <MenuItem>
          <ListItemIcon>
            <ProfileOutlineMd />
          </ListItemIcon>
          <ListItemText>Мой профиль</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <CompanyOutlineMd />
          </ListItemIcon>
          <ListItemText>Мои организации</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <SettingsFillMd />
          </ListItemIcon>
          <ListItemText>Настройки</ListItemText>
        </MenuItem>
        {/* <Divider /> */}
        <MenuItem>
          <ListItemIcon>
            <QuitOutlineMd />
          </ListItemIcon>
          <ListItemText>Выйти</ListItemText>
        </MenuItem>
      </Menu>
    ),
  },
};

export const Header = () => {
  return <DashboardLayout.Header {...header} />;
};
