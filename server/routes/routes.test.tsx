import { vi, describe, it, expect } from 'vitest'
import request from 'supertest'
import server from '../server'
import { getMockToken } from './mockToken.ts'

vi.mock('../db/db.ts')
