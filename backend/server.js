import express from 'express'
import { PORT } from './config.js';
const app = express();
app.get('/api',(req,res)=>{
    res.send("Jai Maa Kali");
})
app.listen(PORT,()=>{
    console.log(`server is running on PORT ${PORT}`);
})
