export async function getClassCount() {
    const response = await fetch("http://localhost:5000/classes/total");
    const result = await response.json();
    return result[0]["count"];
}

export async function getAllClasses() {
    const response = await fetch("http://localhost:5000/classes");
    const result = await response.json();
    return result;
}
