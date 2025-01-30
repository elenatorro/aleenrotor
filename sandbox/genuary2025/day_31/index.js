const CM_TO_INCH = 2.54
const WIDTH_CM = 10
const HEIGHT_CM = 15
const MARGIN_CM = 0.5
const WIDTH_INCHES = WIDTH_CM / CM_TO_INCH
const HEIGHT_INCHES = HEIGHT_CM / CM_TO_INCH
const MARGIN_INCHES = MARGIN_CM / CM_TO_INCH
const DPI = 300

const COLORS = ["#f94144","#f3722c","#f8961e","#f9844a","#f9c74f","#90be6d","#43aa8b","#4d908e","#577590","#277da1"]
const WIDTH = Math.round(WIDTH_INCHES * DPI)
const HEIGHT = Math.round(HEIGHT_INCHES * DPI)
const MARGIN = Math.round(MARGIN_INCHES * DPI)
const N = 10
const M = 10
const size = WIDTH / N

function merge(left, right) {
  let resultArray = [], leftIndex = 0, rightIndex = 0

  while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
          resultArray.push(left[leftIndex])
          leftIndex+=1
      } else {
          resultArray.push(right[rightIndex])
          rightIndex+=1
      }
  }

  const result = resultArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex))
  return result
}

function mergeSort(arr, i, j, size) {
  drawPixelArray(arr, i, j, size)

  if (arr.length === 1) {
      return arr
  }

  const middle = Math.floor(arr.length / 2)
  const left = arr.slice(0, middle)
  console.log('left arr', left)
  
  const right = arr.slice(middle)
  console.log('right arr', right)

  return merge(
      mergeSort(left, i, j + size * 2, size),
      mergeSort(right, WIDTH / 1.5 - i, j + size * 2, size)
  )
}

function drawPixelArray(arr, i, j, size) {
  textSize(size / 2)
  const start = size * int(arr.length / 2)
  arr.forEach((p, index) => {
    stroke(0)
    fill('blue')
    square(start + i + index * size, j, size)
    fill('white')
    text(`${p}`, start + i + index * size, j + size)
  })
}

function setup() {
  createCanvas(WIDTH + MARGIN, HEIGHT + MARGIN)
  background("#faedcd")
  const arr = [38, 27, 43, 3, 9, 82, 10]
  const size = 80
  mergeSort(arr, WIDTH / 2 - (arr.length * size), MARGIN, size)
}