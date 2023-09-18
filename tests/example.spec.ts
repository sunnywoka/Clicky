import { test, expect } from '@playwright/test'

test('home has title', async ({ page }) => {
  await page.goto('http://localhost:5173/')

  await expect(page.getByRole('link', { name: 'Blicky' })).toBeVisible()
  console.log(await page.getByRole('link', { name: 'Blicky' }).textContent())
})

test('game modes are visible', async ({ page }) => {
  await page.goto('http://localhost:5173/')

  await page.getByRole('link', { name: 'Choose Game Mode' }).click()
  await expect(
    page.getByRole('heading', { level: 2, name: 'Game Modes' })
  ).toBeVisible()
  console.log('test is running')
  await expect(page.getByRole('link', { name: 'Clicky' })).toBeVisible()
  await expect(page.getByRole('link', { name: 'Bounce' })).toBeVisible()
})
