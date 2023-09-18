import { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'
import nicknameHook from './hooks/useNickname'

function AddNickname() {
  const navigate = useNavigate()
  const [input, setInput] = useState('')
  const { getAccessTokenSilently } = useAuth0()
  const useNickname = nicknameHook()

  async function handleClick(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault()
    const token = await getAccessTokenSilently()
    useNickname.nicknameMutation.mutate({ nickname: input, token })
    navigate('/Home')
  }

  return (
    <>
      <div>
        <label htmlFor="nickname">Nickname: </label>
        <input
          placeholder="eg.Oops"
          autoFocus={true}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></input>
      </div>
      <button onClick={handleClick}>Add Nickname</button>
    </>
  )
}

export default AddNickname
