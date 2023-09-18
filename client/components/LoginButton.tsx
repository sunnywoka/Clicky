import React from 'react'
import { IfAuthenticated, IfNotAuthenticated } from '../apis/Authenticated.tsx'
import { useAuth0 } from '@auth0/auth0-react'

function LoginButton() {
  const { loginWithRedirect, logout, getAccessTokenSilently } = useAuth0()
  console.log(getAccessTokenSilently())
  return (
    <>
      <IfNotAuthenticated>
        <button onClick={() => loginWithRedirect()} className="home-btn">
          Log In
        </button>
      </IfNotAuthenticated>
      <IfAuthenticated>
        <button onClick={() => logout()} className="home-btn">
          Log Out
        </button>
      </IfAuthenticated>
    </>
  )
}

export default LoginButton
