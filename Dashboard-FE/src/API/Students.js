export async function getStudentDetails() {
    const response = await fetch(
        "http://localhost:5000/api/dashboard/students",
    );
    const result = await response.json();
    return result;
}
