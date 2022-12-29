const Cwiczacy = require('../../model/sequelize/Cwiczacy');
const Trening = require('../../model/sequelize/Trening');
const Wejscia = require('../../model/sequelize/Wejscia');


exports.getWejscia = () => {
    return Wejscia.findAll({
        include: [
        {
            model: Cwiczacy,
            as: 'cwiczacy'
        },
        {
            model: Trening,
            as: 'trening'
        }]
    });
};


exports.getWejsciaById = (weId) => {
    return Wejscia.findByPk(weId, {
        include: [
        {
            model: Cwiczacy,
            as: 'cwiczacy'
        },
        {
            model: Trening,
            as: 'trening'
        }]
    });
};




exports.createWejscia = (newWeData) => {
    console.log(JSON.stringify(newWeData));


    return Wejscia.create({
        cw_id: newWeData.cw_id,
        tre_id: newWeData.tre_id,
        cena: newWeData.cena,
        dataWejscia: newWeData.dataWejscia
    });
};

exports.updateWejscia = (weId, weData) =>{
    const cw_id = weData.cw_id;
    const tre_id = weData.tre_id;
    const cena = weData.cena;
    const dataWejscia = weData.dataWejscia;
    return Wejscia.update(weData, {where: {_id: weId}});
};

exports.deleteWejscia = (weId) =>{
    return Wejscia.destroy({
        where: {_id: weId}
    });
};

exports.deleteManyWejscia = (weId) => {
    return Wejscia.find({_id: {[Sequelize.Op.in]: weId}});
};