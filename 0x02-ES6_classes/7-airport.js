class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  get [Symbol.toPrimitive]() {
    return this._code;
  }

  toString() {
    return this._code;
  }

  get description() {
    return this._code;
  }
}
