export default function updateStudentGradeByCity(students, city, newGrade) {
  const studentsCity = students.filter((student) => student.location === city);
  return studentsCity.map((student) => {
    const freshStudent = { ...student };
    const upGrade = newGrade.filter((grade) => student.id === grade.studentId);
    if (upGrade.length === 0) {
      freshStudent.grade = 'N/A';
    } else {
      freshStudent.grade = upGrade[0].grade;
    }
    return freshStudent;
  });
}
