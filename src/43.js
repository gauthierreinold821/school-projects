function addStudent(studentData) {
  const student = JSON.parse(JSON.stringify(studentData));
  const students = students || [];
  
  students.push(student);
}

addStudent({
  name: "John",
  age: 25,
  course: "C++"
});
