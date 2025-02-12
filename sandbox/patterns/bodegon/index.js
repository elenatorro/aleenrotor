const colors = ['#001219', '#005f73', '#0a9396', '#94d2bd', '#e9d8a6', '#ee9b00', '#ca6702', '#bb3e03', '#ae2012', '#9b2226']
//const colors = ['#231942', '#5e548e', '#9f86c0', '#be95c4', '#e0b1cb']
//const colors = ['#1a6646', '#99cca2', '#7badcc', '#344373', '#6f4b73', '#cc8070', '#c45631', '#9e1c18']
//const colors = ['#141414', '#f8f4f9', '#98ce00', '#9d8af9', '#6e48c3']
const USE_COLORS = false
const STROKE_WEIGHT = 1

const block0 = (size, x = 0, y = 0) => {
  if (USE_COLORS) {
    fill(255)
    noStroke()
  } else {
    fill(255)
    // strokeWeight(STROKE_WEIGHT)
    // stroke(0, 0, 0)
    noStroke()
  }

  square(x, y, size)
}

const block1 = (size, x = 0, y = 0) => {
  if (USE_COLORS) {
    fill(random(colors))
    noStroke()
    //square(x, y, size)
  }


  triangle(x, y, x, y + size, x + size, y + size)

  if (USE_COLORS) {
    fill(random(colors))
    triangle(x, y, x + size, y, x + size, y + size)
  }
}

const block2 = (size, x = 0, y = 0) => {
  if (USE_COLORS) {
    fill(random(colors))
    noStroke()
    //square(x, y, size)
  }

  if (USE_COLORS) {
    fill(random(colors))
  }
  triangle(x + size, y + size, x, y + size, x + size, y)
}

const block3 = (size, x = 0, y = 0) => {
  if (USE_COLORS) {
    fill(random(colors))
    noStroke()
  } else {
    strokeWeight(STROKE_WEIGHT)
    fill(255)
    stroke(0, 0, 0)
  }

  //square(x, y, size)

  if (USE_COLORS) {
    fill(random(colors))
  }
  triangle(x, y, x, y + size, x + size, y + size)

  if (USE_COLORS) {
    fill(random(colors))
  }
  triangle(x, y, x, y + size, x + size, y)
}

const blockCircleTop = (size, x = 0, y = 0, r = 0) => {
  if (USE_COLORS) {
    fill(random(colors))
    noStroke()
  } else {
    strokeWeight(STROKE_WEIGHT)
    fill(255)
    stroke(0, 0, 0)
  }

  //square(x, y, size)
  r = r != 0 ? r : size

  if (USE_COLORS) {
    fill(random(colors))
  }

  arc((size / 2 + x), (size / 2 + y), r, r, PI, -HALF_PI)
  arc((size / 2 + x), (size / 2 + y), r, r, -HALF_PI, PI * 2)

  if (USE_COLORS) {
    rect(x, y, size, size / 2)
  }
}

const blockCircleBottom = (size, x = 0, y = 0, r = 0) => {
  if (USE_COLORS) {
    fill(random(colors))
    noStroke()
  } else {
    strokeWeight(STROKE_WEIGHT)
    fill(255)
    stroke(0, 0, 0)
  }


  r = r != 0 ? r : size

  if (USE_COLORS) {
    fill(random(colors))
  }

  arc((size / 2 + x), (size / 2 + y), r, r, 0, PI)

  if (USE_COLORS) {
    rect(x, y, size, size / 2)
  }
}

const blockSemiCircleBottom = (size, x = 0, y = 0, r = 0) => {
  if (USE_COLORS) {
    fill(random(colors))
    noStroke()
  } else {
    strokeWeight(STROKE_WEIGHT)
    fill(255)
    stroke(0, 0, 0)
  }

  r = r != 0 ? r : size

  if (USE_COLORS) {
    fill(random(colors))
  }

  noStroke()
  rect(x, y, size, size / 2)

  if (USE_COLORS) {
    fill(random(colors))
  }
  strokeWeight(STROKE_WEIGHT)
  fill(255)
  stroke(0, 0, 0)

  arc((size / 2 + x), y, r, r, 0, PI)
}

const blockCircleLeft = (size, x = 0, y = 0, r = 0) => {
  if (USE_COLORS) {
    fill(random(colors))
    noStroke()
  } else {
    strokeWeight(STROKE_WEIGHT)
    fill(255)
    stroke(0, 0, 0)
  }

  //square(x, y, size)

  if (USE_COLORS) {
    fill(random(colors))
  }

  r = r != 0 ? r : size
  arc((size / 2 + x), (size / 2 + y), r, r, HALF_PI, -HALF_PI)

  if (USE_COLORS) {
    rect(x, y, size, size / 2)
  }
}

const blockCircleRight = (size, x = 0, y = 0, r = 0) => {
  if (USE_COLORS) {
    fill(random(colors))
    noStroke()
  } else {
    strokeWeight(STROKE_WEIGHT)
    fill(255)
    stroke(0, 0, 0)
  }

  //square(x, y, size)
  r = r != 0 ? r : size

  if (USE_COLORS) {
    fill(random(colors))
  }

  arc((size / 2 + x), (size / 2 + y), r, r, -HALF_PI, HALF_PI)

  if (USE_COLORS) {
    rect(x, y, size, size / 2)
  }
}

const blockDot = (size, x = 0, y = 0) => {
  if (USE_COLORS) {
    fill(random(colors))
    noStroke()
  } else {
    strokeWeight(STROKE_WEIGHT)
    fill(255)
    stroke(0, 0, 0)
  }

  //square(x, y, size)

  if (USE_COLORS) {
    fill(random(colors))
  }

  ellipse(x + size / 2, y + size / 2, size / 2)
}

const blockRecursion = (size, x = 0, y = 0, levels = 3) => {
  if (USE_COLORS) {
    fill(random(colors))
    noStroke()
  } else {
    noStroke()
    fill(255)
    square(x, y, size)
    strokeWeight(STROKE_WEIGHT)
    stroke(0, 0, 0)
  }

  for (let i = 1; i < levels; i++) {
    if (USE_COLORS) {
      fill(random(colors))
    }

    ellipse(x + size / 2, y + size / 2, size / i)
  }
}

const blockDotsS = (size, x = 0, y = 0) => {
  const n = 4
  const r = size / n

  if (USE_COLORS) {
    fill(random(colors))
    noStroke()
  } else {
    noStroke()
    fill(255)
    square(x, y, size)
    strokeWeight(STROKE_WEIGHT)
    stroke(0, 0, 0)
  }

  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      if (USE_COLORS) {
        fill(random(colors))
      }
      ellipse(x + (r * i * 2) + r, y + (r * j * 2) + r, r)
    }
  }
}

const blockDotsM = (size, x = 0, y = 0) => {
  const n = 4
  const r = size / n

  if (USE_COLORS) {
    fill(random(colors))
    noStroke()
  } else {
    strokeWeight(STROKE_WEIGHT)
    fill(255)
    stroke(0, 0, 0)
  }

  ////square(x, y, size)

  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      if (USE_COLORS) {
        fill(random(colors))
      }
      ellipse(x + (r * i * 2) + r, y + (r * j * 2) + r, r * 1.5)
    }
  }
}

const blockDotsL = (size, x = 0, y = 0) => {
  const n = 4
  const r = size / n

  if (USE_COLORS) {
    fill(random(colors))
    noStroke()
  } else {
    strokeWeight(STROKE_WEIGHT)
    fill(255)
    stroke(0, 0, 0)
  }

  //square(x, y, size)

  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      if (USE_COLORS) {
        fill(random(colors))
      }
      ellipse(x + (r * i * 2) + r, y + (r * j * 2) + r, r * 2)
    }
  }
}

const blockStar = (size, x = 0, y = 0, r = 0) => {
  if (USE_COLORS) {
    fill(random(colors))
    noStroke()
  } else {
    strokeWeight(STROKE_WEIGHT)
    fill(255)
    stroke(0, 0, 0)
  }

  //square(x, y, size)

  r = r != 0 ? r : size

  if (USE_COLORS) {
    fill(random(colors))
  }
  arc(x, y, r, r, 0, HALF_PI)
  arc(x, y + size, r, r, -HALF_PI, 0)
  arc(x + size, y, r, r, HALF_PI, PI)
  arc(x + size, y + size, r, r, PI, -HALF_PI)
  noFill()
  //square(x, y, size)
}

const blockSquares = (size, x = 0, y = 0, squares = 3) => {
  if (USE_COLORS) {
    fill(random(colors))
    noStroke()
  } else {
    strokeWeight(STROKE_WEIGHT)
    fill(255)
    stroke(0, 0, 0)
  }

  //square(x, y, size)

  for (let i = 0; i < squares; i++) {
    for (let j = 0; j < squares; j++) {
      if (USE_COLORS) {
        // FIXME
        fill(random(colors))
      }
      square(
        x + i * (size / squares),
        y + j * (size / squares),
        size / squares
      )
    }
  }
}

const blockLinesVertical = (size, x = 0, y = 0, lines = 3) => {
  if (USE_COLORS) {
    fill(random(colors))
    noStroke()
  } else {
    strokeWeight(STROKE_WEIGHT)
    fill(255)
    stroke(0, 0, 0)
  }

  //square(x, y, size)

  for (let i = 0; i < lines; i++) {
    if (USE_COLORS) {
      fill(random(colors))
    }
    rect(
      x + i * (size / lines),
      y,
      size / lines,
      size
    )
  }
}

const blockLinesHorizontal = (size, x = 0, y = 0, lines = 3) => {
  if (USE_COLORS) {
    fill(random(colors))
    noStroke()
  } else {
    strokeWeight(STROKE_WEIGHT)
    fill(255)
    stroke(0, 0, 0)
  }

  //square(x, y, size)

  for (let i = 0; i < lines; i++) {
    if (USE_COLORS) {
      fill(random(colors))
    }
    rect(
      x,
      y + i * (size / lines),
      size,
      size / lines
    )
  }
}

function setup() {
  const blockShapes = [
    block0,
    block0,
    block0,
    block0,
    block0,
    block0,
    block0,
    block0,
    // block1,
    // block2,
    // block3,
    // blockLinesHorizontal,
    // blockLinesVertical,
    // blockSquares,
    // blockCircleTop,
    // blockCircleBottom,
    // blockCircleLeft,
    // blockCircleRight,
    // blockDot,
    //blockRecursion,
    blockDotsS,
    //blockDotsS,
    // blockDotsL,
    // blockStar
  ]

  const blockRand = () => {
    return blockShapes[int(random(blockShapes.length))]
  }

  const CM_TO_INCH = 2.54
  const WIDTH_CM = 15
  const HEIGHT_CM = 15
  const WIDTH_INCHES = WIDTH_CM / CM_TO_INCH
  const HEIGHT_INCHES = HEIGHT_CM / CM_TO_INCH
  const DPI = 300

  const WIDTH = Math.round(WIDTH_INCHES * DPI)
  const HEIGHT = Math.round(HEIGHT_INCHES * DPI)

  createCanvas(WIDTH, HEIGHT)

  const N = 9
  const M = 9
  const size = WIDTH / N

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      const r = int(random(blockShapes.length))
      const shape = blockShapes[int(random(0, blockShapes.length))]
      shape(size, i * size, j * size)
      //blockDotsS(size, i * size, j * size)
    }
  }

  for (let i = 2; i < 7; i++) {
    fill('blue')
    blockCircleTop(size, i * size, 8 * size)
    blockCircleTop(size, i * size, 8.5 * size)
  }

  blockRecursion(size * 2, 2 * size, 6 * size, levels = 4)
  blockSemiCircleBottom(size * 4, 4 * size, 6 * size)
  block2(size * 2, 1 * size, 4 * size)
  block1(size * 2, 3 * size, 4 * size)

  block0(size * 2, 2 * size, 2 * size)
  blockStar(size * 2, 2 * size, 2 * size)
  blockDotsL(size * 2, 6 * size, 1 * size)

  blockSquares(size * 1, 5 * size, 5 * size)
  blockSquares(size * 1, 6 * size, 5 * size)
  blockSquares(size * 1, 7 * size, 5 * size)
  blockSquares(size * 1, 5 * size, 4 * size)
  blockSquares(size * 1, 6 * size, 4 * size)
  blockSquares(size * 1, 7 * size, 4 * size)

  blockDotsL(size * 1, 5 * size, 3 * size)
  blockDotsL(size * 1, 6 * size, 3 * size)
  blockDotsL(size * 1, 7 * size, 3 * size)

  block2(size * 1, 6 * size, 2 * size)
  blockLinesVertical(size * 1, 7 * size, 2 * size)

  blockStar(size * 1, 5 * size, 2 * size)

  strokeWeight(STROKE_WEIGHT)
  stroke(0, 0, 0)
  noFill()
  square(0, 0, WIDTH)
}