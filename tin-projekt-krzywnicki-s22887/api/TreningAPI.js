const TreningRespository = require('../repository/sequelize/TreningRepository');

exports.getTrening = (req, res, next) =>{
    TreningRespository.getTrening()
    .then(tre =>{
        res.status(200).json(tre);
    })
    .catch(err =>{
        console.log(err);
    });
};

exports.getTreningById = (req, res, next) =>{
    const treId = req.params.treId;

    TreningRespository.getTreningById(treId)
    .then(tre =>{
        if(!tre){
            res.status(404).json({
                message: 'Trening z id: ' + treId+' nie znaleziono'
            })
        }else{
            res.status(200).json(tre);
        }
    });
};

exports.createTrening = (req, res, next) =>{
    TreningRespository.createTrening(req.body)
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

exports.updateTrening = (req, res, next) =>{
    const treId = req.params.treId;
    TreningRespository.updateTrening(treId, req.body)
    .then(result =>{
        res.status(200).json({message: 'Trening zaktualizowany', trening: result})
    })
    .catch(err =>{
        if(!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    });
};


exports.deleteTrening = (req, res, next) =>{
    const treId = req.params.treId;
    TreningRespository.deleteTrening(treId)
    .then(result =>{
        res.status(200).json({message: 'Trening usuniety', trening: result})
    })
    .catch(err =>{
        if(!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    });
};