import * as React from 'react'

import { Container } from './Container'

export type LayoutProps = {}

export const Layout: React.FC<LayoutProps> = (props) => {
  const { children } = props;

  return (
    <React.Fragment>
      <header>header</header>
      <header>aside</header>
      <main>{children}</main>
    </React.Fragment>
  )
}

export default Layout
