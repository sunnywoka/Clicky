import { vi, describe, it, expect } from 'vitest'
import request from 'supertest'
import server from '../server'
import { getMockToken } from './mockToken.ts'
import { newPlayer } from '../../models/Player.ts'
import * as db from '../db/db.ts'

vi.mock('../db/db.ts')

describe('GET /api/v1/players/newplayer', () => {
    it('should return 201 when creating a new profile', async () => {
        const fakeProfile: newPlayer = {
          auth0Id: 'auth0|123',
          nickname: 'test-nickname',
        }
    
        vi.mocked(db.addNewPlayer).mockResolvedValue([])
        const response = await request(server)
          .post('/api/v1/players/newplayer')
          .set('authorization', `Bearer ${getMockToken()}`)
          .send(fakeProfile)
        expect(response.status).toBe(201)
      })

})