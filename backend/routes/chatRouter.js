import express from 'express'
import { chatWithDeepInfra } from '../controller/chatController.js';

const chatRouter = express.Router();

chatRouter.post('/chat',chatWithDeepInfra);

export default chatRouter;