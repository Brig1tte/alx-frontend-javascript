class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  get [Symbol.toPrimitive]() {
    return this._size.toString();
  }

  valueOf() {
    return this._size;
  }
}
