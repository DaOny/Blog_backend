import express from 'express';
const router = express.Router();


//ruta raiz
router.get('/', (req, res) => {
  
  res.send('Lista de usuarios');
});

//ruta by id
router.get("/:id",(req,res)=>{
    res.send("user");
});

export default router;

