import express from "express"
import cors from "cors"
import { corsOptions } from "./middleware/corsMiddleware.js"

const app = express()

app.use(cors(corsOptions))

app.get("/", (req, res) => {
    res.send("hi")
})

app.listen(3000, () => {
    console.log("Server is going on http://localhost:3000")
})