import express from 'express'
import {
  getPlayersScoresByGameID,
  getPlayersScoresByAuth0ID,
  addNewScore,
  getAllScores,
} from '../db/db.ts'
import { validateAccessToken } from '../auth0.ts'
import { scoreSchema } from '../../types/Score.ts'

const router = express.Router()

// Route to get player scores by Auth0 ID
router.get('/players', validateAccessToken, async (req, res) => {
  const auth0Id = req.auth?.payload.sub
  console.log('hit')

  if (!auth0Id) {
    res.status(401).json({ message: 'Please provide an id' })
    return
  }
  try {
    const scores = await getPlayersScoresByAuth0ID(auth0Id)
    res.json(scores)
  } catch (error) {
    res.status(500).json({ error: 'Unable to retrieve player' })
  }
})

// Route to add a new score
router.post('/newscore', validateAccessToken, async (req, res) => {
  const auth0Id = req.auth?.payload.sub
  if (!auth0Id) {
    res.status(401).json({ message: 'Please provide an id' })
  }

  const record = req.body
  const newRecord = {
    auth0Id: auth0Id,
    score: record.score,
    gameId: record.gameId,
  }
  const realNewScore = scoreSchema.parse(newRecord)
  try {
    await addNewScore(realNewScore)
    res.json({ message: 'Score added successfully' })
  } catch (error) {
    res.status(500).json({ error: 'Failed to add new score' })
  }
})

// Route to get player scores by game ID
router.get('/:gameId', async (req, res) => {
  const { gameId } = req.params
  try {
    const scores = await getPlayersScoresByGameID(parseInt(gameId))
    res.json(scores)
  } catch (error) {
    res.status(500).json({ error: 'Player score not found' })
  }
})

// Route to get all scores
router.get('/', async (req, res) => {
  try {
    const scores = await getAllScores()
    res.json(scores)
  } catch (error) {
    res.status(500).json({ error: 'Failed to get all scores' })
  }
})

export default router
