'use strict';

export default class utils {
  static isInt(value) {
    if (isNaN(value)) {
      return false;
    }
    let x = parseFloat(value);

    return (x | 0) === x;
  }
}
