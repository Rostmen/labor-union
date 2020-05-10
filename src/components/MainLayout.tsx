import React, { ReactElement } from 'react'
import NavMenu from 'src/components/NavMenu'

type Props = {
  children: ReactElement
}
const MainLayout = (props: Props) => {
  const { children } = props
  return (
    <div>
      <header>
        <NavMenu />
      </header>
      <main>{children}</main>
    </div>
  )
}

export default MainLayout
