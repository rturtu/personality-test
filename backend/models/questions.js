module.exports = (sequelize, DataTypes) => {
    var Question = sequelize.define("questions", {
        text: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        order: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });

    Question.associate = (models) => {
        models.questions.hasMany(models.answers);
    };

    return Question;
};
