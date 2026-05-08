export async function getStudentCount() {
  const response = await fetch("http://localhost:5000/total_students");
  const result = await response.json();
  return result[0]["count"];
}

export async function getAllStudents() {
  const response = await fetch("http://localhost:5000/students");
  const result = await response.json();
  return result;
}
