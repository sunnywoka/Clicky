export function getRandomWidth() {
  return Math.floor(Math.random() * 275) + 5
}

export function getRandomHeight(heightValue: number) {
  const height = Math.floor(Math.random() * heightValue)
  return height <= heightValue && height >= heightValue - 50
    ? height - 20
    : height + 5
}

export function getCurrentDimension() {
  const height = window.innerHeight
  const width = window.innerWidth
  let newHeight: number = height
  switch (true) {
    //Mobile S & M
    case height <= 850 && width <= 400:
      newHeight /= 2
      break
    //Mobile L
    case height <= 850 && width <= 450:
      newHeight /= 3
      break
    //Tablet
    case height <= 850 && width <= 850:
      newHeight /= 4
      break
    //1080p
    case height <= 1100:
      newHeight /= 8
      break
    //1440p
    case height <= 1500:
      newHeight /= 12
      break
    //4k
    case height <= 2200:
      newHeight /= 18
      break
  }
  return {
    width: window.innerWidth,
    height: Math.floor(newHeight),
  }
}

export function isTooClose(
  coords1: number[],
  coords2: number[],
  minDistance: number
) {
  const distance = Math.sqrt(
    (coords1[0] - coords2[0]) ** 2 + (coords1[1] - coords2[1]) ** 2
  )
  return distance < minDistance
}

export function getRandomXY(heightValue: number) {
  return [getRandomWidth(), getRandomHeight(heightValue)]
}

export function getNewXY(
  coords1: number[],
  coords2: number[],
  screenSize: {
    width: number
    height: number
  }
) {
  let coords
  do {
    coords = getRandomXY(screenSize.height)
  } while (isTooClose(coords, coords1, 40) || isTooClose(coords, coords2, 40))
  return coords
}

export function getRandom(screenSize: { width: number; height: number }) {
  const squareXY = getRandomXY(screenSize.height)
  let circleXY, triangleXY

  do {
    circleXY = getRandomXY(screenSize.height)
  } while (isTooClose(squareXY, circleXY, 30))

  do {
    triangleXY = getRandomXY(screenSize.height)
  } while (
    isTooClose(squareXY, triangleXY, 30) ||
    isTooClose(circleXY, triangleXY, 30)
  )
  return [squareXY, circleXY, triangleXY]
}
