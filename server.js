const express = require("express");
const cors = require("cors")

// routes
const usersRouter = require("./routes/users.js")
const homeRouter = require("./routes/home.js")

const app = express()

// config cors
app.use(cors({
	origin: "http://localhost:8000"
}))

// untuk mem-parsing request dari content-type-application/json
app.use(express.json());

// untuk mem-parsing request dari content-type-x-www-formurlencoded
app.use(express.urlencoded({ extended: true }));

// untuk meng handle routing
app.use("/", homeRouter)
app.use("/users", usersRouter)

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log("server berjalan di port :", port)
})