const express = require("express");
const homeRouter = express.Router();

homeRouter.get("/", (req, res, next) => {
	res.status(200).json({
		success: true,
		title: "hallo, selamat datang di biodata api",
		message: "silahkan melakukan GET request ke '/users' untuk mendapatkan data user"
	})
	next()
})

module.exports = homeRouter;