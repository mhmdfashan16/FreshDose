import express from 'express'
import { addDoctor, allDoctors, removeDoctor } from '../controller/doctorController.js';
import {uploadSingle} from '../config/multer.js';


const doctorRouter = express.Router();

doctorRouter.post('/add', uploadSingle("photo"),addDoctor);
doctorRouter.get('/all-doctors', allDoctors);
doctorRouter.post('/remove', removeDoctor);

export default doctorRouter;