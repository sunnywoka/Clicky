import express from 'express'
import { addNewPlayer } from '../db/db.ts'
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
    res.status(201)
    res.json({ message: 'Player added successfully' })
  } catch (error) {
    res.status(500).json({ error: 'Failed to add new player' })
  }
})

export default router
