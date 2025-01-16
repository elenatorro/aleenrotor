//const colors = ['#dad7cd', '#344e41', '#588157', '#a3b18a']
const colors = ['#8C7D8A', '#34345B', '#4a4e69', '#22223b']
const USE_COLORS = true

const flower1 = (size, x = 0, y = 0, r = 0) => {
  strokeWeight(1)
  stroke(0, 0, 0)

  push()
  translate(x + size / 2, y + size / 2)
  rotate(radians(45))
  ellipse(0, 0, size, size / 5)
  pop()

  push()
  translate(x + size / 2, y + size / 2)
  rotate(radians(-45))
  ellipse(0, 0, size, size / 5)
  pop()

  push()
  translate(x + size / 2, y + size / 2)
  rotate(radians(180))
  ellipse(0, 0, size, size / 5)
  pop()


  push()
  translate(x + size / 2, y + size / 2)
  rotate(radians(90))
  ellipse(0, 0, size, size / 5)
  pop()

  circle(x + size / 2, y + size / 2, size / 3)
}

const flower2 = (size, x = 0, y = 0, r = 0) => {
  if (USE_COLORS) {
    noStroke()
    fill(colors[0])
  } else {
    strokeWeight(1)
    stroke(0, 0, 0)
  }

  push()
  translate(x + size / 2, y + size / 2)
  rotate(radians(45 / 2))
  ellipse(0, 0, size / 1.2, size / 5)
  pop()


  push()
  translate(x + size / 2, y + size / 2)
  rotate(radians(45 * 1.5))
  ellipse(0, 0, size / 1.2, size / 5)
  pop()

  push()
  translate(x + size / 2, y + size / 2)
  rotate(radians(-45 / 2))
  ellipse(0, 0, size / 1.2, size / 5)
  pop()

  push()
  translate(x + size / 2, y + size / 2)
  rotate(radians(45 * -1.5))
  ellipse(0, 0, size / 1.2, size / 5)
  pop()

  fill(255)

  // level 2

  if (USE_COLORS) {
    fill(colors[1])
  }

  push()
  translate(x + size / 2, y + size / 2)
  rotate(radians(180))
  ellipse(0, 0, size, size / 5)
  pop()

  push()
  translate(x + size / 2, y + size / 2)
  rotate(radians(90))
  ellipse(0, 0, size, size / 5)
  pop()

  fill(255)

  // level 3

  if (USE_COLORS) {
    fill(colors[3])
  }

  push()
  translate(x + size / 2, y + size / 2)
  rotate(radians(45))
  ellipse(0, 0, size, size / 5)
  pop()

  push()
  translate(x + size / 2, y + size / 2)
  rotate(radians(-45))
  ellipse(0, 0, size, size / 5)
  pop()

  fill(255)

  if (USE_COLORS) {
    fill(colors[2])
  }

  circle(x + size / 2, y + size / 2, size / 4)

  fill(255)

  strokeWeight(1)
  stroke(0, 0, 0)
}

const flower3 = (size, x = 0, y = 0, r = 0) => {
  const ratio = 2
  const sizeA = size / ratio
  const sizeB = size / (ratio * 2)

  if (USE_COLORS) {
    noStroke()
    fill(colors[1])
  } else {
    strokeWeight(1)
    stroke(0, 0, 0)
  }

  push()
  translate(x + size / 2, y + size / 4)
  arc(0, 0, size / ratio, size / ratio, radians(-180), radians(0))
  pop()

  push()
  translate(x + size / 4, y + size / 2)
  arc(0, 0, size / ratio, size / ratio, radians(90), radians(-90))
  pop()

  push()
  translate((x + size) - size / 4, y + size / 2)
  arc(0, 0, size / ratio, size / ratio, radians(-90), radians(90))
  pop()

  push()
  translate(x + size / 2, (y + size) - size / 4)
  arc(0, 0, size / ratio, size / ratio, radians(0), radians(180))
  pop()

  if (USE_COLORS) {
    strokeWeight(1)
    stroke(colors[1])
    square(x + size / 4, y + size / 4, size / ratio)
  }

  if (USE_COLORS) {
    noStroke()
    fill(colors[3])
  }

  circle(x + size / 2, y + size / 2, size / 2)

  if (USE_COLORS) {
    noStroke()
    fill(colors[2])
  }

  circle(x + size / 2, y + size / 2, size / 3)

  if (USE_COLORS) {
    noStroke()
    fill(colors[1])
  }

  circle(x + size / 2, y + size / 2, size / 5)
}

function setup() {
  // const CM_TO_INCH = 2.54
  // const WIDTH_CM = 10
  // const HEIGHT_CM = 10
  // const MARGIN_CM = 0.1
  // const WIDTH_INCHES = WIDTH_CM / CM_TO_INCH
  // const HEIGHT_INCHES = HEIGHT_CM / CM_TO_INCH
  // const MARGIN_INCHES = MARGIN_CM / CM_TO_INCH
  const WIDTH_INCHES = 1920
  const HEIGHT_INCHES = 1080
  const MARGIN_INCHES = 10
  const DPI = 1

  const WIDTH = Math.round(WIDTH_INCHES * DPI)
  const HEIGHT = Math.round(HEIGHT_INCHES * DPI)
  const MARGIN = Math.round(MARGIN_INCHES * DPI)

  createCanvas(WIDTH + MARGIN, HEIGHT + MARGIN)

  if (USE_COLORS) {
    background(colors[3])
  } else {
    background(255)
  }

  const N = 25
  const M = 25
  const size = ((WIDTH - MARGIN) / N)

  // Flowers Pattern 1
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if ((i % 2 != 0 && j % 2 == 0) || (i % 2 == 0 && j % 2 != 0)) {
        flower2(size, i * size + MARGIN, j * size + MARGIN)
      } else {
        flower3(size, i * size + MARGIN, j * size + MARGIN)
      }
    }
  }

  // stroke(255)
  // strokeWeight(size / 2)
  // noFill()
  // square(size / 4, size / 4, WIDTH - (size / 2))

  stroke(0)
  strokeWeight(0)
  noFill()
  square(0, 0, WIDTH + MARGIN)

  //   for (let i = 0; i < N; i++) {
  //     for (let j = 0; j < M; j++) {
  //         flower3(size, i * size, j * size)
  //     }
  //   }
}