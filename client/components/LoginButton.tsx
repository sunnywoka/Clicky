import React from 'react'
import { IfAuthenticated, IfNotAuthenticated } from '../apis/Authenticated.tsx'
import { useAuth0 } from '@auth0/auth0-react'

function LoginButton() {
  const { loginWithRedirect, logout } = useAuth0()

  function handleLogin() {
    loginWithRedirect({
      appState: { targetUrl: '/' },
      authorizationParams: {
        redirect_uri: `${window.location.origin}`,
      },
    })
  }

  return (
    <>
      <IfNotAuthenticated>
        <button onClick={handleLogin} className="home-btn">
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
