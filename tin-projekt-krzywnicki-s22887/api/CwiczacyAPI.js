const CwiczacyRespository = require('../repository/sequelize/CwiczacyRepository');

exports.getCwiczacy = (req, res, next) =>{
    CwiczacyRespository.getCwiczacy()
    .then(cwi =>{
        res.status(200).json(cwi);
    })
    .catch(err =>{
        console.log(err);
    });
};

exports.getCwiczacyById = (req, res, next) =>{
    const cwId = req.params.cwId;

    CwiczacyRespository.getCwiczacyById(cwId)
    .then(cw =>{
        if(!cw){
            res.status(404).json({
                message: 'Cwiczacy z id: ' + cwId+ ' nie znaleziono'
            })
        }else{
            res.status(200).json(cw);
        }
    });
};

exports.createCwiczacy = (req, res, next) =>{
    CwiczacyRespository.createCwiczacy(req.body)
    .then(newObj =>{
        res.status(201).json(newObj);
    })
    .catch(err =>{
        if(!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    });
};

exports.updateCwiczacy = (req, res, next) =>{
    const cwId = req.params.cwId;
    CwiczacyRespository.updateCwiczacy(cwId, req.body)
    .then(result =>{
        res.status(200).json({message: 'Cwiczacy zaktualizowany', cwiczacy: result})
    })
    .catch(err =>{
        if(!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    });
};


exports.deleteCwiczacy = (req, res, next) =>{
    const cwId = req.params.cwId;
    CwiczacyRespository.deleteCwiczacy(cwId)
    .then(result =>{
        res.status(200).json({message: 'Cwiczacy usuniety', cwiczacy: result})
    })
    .catch(err =>{
        if(!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    });
};