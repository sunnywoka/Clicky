import express from 'express'
import { addNewPlayer, getPlayer } from '../db/db.ts'
import { validateAccessToken } from '../auth0.ts'
import { playerSchema } from '../../types/Player.ts'

const router = express.Router()

router.post('/newplayer', validateAccessToken, async (req, res) => {
  const auth0Id = req.auth?.payload.sub
  if (!auth0Id) {
    res.status(401).json({ message: 'Please provide an id' })
  }

  const player = req.body
  const newPlayer = {
    auth0Id: auth0Id,
    nickname: player.nickname,
  }

  const realNewPlayer = playerSchema.parse(newPlayer)
  try {
    await addNewPlayer(realNewPlayer)
    res.json({ message: 'Player added successfully' })
  } catch (error) {
    res.status(500).json({ error: 'Failed to add new player' })
  }
})

router.get('/', validateAccessToken, async (req, res) => {
  const id = req.auth?.payload.sub
  if (!id) {
    res.status(401).json({ message: 'Please provide an id' })
    return
  }

  try {
    const user = await getPlayer(id)
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({ message: 'Unable to retrieve friends' })
  }
})

export default router
