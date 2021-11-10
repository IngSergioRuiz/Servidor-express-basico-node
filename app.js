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

app.get("/conexion-mongo", (req, res) => {
    res.send("conexion a mongo db")
})

app.get("/conexion-oracle", (req, res) => {
    res.send("conexion a oracle db")
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})