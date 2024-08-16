const mongoose = require('mongoose');

const ProductoSchema = new mongoose.Schema({
    tecnologia: String,
    item: String
});
module.exports = mongoose.model('Producto', ProductoSchema);

