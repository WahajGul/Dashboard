export async function getStudentDetails() {
    const response = await fetch("http://localhost:5000/student_details");
    const result = await response.json();
    return result;
}
