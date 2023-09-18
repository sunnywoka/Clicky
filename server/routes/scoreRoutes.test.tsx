import { vi, describe, it, expect } from 'vitest'
import request from 'supertest'
import server from '../server'
import { getMockToken } from './mockToken.ts'
import { newRecord, Record } from '../../models/Record.ts'
import * as db from '../db/db.ts'

vi.mock('../db/db.ts')

describe('Score Routes', () => {
 // Mock the addNewScore function
    it('should return 201 when adding a new score', async () => {
      const fakeScore: newRecord = {
        score: 1000,
        gameId: 1,
        auth0Id: 'auth0|123',
      }
  
      vi.mocked(db.addNewScore).mockResolvedValue([])
  
      const response = await request(server)
        .post('/api/v1/scores/newscore')
        .set('authorization', `Bearer ${getMockToken()}`)
        .send(fakeScore)
        expect(response.status).toBe(201)
        expect(response.body.message).toBe('Score added successfully')
    })

    // Mock the getPlayersScoresBynickname function
    it('should return player scores by nickname', async () => {
        const nickname = 'test-nickname'
        const fakeScore = [
        { score: 1000, gameId: 1 },
        { score: 900, gameId: 2 },
      ]
        vi.mocked(db.getPlayersScoresBynickname).mockResolvedValue(fakeScore)
        const response = await request(server)
          .get(`/api/v1/scores/nickname/${nickname}`) 
          .set('authorization', `Bearer ${getMockToken()}`)
    
        expect(response.status).toBe(200)
        expect(response.body).toEqual(fakeScore)
    })


    // Mock the getPlayersScoresByGameID function
    it('should return player scores by game ID', async () => {
        const gameId = 1
        const fakeScores = [
            { nickname: 'player1', score: 1000 },
            { nickname: 'player2', score: 1200 },
          ]
          vi.mocked(db.getPlayersScoresByGameID).mockResolvedValue(fakeScores)
        
          const response = await request(server)
            .get(`/api/v1/scores/${gameId}`)
            .set('authorization', `Bearer ${getMockToken()}`)
          
            // console.log('fakescores', fakeScores);
            // console.log('res', response.body);
            
            
          expect(response.status).toBe(200)
          expect(response.body).toEqual(fakeScores)
      })


      // Mock the getAllScores function
  it('should return all scores', async () => {
    const fakedScores = [
        { auth0Id: 'auth0|123', score: 1000, gameId: 1, nickname: 'player1' },
        { auth0Id: 'auth0|456', score: 1200, gameId: 2, nickname: 'player2' },
      ]
      vi.mocked(db.getAllScores).mockResolvedValue(fakedScores)
    
      const response = await request(server)
        .get('/api/v1/scores')
        .set('authorization', `Bearer ${getMockToken()}`)
    
      expect(response.status).toBe(200)
      expect(response.body).toEqual(fakedScores)
  })
})