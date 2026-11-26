
const express = require("express");

const app = express();
const PORT = 5000;

app.use(express.json());

// Home API
app.get("/", (req, res) => {
    res.send("Welcome to Fikat+ Backend!");
});

// Services API
app.get("/api/services", (req, res) => {
    res.json([
        { name: "Shopping", status: "Available" },
        { name: "Food Delivery", status: "Available" },
        { name: "Daily Services", status: "Available" }
    ]);
});

// Products API
app.get("/api/products", (req, res) => {
    res.json([
        { id: 1, name: "Smart Watch", price: 1499 },
        { id: 2, name: "Headphones", price: 999 },
        { id: 3, name: "Shoes", price: 1199 }
    ]);
});

// Start Server
app.listen(PORT, () => {
    console.log(`Fikat+ Server running on port ${PORT}`);
});
