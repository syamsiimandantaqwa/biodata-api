const express = require("express");
const usersRouter = express.Router();

const { 
createData,
getData,
updateData,
deleteData
 } = require("../controllers/biodata.controller.js");

usersRouter.get("/", (req, res) => {
	getData(req, res);
})

usersRouter.post("/", (req, res) => {
	createData(req, res);
})

usersRouter.put("/:id", (req, res) => {
	updateData(req, res);
})

usersRouter.delete("/:id", (req, res) => {
	deleteData(req, res);
})



module.exports = usersRouter;