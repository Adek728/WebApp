const Cwiczacy = require('../../model/sequelize/Cwiczacy');
const Trening = require('../../model/sequelize/Trening');
const Wejscia = require('../../model/sequelize/Wejscia');

exports.getCwiczacy = () => {
    return Cwiczacy.findAll();
};

exports.getCwiczacyById = (cwId) =>{
    return Cwiczacy.findByPk(cwId, 
        {
            include: [{
                model: Wejscia,
                as : 'wejscia',
                include: [{
                    model: Trening,
                    as: 'trening'
                }]
            }]
        });
};

exports.createCwiczacy = (newCwData) => {
    console.log(newCwData.imie);
    return Cwiczacy.create({
        imie: newCwData.imie,
        nazwisko: newCwData.nazwisko,
        wiek: newCwData.wiek,
        pesel: newCwData.pesel
    });
};

exports.updateCwiczacy = (cwId, cwData) =>{
    const imie = cwData.imie;
    const nazwisko = cwData.nazwisko;
    const wiek = cwData.wiek;
    const pesel = cwData.pesel;
    return Cwiczacy.update(cwData, {where: {_id: cwId}});
};

exports.deleteCwiczacy = (cwId) =>{
    return Cwiczacy.destroy({
        where: {_id: cwId}
    });
};