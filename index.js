const express = require("express")
const urlRouter = require("./routes/url")
const { handleConnectMongoDB } = require("./connection/index")

const PORT = 8001
const app = express()

app.use(express.json())

handleConnectMongoDB("mongodb://localhost:27017/short-url").then(() =>
  console.log("MongoDB connected")
)

app.use("/url", urlRouter)
app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`))
