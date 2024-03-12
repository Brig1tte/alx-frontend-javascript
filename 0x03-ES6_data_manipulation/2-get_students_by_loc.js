export default function getStudentsByLocation(students, city) {
  return students.filter((newElement) => newElement.location === city);
}
