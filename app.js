import express from "express"

const app = express()
const port = 5500

app.get("/", (req, res) => {
    res.send("HOLA MUNDO")
})

app.get("/test", (req, res) => {
    res.send("TEST")
})

app.get("/conexion", (req, res) => {
    res.send("conexion")
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})