const sequelize = require('./sequelize');

const Cwiczacy = require('../../model/sequelize/Cwiczacy');
const Trening = require('../../model/sequelize/Trening');
const Wejscia = require('../../model/sequelize/Wejscia');

module.exports = () => {
    Cwiczacy.hasMany(Wejscia, {as: 'wejscia', foreignKey: {name: 'cw_id', allowNull: false}, constraints: true, onDelete: 'CASCADE'});
    Wejscia.belongsTo(Cwiczacy, {as: 'cwiczacy', foreignKey: {name: 'cw_id', allowNull: false}});
    Trening.hasMany(Wejscia, {as: 'wejscia', foreignKey: {name: 'tre_id', allowNull: false}, constraints: true, onDelete: 'CASCADE'});
    Wejscia.belongsTo(Trening, {as: 'trening', foreignKey: {name: 'tre_id', allowNull: false} });

let allCwiczacy, allTrening;
return sequelize
    .sync({force: true})
    .then(() => {
        return Cwiczacy.findAll();
    })
    .then(cw =>{
        if(!cw || cw.length == 0){
            return Cwiczacy.bulkCreate([
                {imie: 'Jan', nazwisko: 'Zawda', wiek: '23', pesel: '12234123211'},
                {imie: 'Jan', nazwisko: 'Zawda', wiek: '23', pesel: null}
            ])
            .then(() => {
                return Cwiczacy.findAll();
            });
        }else{
            return cw;
        }
    })
    .then(cw => {
        allCwiczacy = cw;
        return Trening.findAll();
    })
    .then(tren => {
        if(!tren || tren.length == 0){
            return Trening.bulkCreate([
                {strefa: 'Siłownia', czas: '1:30 h'},
                {strefa: 'Sana', czas: '1:30 h'}
            ])
            .then(() => {
                return Trening.findAll();
            });
        }else{
            return tren;
        }
    })
    .then(tren =>{
        allTrening = tren;
        return Wejscia.findAll();
    })
    .then(wej =>{
        if(!wej || wej.length == 0){
            return Wejscia.bulkCreate([
                {cw_id: allCwiczacy[0]._id, tre_id: allTrening[1]._id, cena: 144, dataWejscia: '2019-02-02'},
                {cw_id: allCwiczacy[1]._id, tre_id: allTrening[0]._id, cena: 144, dataWejscia: '2019-02-02'}
            ])
            .then(() => {
                return Trening.findAll();
            });
        }else{
            return tren;
        }
    });
};