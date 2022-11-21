import express from "express";
import inventoryRoutes from "./routes/inventory.js"


const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded( { extended : true } ));
app.use(express.static("public"))

app.use('/inventory', inventoryRoutes)

app.get('/', (req, res) => res.sendFile("index.html"))

app.listen(PORT, () => console.log(`Server is Running on Port http://localhost:${PORT}`));