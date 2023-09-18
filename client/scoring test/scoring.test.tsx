// // @vitest-environment jsdom
// import { cleanup, screen, waitFor } from '@testing-library/react'
// import { MemoryRouter, Routes, Route } from 'react-router-dom'
// import { afterEach, expect, describe, it, vi, beforeEach } from 'vitest'
// import Game from '../components/Game'
// import { renderComponent } from '../test-utils'
// import ExplodeMock from './ExplodeMock'

// afterEach(cleanup)

// describe('Game Scoring', () => {
//   beforeEach(() => {
//     // vi.mock('../components/Explode.jsx', ExplodeMock)
//   })

//   // vi.mock('../components/Explode.jsx', () => {
//   //   return {
//   //     success: vi.fn(),
//   //     failure: vi.fn(),
//   //   }
//   // })

//   it('should display the correct score for no clicks', async () => {
//     const { user } = renderComponent(
//       <MemoryRouter initialEntries={['/clicky']}>
//         <Routes>
//           <Route path="/clicky" element={<Game />} />
//         </Routes>
//       </MemoryRouter>
//     )
//     const expectedScore = 'Score: 0'
//     await user.click(screen.getByRole('button', { name: /Start/i }))
//     user.click(screen.getByTestId('square-rect'))
//     const score = screen.getByRole('heading', {
//       level: 2,
//       name: /Score:/i,
//     })
//     expect(score.textContent).toBe(expectedScore)
//   })
//   it('should display the correct score for an immediateclick', async () => {
//     const { user } = renderComponent(
//       <MemoryRouter initialEntries={['/clicky']}>
//         <Routes>
//           <Route path="/clicky" element={<Game />} />
//         </Routes>
//       </MemoryRouter>
//     )
//     const expectedScore = 'Score: 100'
//     await user.click(screen.getByRole('button', { name: /Start/i }))
//     user.click(screen.getByTestId('square-rect'))
//     await waitFor(() => {
//       const updatedScore = screen.getByRole('heading', {
//         level: 2,
//         name: /Score:/i,
//       })
//       expect(updatedScore.textContent).toBe(expectedScore)
//     })
//   })
// })
