import express from "express"

const app = express()
const PORT = 3000

app.get("/", (req, res) => {
  const data = { message: "Hello World" }
  res.status(200).json(data)
})

app.use(express.json())
app.post("/", (req, res) => {
  const { name } = req.body

  res.send(`Welcome ${name}`)
})

app.listen(PORT, (error) => {
  if (!error) {
    console.log("Server is successfully running")
  } else {
    console.log("Error occurred, server can't start")
  }
})
