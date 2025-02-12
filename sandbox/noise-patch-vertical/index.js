function setup() {
  const frameHeight = 932
  const frameWidth = 430
  const frameRatio = frameWidth / frameHeight
  const canvasHeight = 1600
  const canvasWidth = canvasHeight * (frameRatio)

  createCanvas(canvasWidth, canvasHeight)

  const palette1 = ["#5e503f", "#22333b", "#eae0d5", "#5e503f"]
  const palette2 = ["#0077b6", "#00b4d8", "#90e0ef", "#caf0f8"]
  const palette3 = ["#001427", "#708d81", "#f4d58d", "#bf0603", "#8d0801"]
  const palette4 = ["#70d6ff", "#ff70a6", "#ff9770", "#ffd670"]
  const palette5 = ["#da0100", "#43347d", "#96bced", "#c8cfe2", "#383f51"]
  const palette6 = ["#171111", "#0064dc", "#a4e974", "#b77bd1", "#cfa5e5"]
  const palette7 = ["#262322", "#63372C", "#C97D60", "#FFBCB5", "#F2E5D7"]
  const palette8 = ["#9B1D20", "#C1ABA6", "#0C0F0A"]
  const palette9 = ["#070417", "#110A35", "#080321", "#11092D"]
  const colors = palette9
  const steps = []
  const numSteps = colors.length - 1
  const numColors = colors.length
  const interval = height / numSteps
  const noiseLevel = 5

  background(colors[0]);
  strokeWeight(1);
  noFill();

  for (let s = 0; s <= numColors; s += 1) {
    steps.push(s === numColors ? height : interval * s)
  }

  for (let i = 0; i <= height; i += 1) {
    for (let s = 0; s <= numSteps; s += 1) {
      stroke(colors[s])
      beginShape()
      const init = random(s === 0 ? 0 : steps[s - 1], steps[s])
      const end = s === numSteps ? height + 100 : random(steps[s], steps[s + 1])
      //for (let j = init; j < height; j += 1) {
      for (let j = init; j < end; j += 1) {
        curveVertex(i + noise(j) * random(-1 * noiseLevel, noiseLevel), j)
      }
      endShape()
    }
  }
}