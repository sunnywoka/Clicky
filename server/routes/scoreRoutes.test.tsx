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
    })
    it('should return player scores by nickname', async () => {
        const nickname = 'test-nickname'
    
        // Mock the getPlayersScoresBynickname function
        vi.mocked(db.getPlayersScoresBynickname).mockResolvedValue([
          { score: 1000, gameId: 1 },
          { score: 1200, gameId: 2 },
        ])
    
        const response = await request(server)
          .get(`/api/v1/scores/${nickname}`) // Use the correct route for getting scores by nickname
          .set('authorization', `Bearer ${getMockToken()}`)
    
        expect(response.status).toBe(200)

    })
})