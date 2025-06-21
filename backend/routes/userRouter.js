import express from 'express'
import { login, logout, Register } from '../controller/userController.js';

const userRouter = express.Router();

userRouter.post('/register',Register);
userRouter.post('/login',login);
userRouter.get('/logout', logout);


export default userRouter;