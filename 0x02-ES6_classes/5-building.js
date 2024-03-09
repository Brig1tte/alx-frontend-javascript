class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  get name() {
    throw new Error('Class extending Building must override name getter');
  }

  get height() {
    throw new Error('Class extending Building must override height getter');
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
