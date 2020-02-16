import mongoose from 'mongoose';
const consultaModel = new mongoose.Schema({
    placa: String,
    fecha: String,
    hora: String,
    isLocked:Boolean,
});
export default mongoose.model('consulta', consultaModel)