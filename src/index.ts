/**
 * Binary 2D
 */
export default class Binary2D {
  private canvas: HTMLCanvasElement;
  private binaryMatrix: Array<number> = [];

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
  }

  private checkCanvas(): boolean {
    if (this.canvas.localName !== 'canvas') {
      return false;
    }

    return true;
  }

  /**
   * Create binary matrix on canvas data
   */
  private createBinaryMatrix(): void {
    for (
      let i = 0;
      i < this.canvas.width * this.canvas.width * 4;
      i += 4
    ) {
      if (
        // @ts-ignore
        this.canvas.data[i + 0] > 0 || // Alpha
        // @ts-ignore
        this.canvas.data[i + 1] > 0 || // Red
        // @ts-ignore
        this.canvas.data[i + 2] > 0 || // Green
        // @ts-ignore
        this.canvas.data[i + 3] > 0    // Blue
      ) {
        this.binaryMatrix.push(1);
      } else {
        this.binaryMatrix.push(0);
      }
    }
  }

  /**
   * Return binary array of numbers
   */
  public getBinaryData() {
    if (!this.checkCanvas()) {
      return undefined
    };

    this.createBinaryMatrix();
    return this.binaryMatrix;
  }
}
