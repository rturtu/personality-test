var Model = require("../models");
var questions = (module.exports = {});

questions.add = (req, res, next) => {
    if (typeof req.body.text !== "string" || req.body.text.length < 1)
        return next("Invalid question text");
    if (typeof req.body.order !== "number")
        return next("Invalid question order");
};

questions.update = (req, res, next) => {
    Models.questions
        .findOne({
            where: {
                id: req.params.id,
            },
        })
        .then((result) => {
            next();
        })
        .catch((err) => {
            next(err);
        });
};
