const mongoose = require('mongoose');

const ProductoSchema = new mongoose.Schema({
    tecnologia: String,
    item: String,
    descripcion: String,
    ejemplo: String
});
module.exports = mongoose.model('Producto', ProductoSchema);

