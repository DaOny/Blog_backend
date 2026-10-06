import express from 'express';
const router = express.Router();


router.get("/",(req,res)=>{
    res.send("raiz");
})


export default router;

