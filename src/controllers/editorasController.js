import editoras from "../models/Editora.js";

class EditoraController {
    
    static listarEditoras = (req,res) => {
        editoras.find((err, editoras) => {
            res.status(200).json(editoras)
        })
    }

    static listarEditoraPorId = (req, res) => {
        const id = req.params.id

        editoras.findById(id, (err, editoras) => {
            if(!err){
                res.status(200).json(editoras);
            } else {
                res.status(400).send({message: `${err.message} - id da editora não localizado.`});
            }
        })
    }

    static cadastroEditora = (req, res) => {
        let editora = new editoras(req.body);

        editora.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} falha ao cadastrar a editora.`})
            } else {
                res.status(201).send(editora.toJSON())
            }
        })

    }

    static atualizarEditora = (req, res) => {
        const id = req.params.id

        editoras.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).send({message: 'editora atualizada com sucesso.'})
            } else {
                res.status(500).send({message: err.message})
            }
        })

    }

    static deletarEditora = (req, res) => {
        const id = req.params.id

        editoras.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(200).send({message: `editora com o id: ${id} deletada com sucesso.`})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }

}

export default EditoraController;