/**
 * Transform canvas to binary matrix
 *
 * The correct way to use is get canvas with one layer
 * @param canvas
 * @param width
 * @param height
 */
const transform = (canvas: HTMLCanvasElement) => {
  if (!canvas || canvas.localName !== "canvas") {
    throw new Error("The element isn't canvas");
  }

  /**
   * Initial context of input canvas
   */
  let initialContext = canvas.getContext("2d");
  /**
   * Width & height of input canvas
   * But good idea is external width & height
   */
  let { width, height } = canvas;
  /**
   * Initialize binary matrix with 0 values
   */
  let initialMatrix = initialContext.getImageData(0, 0, width, height);
  /**
   * Return this matrix as binary matrix
   */
  let binaryMatrix = [];

  for (
    let i = 0;
    i < initialContext.canvas.width * initialContext.canvas.width * 4;
    i += 4
  ) {
    if (
      initialMatrix.data[i + 0] > 0 || // Alpha
      initialMatrix.data[i + 1] > 0 || // Red
      initialMatrix.data[i + 2] > 0 || // Green
      initialMatrix.data[i + 3] > 0    // Blue
    ) {
      binaryMatrix.push(1);
    } else {
      binaryMatrix.push(0);
    }
  }
}

module.exports = transform;
