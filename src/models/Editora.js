import mongoose from 'mongoose';

const editoraSchema = mongoose.Schema(
    {
        id: { type: String },
        nome:  { type: String, required: true },
        sede: { type: String, required: true },
        fundacao: { type: Number, required: true },
    },
    {
        versionKey: false,
    }
)

const editoras = mongoose.model('editoras', editoraSchema)

export default editoras;