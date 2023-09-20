// @vitest-environment jsdom
import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Routes, Route, MemoryRouter } from 'react-router-dom'
import { afterEach, describe, it } from 'vitest'
import Home from './Home'
import Category from './Category'
import Game from './Game'
import BounceGame from './BounceGame'

afterEach(cleanup)

describe('Routes', () => {
  it('when user clicks "Choose Game Mode" button move to category page', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
        </Routes>
      </MemoryRouter>
    )
    userEvent.click(screen.getByRole('link', { name: /Choose Game Mode/i }))
    await screen.findByText('Game Modes')
  })

  it('when user clicks "Clicky" button move to clicky game page', async () => {
    render(
      <MemoryRouter initialEntries={['/category']}>
        <Routes>
          <Route path="/category" element={<Category />} />
          <Route path="/clicky" element={<Game />} />
        </Routes>
      </MemoryRouter>
    )
    userEvent.click(screen.getByRole('link', { name: /Clicky/i }))
    await screen.findByText('Clicky!')
  })

  it('when user clicks "Bouncy" button move to bounce game page', async () => {
    render(
      <MemoryRouter initialEntries={['/category']}>
        <Routes>
          <Route path="/category" element={<Category />} />
          <Route path="/bounce" element={<BounceGame />} />
        </Routes>
      </MemoryRouter>
    )
    userEvent.click(screen.getByRole('link', { name: /Bouncy/i }))
    await screen.findByText('Bouncy!')
  })

  it('when user clicks "Blicky" heading move to home page', async () => {
    render(
      <MemoryRouter initialEntries={['/category']}>
        <Routes>
          <Route path="/category" element={<Category />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </MemoryRouter>
    )
    userEvent.click(screen.getByRole('link', { name: /Blicky/i }))
    await screen.findByText('Game Modes')
  })

  it('when user clicks "Go Back" button move to category page', async () => {
    render(
      <MemoryRouter initialEntries={['/clicky']}>
        <Routes>
          <Route path="/clicky" element={<Game />} />
          <Route path="/category" element={<Category />} />
        </Routes>
      </MemoryRouter>
    )
    screen.findByRole('button', { name: /Start/i })
    userEvent.click(screen.getByRole('button', { name: /Start/i }))
    await screen.findByRole('link', { name: /Go Back/i })
    userEvent.click(screen.getByRole('link', { name: /Go Back/i }))
    await screen.findByText('Game Modes')
  })
})
