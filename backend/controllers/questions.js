var Model = require("../models");
var questions = (module.exports = {});

questions.getAll = (req, res, next) => {
    Model.questions
        .findAll({
            include: [{ model: Model.answers }],
        })
        .then((questions) => {
            res.status(200).send(questions);
        });
};

questions.add = (req, res, next) => {
    console.log(req.body);
    Model.questions
        .create({
            text: req.body.text,
            order: req.body.order,
        })
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            next(err);
        });
};

questions.update = (req, res, next) => {
    Model.questions
        .update(
            {
                text: req.body.text,
                order: req.body.order,
            },
            {
                returning: true,
                plain: true,
                where: {
                    id: req.params.id,
                },
            }
        )
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            next(err);
        });
};

questions.delete = (req, res, next) => {
    Model.questions
        .destroy({
            where: {
                id: req.params.id,
            },
        })
        .then((result) => {
            result.status(200).end();
        })
        .catch((err) => next(err));
};
