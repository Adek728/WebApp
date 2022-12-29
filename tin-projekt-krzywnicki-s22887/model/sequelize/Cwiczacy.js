const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Cwiczacy = sequelize.define('Cwiczacy', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    imie: {
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

    nazwisko: {
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

    wiek: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            len: {
                args: [1,3],
                msg: "Pole powinno mieć 1-3 cyfry"
            }
        }
    },

    pesel: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true
    }
});

module.exports = Cwiczacy;

