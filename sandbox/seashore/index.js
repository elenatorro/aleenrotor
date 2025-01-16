function setup() {
  createCanvas(600, 800)

  const resolution = 2
  const numWaves = 50
  const noiseLevel = 70
  const opacity = 5
  const colors = [
    [134, 182, 246],
    [238, 245, 255],
    [180, 212, 255]
  ]

  background("#F9E8C9")
  noStroke()

  for (let c = 0; c < colors.length; c++) {
    for (let w = 0; w < numWaves; w++) {
      for (let i = 0; i < width; i += noiseLevel) {
        beginShape()
        fill(colors[c][0], colors[c][1], colors[c][2], opacity + c)
        curveVertex(0, 0)
        curveVertex(0, 0)
        for (let j = 0; j < width + (c * 100); j += noiseLevel) {
          curveVertex(j + c, (noise(j + c + w) * (i / resolution)))
        }
        stroke(colors[c][0], colors[c][1], colors[c][2], opacity)
        curveVertex(width, noise(w))
        curveVertex(width, noise(w))
        endShape()
      }
    }
  }
}