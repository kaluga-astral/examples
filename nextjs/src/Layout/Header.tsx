// import { FC } from 'react';
import {
  CompanyOutlineMd,
  ProfileOutlineMd,
  SettingsFillMd,
  QuitOutlineMd,
} from '@astral/icons';
import { Menu, MenuItem, ListItemIcon ,
  // Divider,
   ListItemText , DashboardLayout } from '@astral/ui';

const header =  {
    product: {
      name: 'Астрал.ЭДО',
      logo: () => (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_6987_1432)">
            <path
              d="M13.0107 0.400146L19.2803 19.2283C19.3404 19.4074 19.3101 19.6036 19.2002 19.7564C19.0903 19.9098 18.913 20.0002 18.7247 20.0002H15.4786C14.2089 20.0002 13.0902 19.1928 12.6954 17.9917L9.43843 8.23222C9.3978 8.11206 9.3978 7.98159 9.43843 7.86144L11.8995 0.400732L13.0107 0.400146Z"
              fill="#55B8F0"
            />
            <path
              d="M4.52148 20H1.27535C1.08711 20 0.910272 19.9096 0.799842 19.7568C0.689959 19.604 0.659647 19.4077 0.719178 19.2286L6.96535 0.400508C7.04547 0.161367 7.26918 0 7.52152 0H12.4551C12.6433 0 12.8202 0.0903906 12.9306 0.243203C13.0405 0.395977 13.0708 0.592812 13.0107 0.771367L7.3041 17.9933C6.9093 19.1932 5.79062 20 4.52148 20Z"
              fill="#2165CC"
            />
            <path
              d="M12.4551 0H9.99658V9.90453V9.90469L13.0107 0.771367C13.0708 0.592852 13.0405 0.396016 12.9306 0.243203C12.8202 0.0903906 12.6434 0 12.4551 0V0Z"
              fill="#0D4EB0"
            />
          </g>
          <defs>
            <clipPath id="clip0_6987_1432">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
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
  }

  export const Header = () => {
    return <DashboardLayout.Header {...header} />
  }

export default Header
