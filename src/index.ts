/**
 * Transform canvas to binary matrix
 *
 * The correct way to use is get canvas with one layer
 * @param canvas
 * @param width
 * @param height
 */
const canvasToBinaryMatrix = (canvas, width?: number, height?: number) => {
  if (!canvas) return 0;

  let initialContext = canvas.getContext("2d");
  let canvasWidth = initialContext.canvas.width;
  let canvasHeight = initialContext.canvas.height;
  let initialMatrix = initialContext.getImageData(0, 0, canvasWidth, canvasHeight);
  let binaryMatrix = [];

  for (
    let i = 0;
    i < initialContext.canvas.width * initialContext.canvas.width * 4;
    i += 4
  ) {
    let alpha = initialMatrix.data[i + 0];
    let r = initialMatrix.data[i + 1];
    let g = initialMatrix.data[i + 2];
    let b = initialMatrix.data[i + 3];

    if (alpha > 0 || r > 0 || g > 0 || b > 0) {
      binaryMatrix.push(1);
    } else {
      binaryMatrix.push(0);
    }
  }
}

module.exports = canvasToBinaryMatrix;
