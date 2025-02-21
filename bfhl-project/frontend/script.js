async function testPostAPI() {
    const response = await fetch('http://localhost:5000/bfhl', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: ["A", "1", "B", "3", "C"] })
    });
    const result = await response.json();
    document.getElementById("output").textContent = JSON.stringify(result, null, 2);
}

async function testGetAPI() {
    const response = await fetch('http://localhost:5000/bfhl');
    const result = await response.json();
    document.getElementById("output").textContent = JSON.stringify(result, null, 2);
}
