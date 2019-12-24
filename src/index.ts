export default class Binary2D {
  public canvas: HTMLCanvasElement;
  public binaryMatrix: Array<number> = [];

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
  }

  private checkCanvas() {
    if (this.canvas.localName !== 'canvas') {
      return false;
    }

    return true;
  }

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

  public getBinaryData() {
    if (!this.checkCanvas()) {
      return undefined
    };

    this.createBinaryMatrix();
    return this.binaryMatrix;
  }
}
