const express = require('express');
const app = express();
const seedRoute = require('./routes/seed.js')
const productsRoute = require('./routes/productsRoute.js')
const userRoute = require('./routes/userRoute.js')
const orderRoute = require('./routes/orderRoute.js')
const cors = require('cors');

const mongoose = require('mongoose');

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}));
mongoose.connect('mongodb://localhost/ecom3',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})
app.use('/seed',seedRoute)
app.use('/products',productsRoute);
app.use('/user',userRoute);
app.use('/order',orderRoute);

app.get('/',  (req,res)=>{
    
    res.send('E-commerce App')
})



app.listen(5000,()=>{
    console.log('Server connected at 5000 port');
})