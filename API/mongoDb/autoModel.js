import mongoose from 'mongoose'

const autoModel = new mongoose.Schema({
    placa: String
});

export default mongoose.model('auto', autoModel );