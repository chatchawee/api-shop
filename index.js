const express = require('express'); 
const products = require('./Products');
const cors = require('cors');

const app = express();
app.use(cors({ origin: 'http://localhost:3000' }));

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.get('/api/products/:id', (req, res) => {
    let foundProduct = products.find(product => product.id === parseInt(req.params.id));

    if(foundProduct){
        res.json(foundProduct);
    } else {
        res.status(404).json({message: `No product found with id ${req.params.id}`});
    }
});


app.listen(8000, () => {
    console.log('Server is running on port 8000');
});