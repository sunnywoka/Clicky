import React from 'react'
import { IfAuthenticated, IfNotAuthenticated } from '../apis/Authenticated.tsx'
import { useAuth0 } from '@auth0/auth0-react'

function LoginButton() {
  const { loginWithRedirect, logout, getAccessTokenSilently } = useAuth0()
  console.log(getAccessTokenSilently())
  return (
    <div className="flex justify-center items-center">
      <IfNotAuthenticated>
        <button
          onClick={() => loginWithRedirect()}
          className="border-4 rounded text-4xl font-bold text-primary border-primary px-36 py-24 hover:bg-pink2 hover:text-pink3 hover:animate-pulse"
        >
          Log In
        </button>
      </IfNotAuthenticated>
      <IfAuthenticated>
        <button
          onClick={() => logout()}
          className="border-4 rounded text-4xl font-bold text-primary border-primary px-36 py-24 hover:bg-pink2 hover:text-pink3 hover:animate-pulse"
        >
          Log Out
        </button>
      </IfAuthenticated>
    </div>
  )
}

export default LoginButton
