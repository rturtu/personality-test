var Middleware = require("../middlewares");
var Controller = require("../controllers");
var express = require("express");
var router = (module.exports = express.Router());

router.get("/answers", Controller.answers.getAll);
router.post("/answer", Controller.answers.add);
router.put("/answer/:id", Controller.answers.update);
router.delete("/answer/:id", Controller.answers.delete);
