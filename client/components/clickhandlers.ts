import * as coord from './coordinatefunctions'

export function handleSquareClick(
  e: React.MouseEvent<SVGRectElement>,
  circleXY,
  triangleXY,
  screenSize,
  setSquareXY,
  count,
  setCount,
  shapeScore,
  setShapeScore,
  explode
) {
  setSquareXY(coord.getNewXY(circleXY, triangleXY, screenSize))
  setCount(count + shapeScore)
  setShapeScore(100)
  explode(e)
}
