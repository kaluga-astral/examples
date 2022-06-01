import * as React from 'react'
import { Typography } from '@astral/ui'

import { Container } from './Container'

export type LayoutProps = {}

export const Layout: React.FC<LayoutProps> = (props) => {
  const { children } = props;

  return (
    <Container>
      <header>
        <Typography>header</Typography>
      </header>
      <aside>sidebar</aside>
      <main>{children}</main>
    </Container>
  )
}

export default Layout
