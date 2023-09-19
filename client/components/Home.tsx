import { Link, useNavigate } from 'react-router-dom'
import Header from './Header'
import LoginButton from './LoginButton'
import ScoreButton from './ScoreButton'
import { motion } from 'framer-motion'
import { useAuth0 } from '@auth0/auth0-react'
import { useQuery } from '@tanstack/react-query'
import { getPlayer } from '../apis/api'
import useGetNickname from './hooks/useGetNickname'

function Home() {
  const { getAccessTokenSilently } = useAuth0()
  const navigate = useNavigate()

  //Check user with useQuery see if they exist in our database
  //Redirect them to the right place
  useQuery({
    queryKey: ['players'],
    queryFn: async () => {
      const accessToken = await getAccessTokenSilently()
      const response = await getPlayer(accessToken)
      if (!response?.nickname) navigate('/addnickname')
      if (response?.nickname) navigate('/')
      return []
    },
  })

  const playerName = useGetNickname()

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Header />
        {playerName.data ? (
          <p className="flex justify-center text-4xl font-bold text-primary">
            Welcome back {playerName.data}!
          </p>
        ) : (
          <p className="flex justify-center text-4xl font-bold text-primary">
            Log in to save your scores!
          </p>
        )}
        <div className="flex justify-center items-center m-24">
          <Link
            to="/category"
            className="border-4 rounded text-4xl font-bold text-primary border-primary px-36 py-24 hover:bg-pink2 hover:text-pink3 hover:animate-pulse"
          >
            Choose Game Mode
          </Link>
        </div>
        <div className="flex justify-center items-center gap-10 -mb-12">
          <LoginButton />
          <ScoreButton />
        </div>
        <div className="spacer layer1 flip"></div>
      </motion.div>
    </>
  )
}

export default Home
