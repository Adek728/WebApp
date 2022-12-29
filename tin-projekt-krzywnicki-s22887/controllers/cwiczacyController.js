
const CwiczacyRespository = require('../repository/sequelize/CwiczacyRepository');
exports.showCwiczacy = (req, res, next) =>{
    CwiczacyRespository.getCwiczacy()
    .then(cws =>{
        res.render('pages/Cwiczacy/list', {
            cws: cws,
            navLocation: 'cw'
        });
    });
}

exports.showAddCwiczacyForm = (req, res, next) =>{
    res.render('pages/Cwiczacy/form', { 
        cwiczacy: {},
        pageTitle: 'Nowy Ćwiczący',
        formMode: 'createNew',
        btnLabel: 'Dodaj Ćwczącego',
        formAction: '/Cwiczacy/add',
        navLocation: 'cw',
        validationErrors: []
    });
}

exports.showEditCwiczacyForm = (req, res, next) => {
    const cwId = req.params.cwId;
    CwiczacyRespository.getCwiczacyById(cwId)
    .then(cwiczacy =>{
        res.render('pages/Cwiczacy/form', { 
            cwiczacy: cwiczacy,
            formMode: 'edit',
            pageTitle: 'Edycja Ćwiczącego',
            btnLabel: 'Edytuj Ćwczącego',
            formAction: '/cwiczacy/edit',
            navLocation: 'cw',
            validationErrors: []
        });
    })



}

exports.showCwiczacySzczegoly = (req, res, next) =>{
    

    const cwId = req.params.cwId;
    CwiczacyRespository.getCwiczacyById(cwId)
    .then(cwiczacy =>{
        res.render('pages/Cwiczacy/form', { 
            cwiczacy: cwiczacy,
            formMode: 'showDetails',
            pageTitle: 'Szczegóły Ćwiczącego',
            formAction: '',
            navLocation: 'cw',
            validationErrors: []
        });
    })


}


exports.addCwiczacy = (req, res, next) => {
    const cwData = { ...req.body };
    
    CwiczacyRespository.createCwiczacy(cwData)
    .then( result => {
        res.redirect('/Cwiczacy');
    })
    .catch(err =>{
        res.render('pages/Cwiczacy/form', {
            cwiczacy: cwData,
            pageTitle: 'Nowy Ćwiczący',
            formMode: 'createNew',
            btnLabel: 'Dodaj ćwiczącego',
            formAction: '/Cwiczacy/add',
            navLocation: 'cw',
            validationErrors: err.errors
        });
    });
};


exports.updateCwiczacy = (req, res, next) => {
    const cwId = req.body._id;
    const cwData = { ...req.body };

    CwiczacyRespository.updateCwiczacy(cwId, cwData)
    .then(result => {
        res.redirect('/Cwiczacy');
    })
    .catch(err =>{
        res.render('pages/Cwiczacy/form', {
           cwiczacy: cwData,
           pageTitle: 'Edycja Ćwiczącego',
            formMode: 'edit',
            btnLabel: 'Edytuj Ćwczącego',
            formAction: '/cwiczacy/edit',
            navLocation: 'cw',
            validationErrors: err.errors
        });
    });
};


exports.deleteCwiczacy = (req, res, next) => {
    const cwId = req.params.cwId;

    CwiczacyRespository.deleteCwiczacy(cwId)
    .then( () =>{
        res.redirect('/Cwiczacy');
    });
};
