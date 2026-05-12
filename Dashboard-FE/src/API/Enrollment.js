export async function getEnrollmentCount() {
    const response = await fetch(
        "http://localhost:5000/api/dashboard/enrollments",
    );
    const result = await response.json();
    return result[0]["count"];
}
