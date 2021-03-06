module.exports = (sequelize, DataTypes) => {
    var Answer = sequelize.define("answers", {
        text: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        order: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        // value in range [0, 100](%)
        extrovertScore: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });

    Answer.associate = (models) => {
        models.answers.belongsTo(models.questions);
    };

    return Answer;
};
