let cols, rows;
const w = 100; // Width and height of each cell
const strokeW = 5
const noiseLevel = 1
const mazeWidth = 800
const mazeHeight = 800
const colorA = '#293241'
const colorB = '#e0fbfc'
const colorC = '#3d5a80'
const colorD = '#98c1d9'
const colorE = '#ee6c4d'
const palette = [colorC, colorE, colorD]
const numShapes = 10

// Cell class
class Cell {
  constructor(i, j) {
    this.i = i;
    this.j = j;
    this.walls = [true, true, true, true]; // Top, right, bottom, left
    this.visited = false;
  }

  // Function to draw the cell
  show(margin) {
    let x = this.i * w + margin / 2;
    let y = this.j * w + margin / 2;

    noStroke()
    noFill()
    //fill(colorB)
    rect(x, y, w, w)
    stroke(colorA);
    strokeWeight(strokeW)

    if (this.walls[0]) {
      beginShape();
      for (let j = x; j < x + w; j += 1) {
        curveVertex(j, y + noise(y) * random(noiseLevel * -1, noiseLevel))
      }
      endShape();
    }

    if (this.walls[1]) {
      beginShape();
      for (let j = y; j < y + w; j += 1) {
        curveVertex(x + w + noise(x) * random(noiseLevel * -1, noiseLevel), j)
      }
      endShape();
    }

    if (this.walls[2]) {
      beginShape();
      for (let j = x; j < x + w; j += 1) {
        curveVertex(j, y + w + noise(y) * random(noiseLevel * -1, noiseLevel))
      }
      endShape();
    }

    if (this.walls[3]) {
      beginShape();
      for (let j = y; j < y + w; j += 1) {
        curveVertex(x + noise(x) * random(noiseLevel * -1, noiseLevel), j)
      }
      endShape();
    }

    createShape(x, y, margin)
  }

  // Function to get unvisited neighbors
  checkNeighbors(grid) {
    let neighbors = [];

    // Get neighbors
    let top = grid[index(this.i, this.j - 1)];
    let right = grid[index(this.i + 1, this.j)];
    let bottom = grid[index(this.i, this.j + 1)];
    let left = grid[index(this.i - 1, this.j)];

    // Check if neighbors are valid
    if (top && !top.visited) neighbors.push(top);
    if (right && !right.visited) neighbors.push(right);
    if (bottom && !bottom.visited) neighbors.push(bottom);
    if (left && !left.visited) neighbors.push(left);

    // Choose a random unvisited neighbor
    if (neighbors.length > 0) {
      let r = floor(random(0, neighbors.length));
      return neighbors[r];
    } else {
      return undefined;
    }
  }
}

// Function to get index of a cell in the grid array
function index(i, j) {
  if (i < 0 || j < 0 || i > cols - 1 || j > rows - 1) {
    return -1;
  }
  return i + j * cols;
}

function createShape(x, y, margin) {
  const shouldCreateShape = random(0, 10) < 1
  if (shouldCreateShape) {
    const shape = int(random(0, 3))
    const randomColor = palette[int(random(0, 3))]
    if (shape == 0) {
      const circleW = w / 2
      fill(randomColor)
      strokeWeight(0)
      circle(x + circleW, y + circleW, circleW)
    } else if (shape == 1) {
      strokeWeight(0)
      fill(randomColor)
      const triangleW = w / 2
      const startX = x
      const startY = y + w

      let x1 = startX;
      let y1 = startY;
      let x2 = startX + triangleW / 2;
      let y2 = startY - ((sqrt(3) / 2) * triangleW);
      let x3 = startX + triangleW;
      let y3 = startY;

      push()
      translate((triangleW / 2), -(triangleW / 2))
      triangle(x1, y1, x2, y2, x3, y3)
      pop()
    } else if (shape == 2) {
      const squareW = w / 2
      strokeWeight(0)
      fill(randomColor)
      square(x + squareW / 2, y + squareW / 2, squareW)
    }
  }
}

// Function to remove walls between two cells
function removeWalls(a, b) {
  let x = a.i - b.i;
  if (x === 1) {
    a.walls[3] = false;
    b.walls[1] = false;
  } else if (x === -1) {
    a.walls[1] = false;
    b.walls[3] = false;
  }
  let y = a.j - b.j;
  if (y === 1) {
    a.walls[0] = false;
    b.walls[2] = false;
  } else if (y === -1) {
    a.walls[2] = false;
    b.walls[0] = false;
  }
}

function drawMaze(margin) {
  const grid = [];
  const stack = [];
  let current;
  cols = floor(mazeWidth / w);
  rows = floor(mazeHeight / w);

  // Create a 2D array of Cell objects
  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      let cell = new Cell(i, j);
      grid.push(cell);
    }
  }

  // Start with a random cell
  //current = grid[floor(random(0, grid.length))];
  current = grid[0]

  // Main loop to generate the maze
  while (true) {
    // Mark current cell as visited
    current.visited = true;

    // STEP 1: Check for unvisited neighbors
    let next = current.checkNeighbors(grid);
    if (next) {
      next.visited = true;

      // STEP 2: Push current cell to the stack
      stack.push(current);

      // STEP 3: Remove walls between current and next cell
      removeWalls(current, next);

      // STEP 4: Move to the next cell
      current = next;
    } else if (stack.length > 0) {
      // If there are no unvisited neighbors but there are cells in the stack
      // Pop a cell from the stack and make it the current cell
      current = stack.pop();
    } else {
      break; // Maze generation is complete
    }
  }

  // Draw all cells
  for (let i = 0; i < grid.length; i++) {
    grid[i].show(margin);
  }
}

function setup() {
  let margin = 100
  createCanvas(mazeWidth + margin * 3, mazeHeight + margin * 3)
  background(255)
  drawMaze(margin)
  // for (let x = 0; x < 5; x++) {
  //   drawMaze(margin + x * 50)
  // }
}