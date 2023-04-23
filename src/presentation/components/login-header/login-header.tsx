import React, { memo } from 'react'
import Logo from '../logo/logo'
import Styles from './login-header-styles.scss'
const LoginHeader: React.FC = () => {
  return (
    <header className={Styles.header}>
      <Logo/>
      <h1>4Dev- Enquetes para P rogramadores</h1>
    </header>
  )
}

export default memo(LoginHeader)
