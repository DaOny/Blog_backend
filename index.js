import express from 'express';
import router from './routes/home.js';
import user_router from './routes/user.js';
import db from './models/db.js';


const app =express();
const port= 3002;

//conexion DB
db;
//Rutas
app.use("/",router);
app.use("/user",user_router);

app.listen(port,()=>{
    console.log(`ejemplo escucha puerto ${port}`);
});