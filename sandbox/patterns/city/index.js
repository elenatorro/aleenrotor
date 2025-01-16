const sky = (size, x = 0, y = 0) => {
  // background
  strokeWeight(1)
  stroke(0)
  fill(255)
  square(x, y, size)
}
const buildingTop = (size, x = 0, y = 0, buildingType = 1) => {
  const ratio = round(size / 3)

  // front
  noStroke()
  fill(255)
  const fx1 = x
  const fy1 = y + ratio
  const fx2 = x
  const fy2 = y + size
  const fx3 = x + ratio * 2
  const fy3 = y + size
  const fx4 = x + ratio * 2
  const fy4 = y + size - ratio

  quad(
    fx1, fy1,
    fx2, fy2,
    fx3, fy3,
    fx4, fy4
  )

  stroke(0)
  strokeWeight(1)
  line(fx1, fy1, fx2, fy2)
  line(fx3, fy3, fx4, fy4)

  const totalLines = 3 * buildingType
  const lineSize = size / totalLines

  for (let i = 0; i <= totalLines; i++) {
    stroke('gray')
    line(fx1 + i * lineSize, fy1, fx2 + i * lineSize, fy2)
    line(fx2, fy2 + i * lineSize - ratio, fx3, fy3 + i * lineSize)
  }

  // top
  push()
  stroke(0)
  fill(255)
  quad(
    x,
    y + ratio,
    x + ratio,
    y,
    x + size,
    y + ratio,
    x + ratio * 2,
    y + size - ratio
  )

  // back
  fill(255)
  noStroke()
  const bx1 = x + ratio * 2
  const by1 = y + size
  const bx2 = x + ratio * 2
  const by2 = y + size - ratio
  const bx3 = x + size
  const by3 = y + ratio
  const bx4 = x + size
  const by4 = y + size

  quad(
    bx1, by1,
    bx2, by2,
    bx3, by3,
    bx4, by4
  )

  stroke(0)
  strokeWeight(1)
  line(bx1, by1, bx2, by2)
  line(bx3, by3, bx4, by4)

  pop()
}

const buildingWindow = (size, x = 0, y = 0, numWindows = 3) => {
  const s = round((size / 3) * 2)
  const w = numWindows * 2 + 1
  const wSize = s / w
  const wRatio = round((wSize * (size / 3)) / size)
  noStroke()
  fill(0)

  for (let i = 0; i <= numWindows + 1; i += 2) {
    const r = wSize * i

    const fx1 = x + wSize + r
    const fy1 = y + (r / 2)
    const fx2 = x + wSize * 2 + r
    const fy2 = y + wRatio * 2 + (r / 2)
    const fx3 = x + wSize * 2 + r
    const fy3 = y + wSize + wRatio * 2 + (r / 2)
    const fx4 = x + wSize + r
    const fy4 = y + wSize + (r / 2)

    quad(
      fx1, fy1,
      fx2, fy2,
      fx3, fy3,
      fx4, fy4
    )
  }
}

const buildingMiddle = (size, x = 0, y = 0, buildingType = 1) => {
  const ratio = round(size / 3)

  // front
  noStroke()
  fill(255)
  const fx1 = x
  const fy1 = y
  const fx2 = x
  const fy2 = y + size
  const fx3 = x + ratio * 2
  const fy3 = y + size
  const fx4 = x + ratio * 2
  const fy4 = y

  quad(
    fx1, fy1,
    fx2, fy2,
    fx3, fy3,
    fx4, fy4
  )

  stroke(0)
  strokeWeight(1)
  line(fx1, fy1, fx2, fy2)
  line(fx3, fy3, fx4, fy4)

  const totalLines = 3 * buildingType
  const lineSize = size / totalLines

  for (let i = 1; i < totalLines; i++) {
    stroke('gray')
    strokeWeight(1)
    line(fx1 + i * lineSize, fy1, fx2 + i * lineSize, fy2)
    line(fx2, fy2 + i * lineSize - ratio, fx3, fy3 + i * lineSize)
  }

  // back
  noStroke()
  const bx1 = x + ratio * 2
  const by1 = y + size
  const bx2 = x + ratio * 2
  const by2 = y
  const bx3 = x + size
  const by3 = y
  const bx4 = x + size
  const by4 = y + size

  fill(255)
  quad(
    bx1, by1,
    bx2, by2,
    bx3, by3,
    bx4, by4
  )

  stroke(0)
  strokeWeight(1)
  line(bx1, by1, bx2, by2)
  line(bx3, by3, bx4, by4)

  //buildingWindow(size, x, y)
}

const CM_TO_INCH = 2.54
const WIDTH_CM = 15
const HEIGHT_CM = 15
const WIDTH_INCHES = WIDTH_CM / CM_TO_INCH
const HEIGHT_INCHES = HEIGHT_CM / CM_TO_INCH
const DPI = 300

const WIDTH = Math.round(WIDTH_INCHES * DPI)
const HEIGHT = Math.round(HEIGHT_INCHES * DPI)

function drawBuildings() {
  const buildings = 9
  const rows = 4
  const size = round(WIDTH / buildings)

  clear()
  fill(255)
  square(0, 0, WIDTH)

  for (let x = rows; x > 0; x--) {
    for (let i = 0; i < buildings; i++) {
      const buildingHeight = round(random(x, x + (buildings - rows - 1)))
      const buildingType = round(random(1, 3))
      const s = size * buildingType
      for (let j = 1; j < buildingHeight; j++) {
        buildingMiddle(s, size * i, HEIGHT - size * j, buildingType)
      }
      buildingTop(s, size * i, HEIGHT - (size * buildingHeight), buildingType)
    }
  }

  strokeWeight(1)
  noFill()
  square(0, 0, WIDTH)
}

function setup() {
  createCanvas(WIDTH, HEIGHT)
  fill(255)
  square(0, 0, WIDTH)

  drawBuildings()
}

// let timer = 0

// function draw() {
//   const buildings = 9
//   const rows = 4
//   const size = round(WIDTH / buildings)

//   if (millis() < 1000+timer) {
//     return
//   }

//   drawBuildings()

//   timer = millis()
// }