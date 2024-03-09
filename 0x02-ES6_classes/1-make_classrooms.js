import ClassRoom from './0-classroom.js';

export function initializeRooms() {
  return [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34),
  ];
}
const classRooms = initializeRooms();
console.log(classRooms);
// [
//   ClassRoom { _size: 19 },
//   ClassRoom { _size: 20 },
//   ClassRoom { _size: 34 },
// ]
