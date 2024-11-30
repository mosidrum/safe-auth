import express from 'express'

const app = express();
const PORT = 4004;

app.get("/", (req, res) => {
    res.send("Welcome to mer_jwt_auth backend")
})

app.listen(PORT, () => {
    console.log(`Server running on ${PORT} in dev environme nt`)
})