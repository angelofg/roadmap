const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/mapaweb',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(db => console.log('DB Conectada'))
    .catch(err => console.log(err))
    
const ProductoSchema = new mongoose.Schema({
    tecnologia: String,
    item: String
});
const Producto = mongoose.model('Producto', ProductoSchema);    

app.get('/api/productos', async (req, res) => {
    const productos = await Producto.find();
    res.send(productos);
});

app.post('/api/productos', async (req, res) => {
    const newProducto = new Producto(req.body);
    await newProducto.save();
    res.send(newProducto);
});

app.put('/api/productos/:id', async (req, res) => {
    const updateProducto = await Producto.findByIdAndUpdate(req.params.id, req.body, { new: true});
    res.send(updateProducto);
});

app.delete('/api/productos/:id', async (req, res) => {
    await Item.findByIdAndDelete(req.params.id);
    res.send({ message: 'Producto deleted'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`); 
});

