import * as z from 'zod'

export const playerSchema = z.object({
  auth0Id: z.string(),
  nickname: z.string(),
})

export type Player = z.infer<typeof playerSchema>
