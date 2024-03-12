export default function createInt8TypedArray(length, position, value) {
  // check if the position is within range
  if (position >= length) {
    throw new Error('Position outside range');
  }

  // create a new ArrayBuffer with specified length
  const buffer = new ArrayBuffer(length);

  // crate a new Int8Array view of the ArrayBuffer
  const view = new DataView(buffer);

  // set the value at the specified position
  view.setInt8(position, value);

  // return the ArrayBuffer with an Int8 value at specific position
  return view;
}
