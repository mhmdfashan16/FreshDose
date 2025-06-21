import express from 'express'
import { addTablet, getAllTablet, getTablet, removeTablet, searchTablet } from '../controller/productController.js';
import upload from '../config/multer.js';




const tabletRouter = express.Router();

tabletRouter.post('/add',upload.array("images",3) ,addTablet);
tabletRouter.post('/remove',removeTablet);
tabletRouter.get('/get-tablets',getAllTablet);
tabletRouter.post('/get-tablet', getTablet);
tabletRouter.post('/search',searchTablet);

export default tabletRouter;

