import express from 'express';
import EditoraController from '../controllers/editorasController.js';

const router = express.Router()

router
    .get('/editoras', EditoraController.listarEditoras)
    .get('/editoras/:id', EditoraController.listarEditoraPorId)
    .post('/editoras', EditoraController.cadastroEditora)
    .put('/editoras/:id', EditoraController.atualizarEditora)
    .delete('/editoras/:id', EditoraController.deletarEditora)

export default router;