const express = require("express")
const bodyparser = require("body-parser")
const configViewEngine = require("./config/viewEngine")
const initWebRoutes = require("./routes/web")
const { connectDB } = require("./config/connectDB")
require("dotenv").config()
const app = express()
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended : true}))
configViewEngine(app)
initWebRoutes(app)
connectDB();
const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log("App listen is runing on the port: " + port)
})