const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const ProductoSchema = new mongoose.Schema({
    tecnologia: String,
    item: String
});
const Producto = mongoose.model('Producto', ProductoSchema);    

router.get('/api/productos', async (req, res) => {
    const productos = await Producto.find();
    res.send(productos);
});

router.post('/api/productos', async (req, res) => {
    const newProducto = new Producto(req.body);
    await newProducto.save();
    res.send(newProducto);
});

router.put('/api/productos/:id', async (req, res) => {
    const updateProducto = await Producto.findByIdAndUpdate(req.params.id, req.body, { new: true});
    res.send(updateProducto);
});

router.delete('/api/productos/:id', async (req, res) => {
    await Producto.findByIdAndDelete(req.params.id);
    res.send({ message: 'Producto deleted'});
});

module.exports = router;