const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Import route
const bfhlRoutes = require("./routes/bfhl");
app.use("/bfhl", bfhlRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});



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
