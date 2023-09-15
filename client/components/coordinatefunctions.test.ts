import {
  getRandomWidth,
  getCurrentDimension,
  getRandomHeight,
  isTooClose,
  getNewXY,
} from './coordinatefunctions'
import { test, expect } from 'vitest'

test('getRandomWidth funtion should return a ramdom width between 5 and 280', () => {
  // ARRANGE
  const widthRange = [5, 280]
  // ACT
  const actual = getRandomWidth()
  // ASSERT
  expect(actual).toBeGreaterThanOrEqual(widthRange[0])
  expect(actual).toBeLessThanOrEqual(widthRange[1])
})

test('getCurrentDimension function should return the correct dimensions for small screens', () => {
  // Set window dimensions to simulate a small screen
  global.window = {
    innerHeight: 500,
    innerWidth: 400,
  } as Window & typeof globalThis

  const result = getCurrentDimension()

  expect(result).toEqual({
    width: 400, // window.innerWidth should be returned as is
    height: Math.floor(500 / 2), // Expected height for this case
  })
})

test('getCurrentDimension function should return the correct dimensions for medium screens', () => {
  // Set window dimensions to simulate a medium screen
  global.window = {
    innerHeight: 600,
    innerWidth: 500,
  } as Window & typeof globalThis

  const result = getCurrentDimension()

  expect(result).toEqual({
    width: 500, // window.innerWidth should be returned as is
    height: Math.floor(600 / 3), // Expected height for this case
  })
})

test('getCurrentDimension function should return the correct dimensions for medium to large screens', () => {
  // Set window dimensions to simulate a medium screen
  global.window = {
    innerHeight: 800,
    innerWidth: 600,
  } as Window & typeof globalThis

  const result = getCurrentDimension()

  expect(result).toEqual({
    width: 600, // window.innerWidth should be returned as is
    height: Math.floor(800 / 8), // Expected height for this case
  })
})

test('getCurrentDimension function should return the correct dimensions for large screens', () => {
  // Set window dimensions to simulate a large screen
  global.window = {
    innerHeight: 1200,
    innerWidth: 1000,
  } as Window & typeof globalThis

  const result = getCurrentDimension()

  expect(result).toEqual({
    width: 1000, // window.innerWidth should be returned as is
    height: Math.floor(1200 / 9), // Expected height for this case
  })
})

test('getRandomHeight function should returns a number greater than or equal to 0', () => {
  const heightValue = 100 // Replace with an appropriate value
  const randomHeight = getRandomHeight(heightValue)
  expect(randomHeight).toBeGreaterThanOrEqual(0)
})

test('getRandomHeight function should returns a number less than or equal to heightValue', () => {
  const heightValue = 100 // Replace with an appropriate value
  const randomHeight = getRandomHeight(heightValue)
  expect(randomHeight).toBeLessThanOrEqual(heightValue)
})

test('isTooClose function should return true if distance is less than minDistance', () => {
  const coords1 = [0, 0]
  const coords2 = [3, 4]
  const minDistance = 6
  const result = isTooClose(coords1, coords2, minDistance)
  expect(result).toBe(true)
})

test('isTooClose function should return false if distance is equal to minDistance', () => {
  const coords1 = [0, 0]
  const coords2 = [3, 4]
  const minDistance = 5
  const result = isTooClose(coords1, coords2, minDistance)
  expect(result).toBe(false)
})

test('isTooClose function should return false if distance is greater than minDistance', () => {
  const coords1 = [0, 0]
  const coords2 = [3, 4]
  const minDistance = 4
  const result = isTooClose(coords1, coords2, minDistance)
  expect(result).toBe(false)
})
