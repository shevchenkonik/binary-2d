# binary-2d

A tiny (179 bytes) transformer Canvas to Binary Matrix

[![CircleCI](https://circleci.com/gh/shevchenkonik/binary-2d.svg?style=shield)](https://circleci.com/gh/shevchenkonik/binary-2d) [![codecov](https://codecov.io/gh/shevchenkonik/binary-2d/branch/master/graph/badge.svg)](https://codecov.io/gh/shevchenkonik/binary-2d) ![GitHub](https://img.shields.io/github/license/shevchenkonik/binary-2d)

## Installation

```shell
npm i binary-2d
```

## API

```javascript
import binary2D from 'binary-2d';

let canv = document.getElementById("your-canvas-element");
let binary = new Binary2D(canv).getBinaryData();
```
