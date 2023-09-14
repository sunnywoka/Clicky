// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { screen } from '@testing-library/react'

import Circle from './Circle'
import Square from './Square'
import Triangle from './Triangle'
import { renderComponent } from '../../test-utils'
describe('Shapes', () => {
  it('event handler should be called when circle is clicked on', async () => {
    const handleClick = vi.fn((e: React.MouseEvent<SVGCircleElement>) => {})

    const { user } = renderComponent(
      <Circle handleCircleClick={handleClick} x={10} y={10} radius={5} />
    )

    await user.click(screen.getByRole('img'))

    expect(handleClick).toHaveBeenCalled()
  })
  it('event handler should be called when square is clicked on', async () => {
    const handleClick = vi.fn((e: React.MouseEvent<SVGRectElement>) => {})

    const { user } = renderComponent(
      <Square handleClick={handleClick} x={10} y={10} size={5} />
    )

    await user.click(screen.getByRole('img'))

    expect(handleClick).toHaveBeenCalled()
  })
  it('event handler should be called when triangle is clicked on', async () => {
    const handleClick = vi.fn((e: React.MouseEvent<SVGPolygonElement>) => {})

    const { user } = renderComponent(
      <Triangle
        handleTriangleClick={handleClick}
        x={10}
        y={10}
        sideLength={5}
      />
    )

    await user.click(screen.getByRole('img'))

    expect(handleClick).toHaveBeenCalled()
  })
})
