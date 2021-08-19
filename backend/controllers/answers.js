var Model = require("../models");
var answers = (module.exports = {});

answers.getAll = (req, res, next) => {
    Model.answers.findAll({}).then((questions) => {
        res.status(200).send(questions);
    });
};

answers.add = (req, res, next) => {
    Model.answers
        .create({
            text: req.body.text,
            order: req.body.order,
            questionId: req.body.questionId,
            extrovertScore: req.body.extrovertScore,
        })
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            next(err);
        });
};

answers.update = (req, res, next) => {
    Model.answers
        .update(
            {
                text: req.body.text,
                order: req.body.order,
                questionId: req.body.questionId,
                extrovertScore: req.body.extrovertScore,
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

answers.delete = (req, res, next) => {
    Model.answers
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
