exports.post = async (repository, validationContract, req, res) => {
    try {
        let data = req.body;
        if (!validationContract.$isValid()) {
            res.status(400).send({
                message: 'Existem dados inválidos na sua requisição',
                validarion: validationContract.errors()
            }).end();
            return;
        }
        let resultado = await repository.create(data);
        res.status(201).send(resultado);
    }
    catch (e) {
        console.log('post com error, motivo: ', e);
        res.status(500).send({message: 'Erro no processamento', error: e});
    }
};
exports.put = async (repository, validationContract, req, res) => {
    try {
        let data = req.body;
        if (!validationContract.$isValid()) {
            res.status(400).send({
                message: 'Existem dados inválidos na sua requisição',
                validarion: validationContract.errors()
            }).end();
            return;
        }
        let resultado = await repository.update(req.params.id, data);
        res.status(202).send(resultado);
    }
    catch (e) {
        console.log('Put com error, motivo: ', e);
        res.status(500).send({message: 'Erro no processamento', error: e});
    }
};
exports.get = async (repository, req, res) => {
    try {
        let data = await repository.getAll();
            res.status(200).send(data);
    }
    catch (e) {
        console.log('get com error, motivo: ', e);
        res.status(500).send({message: 'Erro no processamento', error: e});
    }
};
exports.getById = async (repository, req, res) => {
    try {
        let id = req.params.id;
        if (id){
            let data = await repository.getById(id);
            res.status(200).send(data);
        }
        else {
            res.status(400).send({message: 'O parametro Id precisa ser informado'});
        }
    }
    catch (e) {
        console.log('get com error, motivo: ', e);
        res.status(500).send({message: 'Erro no processamento', error: e});
    }
};
exports.delete = async (repository, req, res) => {
 try {
     let id = req.params.id;
     if (id){
         let data = await repository.delete(id);
         res.status(200).send({message: 'Registro excluído com sucesso '});
     }
     else {
         res.status(400).send({message: 'O parametro Id precisa ser informado'});
     }
 }
 catch (e) {
     console.log('get com error, motivo: ', e);
     res.status(500).send({message: 'Erro no processamento', error: e});
 }
};