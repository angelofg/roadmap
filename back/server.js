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
    
const ItemSchema = new mongoose.Schema({
    name: String,
});
const Item = mongoose.model('Item', ItemSchema);    

app.get('/api/items', async (req, res) => {
    const items = await Item.find();
    res.send(items);
});

app.post('/api/items', async (req, res) => {
    const newItem = new Item(req.body);
    await newItem.save();
    res.send(newItem);
});

app.put('/api/items/:id', async (req, res) => {
    const updateItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true});
    res.send(updateItem);
});

app.delete('/api/items/:id', async (req, res) => {
    await Item.findByIdAndDelete(req.params.id);
    res.send({ message: 'Item deleted'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`); 
});

