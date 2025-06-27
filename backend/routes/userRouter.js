import express from 'express'
import { getMyProfile, login, logout, Register } from '../controller/userController.js';

const userRouter = express.Router();

userRouter.post('/register',Register);
userRouter.post('/login',login);
userRouter.get('/logout', logout);
userRouter.get('/me',getMyProfile);


export default userRouter;