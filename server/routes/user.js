import express from 'express';
import {signin,signup} from '../controllers/user.js';


const router = express.Router();

router.get('/signup',(req,res)=>{
    res.send('Hello from user routes')
})
router.post('/signin',signin)
router.post('/signup',signup)

export default router