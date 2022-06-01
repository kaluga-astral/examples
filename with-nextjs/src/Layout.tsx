import * as React from 'react'
import { Button, Typography } from '@astral/ui'

import { Container } from './Container'

export type LayoutProps = {}

export const Layout: React.FC<LayoutProps> = (props) => {
  const { children } = props;

  return (
    <Container>
      <header>
        <Typography>Title</Typography>
      </header>
      <header>
        <Button>1312312</Button>
      </header>
      <main>{children}</main>
    </Container>
  )
}

export default Layout
