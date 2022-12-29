const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Trening = sequelize.define('Trening', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    strefa: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            len: {
                args: [2, 60],
                msg: "Pole powinno zawierac od 2 do 60 znaków"
            },
        }
    },

    czas: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            len: {
                args: [2, 60],
                msg: "Pole powinno zawierac od 2 do 60 znaków"
            },
        }
    }
});

module.exports = Trening;