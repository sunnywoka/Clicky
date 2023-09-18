import * as Path from 'node:path'

import express from 'express'

import scoreRoutes from './routes/scoresRoutes'
import playerRoutes from './routes/playerRoutes'

const server = express()

server.use(express.json())

server.use('/api/v1/scores', scoreRoutes)
server.use('api/v1/players', playerRoutes)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}
export default server
