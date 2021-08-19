var Middleware = require("../middlewares");
var Controller = require("../controllers");
var express = require("express");
var router = (module.exports = express.Router());

router.get("/questions", Controller.questions.getAll);
router.post("/question", Middleware.questions.add, Controller.questions.add);
router.post("/results", Controller.questions.results);
router.put(
    "/question/:id",
    Middleware.questions.add,
    Middleware.questions.update,
    Controller.questions.update
);
router.delete(
    "/question/:id",
    Middleware.questions.update,
    Controller.questions.delete
);
