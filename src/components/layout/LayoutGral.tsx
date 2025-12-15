import Header from './header/Header.js'
import Footer from './footer/Footer.js'
import type { ReactNode } from 'react'
import LoginModal from '../auth/LoginModal.js'
import { useAuthContext } from '../../context/AuthContext.js'



type AppProviderProps = {
  children: ReactNode
}

const LayoutGral = ({ children }: AppProviderProps) => {

  const { isLoginModalOpen, closeLoginModal } = useAuthContext()



  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      {isLoginModalOpen && (
        <LoginModal onClose={closeLoginModal} />
      )}
    </>
  )
}

export default LayoutGral
