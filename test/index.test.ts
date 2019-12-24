import Binary2D from '../src'

beforeEach(() => {
  let createElement = document.createElement.bind(document);
  document.createElement = (tagName: string) => {
    if (tagName === 'canvas') {
      return {
        getContext: () => ({}),
        measureText: () => ({}),
        localName: 'canvas',
        width: 2,
        height: 2,
        data: [
          0, 255, 255, 255,
          0, 255, 255, 255,
          0, 0, 0, 0,
          0, 255, 255, 255
        ]
      };
    }
    return createElement(tagName);
  };
});

describe('Default', () => {
  it('Correct', () => {
    let canv = document.createElement('canvas');
    let classCanvas = new Binary2D(canv);
    expect(classCanvas.getBinaryData()).toEqual([1, 1, 0, 1]);
  })
})
