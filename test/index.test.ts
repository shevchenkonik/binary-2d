import Binary2D from '../src'

describe('Default with Canvas', () => {
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

  it('Condition', () => {
    let canv = document.createElement('canvas');
    let classCanvas = new Binary2D(canv);
    expect(classCanvas.getBinaryData()).toEqual([1, 1, 0, 1]);
  })
})

describe('Correct with Div', () => {
  beforeEach(() => {
    let createElement = document.createElement.bind(document);
    document.createElement = (tagName: string) => {
      if (tagName === 'canvas') {
        return {
          getContext: () => ({}),
          measureText: () => ({}),
          localName: 'div',
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

  it('Condition', () => {
    let canv = document.createElement('canvas');
    let classCanvas = new Binary2D(canv);
    expect(classCanvas.getBinaryData()).toBeUndefined();
  })
})
