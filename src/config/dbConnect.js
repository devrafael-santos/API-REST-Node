import mongoose from 'mongoose'

mongoose.connect('mongodb+srv://rafael:123@alura.mkwmrfv.mongodb.net/alura-node?');

let db = mongoose.connection;

export default db;