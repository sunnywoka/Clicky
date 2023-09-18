import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './components/App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    /**
     * Auth0Provider is a component that has a hook that provides
     * all authentication operations
     *
     * TODO: replace the empty strings below with your own domain, clientId, and audience
     */
    <Auth0Provider
      domain="matai-humaid.us.auth0.com"
      clientId="qWeAhx79FWhPsQGIsFhIbRNg3oxTS9lg"
      redirectUri={window.location.origin}
      audience="https://clicky/api"
    >
      <QueryClientProvider client={queryClient}>
        <Router>
          <App />
        </Router>
      </QueryClientProvider>
    </Auth0Provider>
  )
})
