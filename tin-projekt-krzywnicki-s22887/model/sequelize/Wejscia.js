const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Wejscia = sequelize.define('Wejscia', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    cena: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole wymagane"
            },
            min: {
                args: 100,
                msg: "Cena minimalna: 100"
            },
            max: {
                args: 200,
                msg: "Cena maxymalna: 200"
            }
        }
    },

    dataWejscia: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole wymagane"
            },
        }
    },

    cw_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole wymagane"
            },
        }
    },

    tre_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole wymagane"
            },
        }
    }
});

module.exports = Wejscia;