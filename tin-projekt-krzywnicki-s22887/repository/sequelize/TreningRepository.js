const Cwiczacy = require('../../model/sequelize/Cwiczacy');
const Trening = require('../../model/sequelize/Trening');
const Wejscia = require('../../model/sequelize/Wejscia');

exports.getTrening = () => {
    return Trening.findAll();
};

exports.getTreningById = (newTreData) =>{
    return Trening.findByPk(newTreData, 
        {
            include: [{
                model: Wejscia,
                as : 'wejscia',
                include: [{
                    model: Cwiczacy,
                    as: 'cwiczacy'
                }]
            }]
        });
};



exports.createTrening = (newTreData) => {
    return Trening.create({
        strefa: newTreData.strefa,
        czas: newTreData.czas
    });
};

exports.updateTrening = (treId, treData) =>{
    const strefa = treData.strefa;
    const czasTrwania = treData.czasTrwania;
    return Trening.update(treData, {where: {_id: treId}});
};

exports.deleteTrening = (cwId) =>{
    return Trening.destroy({
        where: {_id: cwId}
    });
};