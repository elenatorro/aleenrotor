//const colors = ['#dad7cd', '#344e41', '#588157', '#a3b18a']
// const colors = ['#001219', '#005f73', '#0a9396', '#94d2bd', '#e9d8a6', '#ee9b00', '#ca6702', '#bb3e03', '#ae2012', '#9b2226' ]
const colors = ['#231942', '#5e548e', '#9f86c0', '#be95c4', '#e0b1cb']
//const colors = ['#1a6646', '#99cca2', '#7badcc', '#344373', '#6f4b73', '#cc8070', '#c45631', '#9e1c18']
//const colors = ['#141414', '#f8f4f9', '#98ce00', '#9d8af9', '#6e48c3']
const USE_COLORS = false
const STROKE_WEIGHT = 1

const flower1 = (size, x = 0, y = 0, r = 0) => {
  strokeWeight(1)
  stroke(0, 0, 0)
  fill(255)

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
    fill(random(colors))
  } else {
    strokeWeight(1)
    fill(255)
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
    stroke(colors[0])
    square(x + size / 4, y + size / 4, size / ratio)
  }

  if (USE_COLORS) {
    noStroke()
    fill(colors[3])
  }

  //circle(x + size / 2, y + size / 2, size / 2)

  if (USE_COLORS) {
    noStroke()
    fill(colors[0])
  }

  circle(x + size / 2, y + size / 2, size / 3)

  if (USE_COLORS) {
    noStroke()
    fill(colors[1])
  }

  circle(x + size / 2, y + size / 2, size / 5)
}

const flower4 = (size, x = 0, y = 0) => {
  const r1 = size / 4
  const r2 = size / 10

  strokeWeight(1)
  stroke(0, 0, 0)
  fill(255)

  const x1 = x + size / 4 + size / 15
  const y1 = y + size / 4 + size / 15
  const x2 = x1 + (r1 - r2) / sqrt(2)
  const y2 = y1 + (r1 - r2) / sqrt(2)
  const x3 = x + size - size / 3
  const y3 = y + size / 4 + size / 15
  const x4 = x3 - (r1 - r2) / sqrt(2)
  const y4 = y3 + (r1 - r2) / sqrt(2)
  const x5 = x3
  const y5 = y + size - size / 3
  const x6 = x5 - (r1 - r2) / sqrt(2)
  const y6 = y5 - (r1 - r2) / sqrt(2)
  const x7 = x1
  const y7 = y5
  const x8 = x7 + (r1 - r2) / sqrt(2)
  const y8 = y7 - (r1 - r2) / sqrt(2)

  ellipse(x3, y3, r1 * 2, r1 * 2)
  // ellipse(x4, y4, r2 * 2, r2 * 2)

  ellipse(x7, y7, r1 * 2, r1 * 2)
  // ellipse(x8, y8, r2 * 2, r2 * 2)

  ellipse(x1, y1, r1 * 2, r1 * 2)
  ellipse(x2, y2, r2 * 2, r2 * 2)

  ellipse(x5, y5, r1 * 2, r1 * 2)
  ellipse(x6, y6, r2 * 2, r2 * 2)

  //circle(x + size / 2, y + size / 2, size / 12)
}

const flower5 = (size, x = 0, y = 0, petals = 12) => {
  if (USE_COLORS) {
    noStroke()
    fill(colors[2])
  } else {
    strokeWeight(1)
    stroke(0, 0, 0)
    fill(255)
  }

  push()
  translate(x + size / 2, y + size / 2)
  for (let i = 0; i < petals; i++) {
    push()
    rotate(i)
    bezier(
      0, 0,
      0, size / 2,
      size / 2, size / 2,
      0, 0
    )
    pop()
  }
  pop()
  //noFill()

  //circle(x + size / 2, y + size / 2, size / petals)
}

const flower6 = (size, x = 0, y = 0) => {
  if (USE_COLORS) {
    noStroke()
    fill(random(colors))
  } else {
    strokeWeight(1)
    stroke(0, 0, 0)
    fill(255)
  }

  push()
  translate(x + size / 2, y + size / 2)

  for (let i = 0; i < 6; i++) {
    push()
    rotate(-i)

    bezier(
      0, 0,
      -size / 2, size / 2,
      size / 2, size / 2,
      0, 0
    )
    // bezier(
    //   0, 0,
    //   0, size / 1.2,
    //   size / 1.2, 0,
    //   0, 0
    // )
    pop()
  }

  // for (let i = 0; i < 6; i++) {
  //   push()
  //   rotate(i)
  //   bezier(
  //     0, 0,
  //     0, size / 2,
  //     size / 2, 0,
  //     0, 0
  //   )
  //   pop()
  // }
  pop()

  if (USE_COLORS) {
    fill(colors[1])
  } else {
    fill(255)
  }

  circle(x + size / 2, y + size / 2, size / 5)
}

const blockStar = (size, x = 0, y = 0, r = 0) => {
  if (USE_COLORS) {
    fill(random(colors))
    noStroke()
  } else {
    strokeWeight(STROKE_WEIGHT)
    fill(255)
    //noFill()
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

const leaf1 = (size, x = 0, y = 0) => {
  const ratio = size / 2
  const ratio2 = size / 2
  const tallo = 5
  strokeWeight(1)
  stroke(0, 0, 0)
  fill(255)
  //square(x, y, size)
  push()
  rect(x + size / 2 - tallo / 2, y + size / 8, tallo, size / 2 + size / 4)
  fill('white')
  translate(x + size / 2, y + size / 4)

  let j = 1
  for (let i = 0; i < 4; i += 1) {
    j++
    push()
    translate(0, (size / 12) * i * 2)
    rotate(radians(90))
    bezier(
      0, tallo,
      -ratio / 2, ratio,
      ratio / 2, ratio,
      0, tallo
    )
    bezier(
      0, 0,
      -ratio2 / 2, ratio2,
      ratio2 / 2, ratio2,
      0, 0
    )
    rotate(radians(180))
    bezier(
      0, tallo,
      -ratio / 2, ratio,
      ratio / 2, ratio,
      0, tallo
    )
    bezier(
      0, 0,
      -ratio2 / 2, ratio2,
      ratio2 / 2, ratio2,
      0, 0
    )
    pop()
  }
  pop()
}

const circleShape = (size, x = 0, y = 0, shape) => {
  if (USE_COLORS) {
    fill(colors[0])
    noStroke()
  } else {
    strokeWeight(1)
    stroke(0, 0, 0)
    fill(255)
  }

  const ratio = 1.2
  const ratio2 = 12

  //circle(x + size / 2, y + size / 2, size)
  shape(size / ratio, x + size / ratio2, y + size / ratio2)
  noFill()
  circle(x + size / 2, y + size / 2, size)
}

const flower7 = (size, x = 0, y = 0) => {
  if (USE_COLORS) {
    fill(random(colors))
    stroke(0, 0, 0)
    //noStroke()
  } else {
    strokeWeight(1)
    stroke(0, 0, 0)
    fill(255)
  }

  const petal_radius = size / 1.5
  push()
  translate(x + size / 2, y + petal_radius * 1.5)
  push()
  bezier(
    0, 0,
    -petal_radius / 2, -petal_radius,
    +petal_radius / 2, -petal_radius,
    0, 0
  )
  pop()
  push()
  rotate(1)
  bezier(
    0, 0,
    -petal_radius / 2, -petal_radius,
    +petal_radius / 2, -petal_radius,
    0, 0
  )
  pop()
  push()
  rotate(-1)
  bezier(
    0, 0,
    -petal_radius / 2, -petal_radius,
    +petal_radius / 2, -petal_radius,
    0, 0
  )
  pop()
  push()
  rotate(0.5)
  bezier(
    0, 0,
    -petal_radius / 2, -petal_radius,
    +petal_radius / 2, -petal_radius,
    0, 0
  )
  pop()
  push()
  rotate(-0.5)
  bezier(
    0, 0,
    -petal_radius / 2, -petal_radius,
    +petal_radius / 2, -petal_radius,
    0, 0
  )
  pop()
  pop()
  noFill()
}

const flower8 = (size, x = 0, y = 0, kind = 0) => {
  if (USE_COLORS) {
    fill(random(colors))
    //stroke(0, 0, 0)
    noStroke()
  } else {
    strokeWeight(1)
    stroke(0, 0, 0)
    fill(255)
  }

  const petal_radius = size / 1.5
  push()
  translate(x + size / 2, y + size)
  rotate(kind)
  push()
  bezier(
    0, 0,
    -petal_radius / 2, -petal_radius,
    +petal_radius / 2, -petal_radius,
    0, 0
  )
  pop()
  push()
  rotate(0.65)
  bezier(
    0, 0,
    -petal_radius / 2, -petal_radius,
    +petal_radius / 2, -petal_radius,
    0, 0
  )
  pop()
  push()
  rotate(-0.65)
  bezier(
    0, 0,
    -petal_radius / 2, -petal_radius,
    +petal_radius / 2, -petal_radius,
    0, 0
  )
  pop()
  pop()
  noFill()
}

const tallo2 = (size, x = 0, y = 0, r = 0) => {
  if (USE_COLORS) {
    fill(random(colors))
    noStroke()
    stroke(0, 0, 0)
  } else {
    strokeWeight(1)
    stroke(0, 0, 0)
    fill(255)
  }

  const round = 100
  push()
  const weight = 50
  if (r != 0) {
    translate(x + size / 2, y + size - weight)
    rotate(1)
  } else {
    translate(x, y)
  }

  beginShape()


  const s = size
  vertex(0, 0)
  bezierVertex(
    s, 0,
    0, s,
    s, s
  )
  vertex(s, s)
  bezierVertex(
    -weight, s + weight,
    s - weight, weight,
    0, 0
  )
  endShape()
  pop()
}

const tallo3 = (size, x = 0, y = 0, r = 0) => {
  if (USE_COLORS) {
    fill(random(colors))
    noStroke()
    stroke(0, 0, 0)
  } else {
    strokeWeight(1)
    stroke(0, 0, 0)
    fill(255)
  }

  const round = 100
  const weight = 20
  const s = size
  push()
  translate(x + s / 2, y - s / 4)

  beginShape()
  rotate(1)
  vertex(0, 0)
  bezierVertex(
    s, 0,
    0, s,
    s, s
  )
  vertex(s, s)
  bezierVertex(
    -weight, s + weight,
    s - weight, weight,
    0, 0
  )
  endShape()

  const petal_radius = size / 1.5

  push()
  bezier(
    petal_radius / 2 + weight, weight,
    -petal_radius / 2 + weight * 2, -petal_radius + weight,
    +petal_radius / 2 + weight * 2, -petal_radius + weight,
    petal_radius / 2 + weight, weight
  )
  pop()
  pop()
}

const blockDotsS = (size, x = 0, y = 0) => {
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

  push()
  //translate(x, y)
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      if (USE_COLORS) {
        fill(random(colors))
      }
      ellipse(x + (r * i * 2) + r, y + (r * j * 2) + r, r)
    }
  }
  pop()
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

  //square(x, y, size)

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

  square(x, y, size)

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

function setup() {
  const CM_TO_INCH = 2.54
  const WIDTH_CM = 15
  const HEIGHT_CM = 15
  const MARGIN_CM = 0.1
  const WIDTH_INCHES = WIDTH_CM / CM_TO_INCH
  const HEIGHT_INCHES = HEIGHT_CM / CM_TO_INCH
  const MARGIN_INCHES = MARGIN_CM / CM_TO_INCH
  const DPI = 300

  const WIDTH = Math.round(WIDTH_INCHES * DPI)
  const HEIGHT = Math.round(HEIGHT_INCHES * DPI)
  const MARGIN = Math.round(MARGIN_CM * DPI)

  createCanvas(WIDTH + MARGIN, HEIGHT + MARGIN)

  if (USE_COLORS) {
    background(random(colors))
  } else {
    background(255)
  }

  // for (let i = 0; i < N; i++) {
  //   for (let j = 0; j < M; j++) {
  //     if (i == 0 && j == 0) {
  //       flower8(size, i * size + MARGIN, j * size + MARGIN, -HALF_PI / 2)
  //     } else if (i == N - 1 && j == 0) {
  //       flower8(size, i * size + MARGIN, j * size + MARGIN, HALF_PI / 2)
  //     } else if (i == 0 && j == M - 1) {
  //       flower8(size, i * size + MARGIN, j * size + MARGIN, PI + (HALF_PI / 2))
  //     } else if (i == N - 1 && j == M - 1) {
  //       flower8(size, i * size + MARGIN, j * size + MARGIN, PI - (HALF_PI / 2))
  //     } else if (i == 0) {
  //       flower8(size, i * size + MARGIN, j * size + MARGIN, - HALF_PI)
  //     } else if (i == N - 1) {
  //       flower8(size, i * size + MARGIN, j * size + MARGIN, HALF_PI)
  //     } else if (j == 0) {
  //       flower8(size, i * size + MARGIN, j * size + MARGIN)
  //     } else if (j == M - 1) {
  //       flower8(size, i * size + MARGIN, j * size + MARGIN, PI)
  //     }
  //   }
  // }
  const blockShapes = [
    flower1, flower2, flower3, flower4, flower6, blockStar
  ]

  // for (let i = 0; i < N; i++) {
  //   for (let j = 0; j < M; j++) {
  //     const s = size
  //     if (j % 2 == 0) {
  //       blockDotsS(s, i * (s) + MARGIN, j * (s) + MARGIN)
  //     }
  //   }
  // }
  // for (let i = 0; i < N; i++) {
  //   const j = 1
  //   const s = size
  //   blockDotsS(s, i * (s) + MARGIN, j * (s) + MARGIN)
  // }

  // for (let i = 0; i < N; i++) {
  //   const j = 2
  //   const s = size
  //   blockDotsM(s, i * (s) + MARGIN, j * (s) + MARGIN)
  // }

  // for (let i = 0; i < N; i++) {
  //   const j = 4
  //   const s = size
  //   flower3(s, i * (s) + MARGIN, j * (s) + MARGIN)
  // }

  // for (let i = 0; i < N; i++) {
  //   const j = 4
  //   const s = size
  //   tallo3(s, i * (s) + MARGIN, j * (s) + MARGIN)
  // }

  // for (let i = 0; i < N; i++) {
  //   const j = 3
  //   const s = size
  //   flower6(s, i * (s) + MARGIN, j * (s) + MARGIN)
  // }

  // for (let i = 0; i < N; i++) {
  //   const j = 0
  //   flower7(size, i * size + MARGIN, j * (size) + MARGIN)
  // }

  // for (let i = 0; i < N; i++) {
  //   const j = 1
  //   leaf1(size, i * size + MARGIN, j * size + MARGIN)
  // }

  // for (let i = 0; i < N; i++) {
  //   const j = 2
  //   flower7(size, i * size + MARGIN, j * (size) + MARGIN)
  // }

  // for (let i = 0; i < N; i++) {
  //   const j = 3
  //   leaf1(size, i * size + MARGIN, j * size + MARGIN)
  // }

  // for (let i = 0; i < N; i++) {
  //   const j = 4
  //   flower7(size, i * size + MARGIN, j * (size) + MARGIN)
  // }

  // for (let i = 0; i < N; i++) {
  //   const j = 5
  //   leaf1(size, i * size + MARGIN, j * (size) + MARGIN)
  // }

  const N = 8
  const M = 8
  const size = ((WIDTH - MARGIN) / N)

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if ((i % 2 != 0 && j % 2 == 0) || (i % 2 == 0 && j % 2 != 0)) {
        //blockLinesVertical(size, i * size + MARGIN, j * size + MARGIN)
        blockCircleLeft(size, i * size + MARGIN, j * size + MARGIN)
      } else {
        blockCircleRight(size, i * size + MARGIN, j * size + MARGIN)
      }
      //square(i * size + MARGIN, j * size + MARGIN, size)
    }
  }

  for (let i = 0; i < N * 2; i++) {
    for (let j = 0; j < M * 2; j++) {
      if (((i % 2 != 0 && j % 2 == 0) || (i % 2 == 0 && j % 2 != 0))) {
        const s = size
        //flower1(s, i * s + MARGIN, j * s + MARGIN)
      } else {
        const s = size * 0.5
        flower1(s, i * s + MARGIN, j * s + MARGIN)
      }
    }
  }

  stroke(0)
  strokeWeight(1)
  noFill()
  square(MARGIN, MARGIN, WIDTH - MARGIN)
  square(0, 0, WIDTH + MARGIN)
}