import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/user.js';
import postRoutes from './routes/posts.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cors())
app.use('/user',userRoutes)
app.use('/posts',postRoutes)
const port=process.env.PORT || 5000

mongoose.connect(process.env.CONNECTION_URL)
.then(()=>app.listen(port,()=>console.log(`Server running on port: ${port}`)))
.catch((error)=>console.log(error))