import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser';
import connection from './config/database.js';
import userRouter from './routes/userRouter.js';
import adminRouter from './routes/adminRouter.js';
import tabletRouter from './routes/tabletRouter.js';
import doctorRouter from './routes/doctorRouter.js';
import chatRouter from './routes/chatRouter.js';


dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

await connection();

// const allowOrigin = ["http://localhost:5173/"]
// ✅ Use CORS middleware before routes
app.use(cors({
  origin: 'http://localhost:5173', // allow only your frontend
  credentials: true // if you're using cookies/auth headers
}));


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.get('/',(req, res)=>{
    res.send(`API is Working on Port ${port}`)
})


app.use('/api/user', userRouter);
app.use('/api/admin',adminRouter);
app.use('/api/tablet',tabletRouter);
app.use('/api/doctor',doctorRouter);
app.use('/api/chat',chatRouter);

app.listen(port, ()=>{
    console.log(`server is running on port http://localhost:${port}`)
})
