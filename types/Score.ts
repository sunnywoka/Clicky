import * as z from 'zod'

export const scoreSchema = z.object({
  auth0Id: z.string(),
  score: z.number(),
  gameId: z.number(),
})

export type Score = z.infer<typeof scoreSchema>
