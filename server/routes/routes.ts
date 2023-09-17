import express from 'express'
// import { JwtRequest } from '../auth0.ts'
import {
  getPlayersScoresByGameID,
  getPlayersScoresByAuth0ID,
  addNewScore,
  getAllScores,
} from '../db/db.ts'
import { validateAccessToken } from '../auth0.ts'

const router = express.Router()

// Route to get player scores by game ID
router.get('/scores/game/:gameId', async (req, res) => {
  const { gameId } = req.params
  try {
    const scores = await getPlayersScoresByGameID(parseInt(gameId))
    res.json(scores)
  } catch (error) {
    res.status(500).json({ error: 'Player score not found' })
  }
})

// Route to get player scores by Auth0 ID
router.get(
  '/scores/players/:auth0Id',
  validateAccessToken,
  async (req, res) => {
    const auth0Id = req.body?.sub
    try {
      const scores = await getPlayersScoresByAuth0ID(auth0Id)
      res.json(scores)
    } catch (error) {
      res.status(500).json({ error: 'Player Id not found' })
    }
  }
)

// Route to add a new score
router.post('/scores', validateAccessToken, async (req, res) => {
  const newRecord = req.body
  try {
    const result = await addNewScore(newRecord)
    res.json({ message: 'Score added successfully' })
  } catch (error) {
    res.status(500).json({ error: 'Failed to add new score' })
  }
})

// Route to get all scores
router.get('/scores', async (req, res) => {
  try {
    const scores = await getAllScores()
    res.json(scores)
  } catch (error) {
    res.status(500).json({ error: 'Failed to get all scores' })
  }
})

export default router
