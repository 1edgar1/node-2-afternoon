const express = require ("express");
const bodyParser = require ("body-parser");
const massive = require ("massive");
const products_controller=require("./controllers/products_controller")
const app= express();

require("dotenv").config();

app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then((db)=>{
    app.set("db",db)
}).catch((err)=>console.log(err));



app.get('/api/products',products_controller.getAll),
app.get('/api/products/:id',products_controller.getOne),
app.put('/api/products/:id',products_controller.update),
app.post('/api/products', products_controller.create);
app.delete('/api/products/:id',products_controller.delete)




const PORT= process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`server listening on port ${PORT}.`);
});
