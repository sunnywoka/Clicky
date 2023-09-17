
import React from 'react'
import { IfAuthenticated, IfNotAuthenticated } from '../apis/Authenticated.tsx'
import { useAuth0 } from '@auth0/auth0-react'

function LoginButton() {
  const { loginWithRedirect, logout, getAccessTokenSilently } = useAuth0()
  console.log(getAccessTokenSilently())
  return (
    <div className="flex justify-center items-center">
      <IfNotAuthenticated>
        <button onClick={() => loginWithRedirect()} className="log-btn">
          Log In
        </button>
      </IfNotAuthenticated>
      <IfAuthenticated>
        <button onClick={() => logout()} className="log-btn">
          Log Out
        </button>
      </IfAuthenticated>
    </div>
  )
}

export default LoginButton
