const WejsciaRespository = require('../repository/sequelize/WejsciaRepository');

exports.getWejscia = (req, res, next) =>{
    WejsciaRespository.getWejscia()
    .then(we =>{
        res.status(200).json(we);
    })
    .catch(err =>{
        console.log(err);
    });
};

exports.getWejsciaById = (req, res, next) =>{
    const weId = req.params.weId;

    WejsciaRespository.getWejsciaById(weId)
    .then(we =>{
        if(!we){
            res.status(404).json({
                message: 'Wejscie z id: ' + weId+' nie znaleziono'
            })
        }else{
            res.status(200).json(we);
        }
    });
};

exports.createWejscia = (req, res, next) =>{
    WejsciaRespository.createWejscia(req.body)
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

exports.updateWejscia = (req, res, next) =>{
    const weId = req.params.weId;
    WejsciaRespository.updateWejscia(weId, req.body)
    .then(result =>{
        res.status(200).json({message: 'Wejscie zaktualizowany', wejscia: result})
    })
    .catch(err =>{
        if(!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    });
};


exports.deleteWejscia = (req, res, next) =>{
    const weId = req.params.weId;
    WejsciaRespository.deleteWejscia(weId)
    .then(result =>{
        res.status(200).json({message: 'Wejscie usuniety', wejscia: result})
    })
    .catch(err =>{
        if(!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    });
};