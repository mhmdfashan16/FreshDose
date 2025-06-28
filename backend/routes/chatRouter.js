//chatBot router

import express from 'express'
import { chatWithDeepInfra } from '../controller/chatController.js';
import { userChatHistory } from '../controller/userController.js';

const chatRouter = express.Router();

chatRouter.post('/chat',chatWithDeepInfra);
chatRouter.get('/history',userChatHistory);

export default chatRouter;