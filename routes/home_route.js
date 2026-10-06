import express from 'express';
const router = express.Router();

//ruta principal
router.get("/",(req,res)=>{
    res.send("raiz");
})


export default router;

