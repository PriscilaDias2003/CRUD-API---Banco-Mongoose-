const Meta = require("../models/Metas");

module.exports = {
    async index(req, res) {
        await Meta.find({}).then((metas) => {
            return res.json({
                error: false,
                metas
            });
        }).catch((err) => {
            return res.status(400).json({
                error: true,
                message: "Nenhum resgistro encontrado!"
            });
        });

    },

    async create(req, res) {
        await Meta.create(req.body, (err) => {
            if(err) return res.status(400).json({
                error: true,
                message: "Erro no cadastro de metas"
            });
        });
        return res.json({
            error : false,
            message: "Metas cadastradas com sucesso",
            metas : req.body
        });
    },

    async delete(req, res) {
        //Apagar o registro no banco de dados MongoDB
        await Meta.deleteOne({_id: req.params.id}, (err) => {
    
            if(err) return res.status(400).json({
                error: true,
                message: "Error: Meta não foi deletada com sucesso!"
            });
    
            //Retornar mensagem de sucesso quando excluir o registro com sucesso no banco de dados
            return res.json({
                error: false,
                message: "Meta deletada com sucesso!"
            });
        });
    },

    async update(req, res) {
        const { name, description, status} = req.body;
    
            await Meta.findOneAndUpdate({_id: req.params.id},{ name, description, status}, (err) => {
        
            if(err) return res.status(400).json({
                error: true,
                message: "Error: Erro ao atualizar meta"
            });
    
            return res.json({
                error: false,
                message: "Dados atualizados com sucesso"
            });
        });
    
    }

}