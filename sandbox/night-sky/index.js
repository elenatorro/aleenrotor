function setup() {
  const w = window.innerWidth
  const h = window.innerHeight
  const backgroundColor = 0
  const starColors = ["#4cc9f0", "#3a0ca3", "#4361ee"]

  createCanvas(w, h)
  fill(backgroundColor)
  rect(0, 0, width, height)
  noStroke()
  const density = 1000

  for (let i = 0; i < density; i++) {
    const diameter = random(0.5, 2)
    const color = int(random(0, starColors.length))
    fill(starColors[color])
    ellipse(random(width), random(height), diameter, diameter)
  }
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight)
  setup()
}
