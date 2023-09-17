import { IfAuthenticated, IfNotAuthenticated } from './Authenticated.tsx'
import { useAuth0 } from '@auth0/auth0-react'

function LoginButton() {
  const { loginWithRedirect, logout } = useAuth0()

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
