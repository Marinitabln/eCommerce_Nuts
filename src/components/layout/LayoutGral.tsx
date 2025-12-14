import Header from './header/Header.js'
import Footer from './footer/Footer.js'
import type { ReactNode } from 'react'


type AppProviderProps = {
  children: ReactNode
}

const LayoutGral = ({ children}: AppProviderProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default LayoutGral
