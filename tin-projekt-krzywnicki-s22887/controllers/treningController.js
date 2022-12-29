
const TreningRespository = require('../repository/sequelize/TreningRepository');
exports.showTrening = (req, res, next) =>{
    TreningRespository.getTrening()
    .then(tre =>{
        res.render('pages/Trening/list', {
            trening: tre,
            navLocation: 'tr'
        });
    });
    
}

exports.showAddTreningForm = (req, res, next) =>{
    res.render('pages/Trening/form', {
        trening: {},
        pageTitle: 'Nowy Trening',
        formMode: 'createNew',
        btnLabel: 'Dodaj Trening',
        formAction: '/Trening/add',
        navLocation: 'tr',
        validationErrors: []
    });
}

exports.showEditTreningForm = (req, res, next) => {
    const treId = req.params.treId;
    TreningRespository.getTreningById(treId)
    .then(tre =>{
        res.render('pages/Trening/form', { 
            trening: tre,
            formMode: 'edit',
            pageTitle: 'Edycja Treningu',
            btnLabel: 'Edytuj Trening',
            formAction: '/trening/edit',
            navLocation: 'tr',
            validationErrors: []
        });
    })



}

exports.showTreningSzczegoly = (req, res, next) =>{
    const treId = req.params.treId;
    TreningRespository.getTreningById(treId)
    .then(tre => {
        res.render('pages/Trening/form', { 
            trening: tre,
            formMode: 'showDetails',
            pageTitle: 'Szczegóły Treningu',
            formAction: '',
            navLocation: 'tr',
            validationErrors: []
        });
    });
}


exports.addTrening = (req, res, next) => {
    const treData = { ...req.body };

    TreningRespository.createTrening(treData)
    .then( result =>{
        res.redirect('/Trening');
    })
    .catch(err =>{
        res.render('pages/Trening/form', {
            trening: treData,
            pageTitle: 'Nowy Trening',
            formMode: 'createNew',
            btnLabel: 'Dodaj trening',
            formAction: '/Trening/add',
            navLocation: 'tr',
            validationErrors: err.errors
        });
    });
};

exports.updateTrening = (req, res, next) => {
    const treId = req.body._id;
    const treData = { ...req.body };

    TreningRespository.updateTrening(treId, treData)
    .then(result => {
        res.redirect('/Trening');
    })
    .catch(err =>{
        res.render('pages/Trening/form', {
           trening: cwData,
           pageTitle: 'Edytuj Trening',
            formMode: 'edit',
            btnLabel: 'Edytuj trening',
            formAction: '/trening/edit',
            navLocation: 'tr',
            validationErrors: err.errors
        });
    });
};

exports.deleteTrening = (req, res, next) => {
    const treId = req.params.treId;

    TreningRespository.deleteTrening(treId)
    .then( () =>{
        res.redirect('/Trening');
    });
};