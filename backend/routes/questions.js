var Middleware = require("../middlewares");
var Controller = require("../controllers");
var express = require("express");
var router = (module.exports = express.Router());

router.get("/questions", Controller.questions.getAll);
router.post("/question", Controller.questions.add);
router.post("/results", Controller.questions.results);
router.put("/question/:id", Controller.questions.update);
router.delete("/question/:id", Controller.questions.delete);
