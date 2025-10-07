import React from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'


const LayoutGral = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default LayoutGral
