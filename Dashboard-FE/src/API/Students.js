export async function getStudentDetails() {
    const response = await fetch(
        "http://localhost:5000/api/dashboard/students",
    );
    const result = await response.json();
    return result;
}

export async function getStudentByAgeGroup() {
    const response = await fetch(
        "http://localhost:5000/api/students/students-by-age-group",
    );
    const result = await response.json();
    return result;
}
export async function getStudentRows() {
    const response = await fetch(
        "http://localhost:5000/api/students/student-rows",
    );
    const result = await response.json();
    return result;
}
