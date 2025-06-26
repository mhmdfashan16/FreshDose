//User registration router

import express from 'express'
import { login, logout } from '../controller/adminController.js';
import { adminAuth } from '../middleware/authendicate.js';

const adminRouter = express.Router();

adminRouter.post('/login',login);
adminRouter.get('/logout',logout);
adminRouter.get('/check',adminAuth);


export default adminRouter;