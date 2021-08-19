var Model = require("../models");
var questions = (module.exports = {});

questions.getAll = (req, res, next) => {
    Model.questions
        .findAll({
            include: [{ model: Model.answers }],
            order: [
                ["order", "ASC"],
                [Model.answers, "order", "ASC"],
            ],
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

questions.results = (req, res, next) => {
    console.log(req.body.map((answer) => answer.answerId));
    Model.answers
        .findAll({
            where: {
                id: req.body.map((answer) => answer.answerId),
            },
        })
        .then((result) => {
            const extrovertPercentage = Math.round(
                result.reduce((acc, answer) => acc + answer.extrovertScore, 0) /
                    result.length
            );
            console.log(extrovertPercentage);
            res.send({ extrovertPercentage });
        })
        .catch((err) => next(err));
};
