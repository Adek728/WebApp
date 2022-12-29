8
const WejsciaRepository = require('../repository/sequelize/WejsciaRepository');
const CwiczacyRepository = require('../repository/sequelize/CwiczacyRepository');
const TreningRepository = require('../repository/sequelize/TreningRepository');
exports.showWejscia = (req, res, next) =>{
    WejsciaRepository.getWejscia()
    .then(wej =>{
        res.render('pages/Wejscia/list', {
            wejscia: wej,
            navLocation: 'we'
        });
    });
}


exports.showAddWejsciaForm = (req, res, next) => {
    let allCwiczacy, allTrening;
    
    CwiczacyRepository.getCwiczacy()
        .then(wejscia => {
            allCwiczacy = wejscia;
            return TreningRepository.getTrening();
        })
        .then(trening => {
            allTrening = trening;
            res.render('pages/Wejscia/form', {
                wejscia: {},
                allCwiczacy: allCwiczacy,
                allTrening: allTrening,
                formMode: 'createNew',
                pageTitle: 'Nowe wejscie',
                btnLabel: 'Dodaj wejscie',
                formAction: '/wejscia/add',
                navLocation: 'we',
                validationErrors: []
            });
        });
}


exports.showFormWejsciaEdit = (req, res, next) => {
    const weId = req.params.weId;
    let allCwiczacy, allTrening;
    
    
        CwiczacyRepository.getCwiczacy()
        .then(cwiczacy => {
            allCwiczacy = cwiczacy;
            return TreningRepository.getTrening();
        })
        .then(trening => {
            allTrening = trening;
            return WejsciaRepository.getWejsciaById(weId);
        })
        .then(wejscia => {
            res.render('pages/Wejscia/form', {
                wejscia: wejscia,
                allCwiczacy: allCwiczacy,
                allTrening: allTrening,
                formMode: 'edit',
                pageTitle: 'Edycja Wejścia',
                btnLabel: 'Edytuj Wejście',
                formAction: '/Wejscia/edit',
                navLocation: 'we',
                validationErrors: []
            });
        });
}


exports.showWejsciaSzczegoly = (req, res, next) => {
    const weId = req.params.weId;
    let allCwiczacy, allTrening;
    
    CwiczacyRepository.getCwiczacy()
        .then(cwiczacy => {
            allCwiczacy = cwiczacy;
            return TreningRepository.getTrening();
        })
        .then(trening => {
            allTrening = trening;
            return WejsciaRepository.getWejsciaById(weId)
        })
        .then(wejscia =>{
            res.render('pages/Wejscia/form', {
                wejscia: wejscia,
                allCwiczacy: allCwiczacy,
                allTrening: allTrening,
                formMode: 'showDetails',
                pageTitle: 'Szczegóły wejścia',
                formAction: '',
                navLocation: 'we',
                validationErrors: []
            });
        });
}


exports.addWejscia = (req, res, next) => {
    let allCwiczacy, allTrening;
    CwiczacyRepository.getCwiczacy()
        .then(cwiczacy => {
            allCwiczacy = cwiczacy;
            return TreningRepository.getTrening();
        })
        .then(trening => {
            allTrening = trening;

            const weData = { ...req.body };
            WejsciaRepository.createWejscia(weData)
                .then( result => {
                    res.redirect('/Wejscia');
                })
                .catch(err => {
                    res.render('pages/Wejscia/form', {
                        wejscia: weData,
                        formMode: 'createNew',
                        allCwiczacy: allCwiczacy,
                        allTrening: allTrening,
                        pageTitle: 'Nowe wejście',
                        btnLabel: 'Dodaj wejscie',
                        formAction: '/Wejscia/add',
                        navLocation: 'we',
                        validationErrors: err.errors
                    })
                });
            });
};


exports.updateWejscia = (req, res, next) => {
    let allCwiczacy, allTrening, error;
    const weId = req.body._id;
    const weData = { ...req.body };
    
    
    CwiczacyRepository.getCwiczacy()
        .then(cwiczacy => {
            allCwiczacy = cwiczacy;
            return TreningRepository.getTrening();
        })
        .then(trening => {
            allTrening = trening;
            WejsciaRepository.updateWejscia(weId, weData)
                .then( result => {
                    res.redirect('/Wejscia');
                })
                .catch(err => {
                    res.render('pages/Wejscia/form', {
                        wejscia: wejscia,
                        allCwiczacy: allCwiczacy,
                        allTrening: allTrening,
                        formMode: 'edit',
                        pageTitle: 'Edycja Wejscia',
                        btnLabel: 'Edytuj Wejscie',
                        formAction: '/Wejscia/edit',
                        navLocation: 'we',
                        validationErrors: error.errors
                    })
                });
            });
};

exports.deleteWejscia = (req, res, next) => {
    const weId = req.params.weId;
    
    WejsciaRepository.deleteWejscia(weId)
        .then(() => {
            res.redirect('/Wejscia');
        });
};
