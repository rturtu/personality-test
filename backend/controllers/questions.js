var Model = require("../models");
var example = (module.exports = {});

questions.getAll = (req, res, next) => {
    Model.questions.findAll({}).then((questions) => {
        res.status(200).send(questions);
    });
};
