function setup() {
  createCanvas(600, 800);

  let resolution = 0.002;
  let numPoints = 100;
  let numWaves = 1000;
  let noise_level = 10;

  background(255);
  strokeWeight(1);
  noFill();

  for (let i = 0; i < height; i += 2) {
    const init = random(0, width / 2)
    const end = random(width / 2, width)

    stroke("#0077b6");
    beginShape();
    for (let j = 0; j <= init; j += 1) {
      curveVertex(j, i + noise(j) * random(5, 10))
    }
    endShape();

    stroke("#00b4d8");
    beginShape();
    for (let j = init; j <= end; j += 1) {
      curveVertex(j, i + noise(j) * random(5, 10))
    }
    endShape();

    stroke("#90e0ef");
    beginShape();
    for (let j = end; j <= width; j += 1) {
      curveVertex(j, i + noise(j) * random(5, 10))
    }
    endShape();
  }
}