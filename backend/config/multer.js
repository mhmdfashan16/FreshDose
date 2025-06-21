// import multer from 'multer'
// import path from 'path'

// const storage = multer.diskStorage({
//     destination:(req, file, cb) => {
//         cb(null, "uploads/");
//     },
//     filename: (req, file, cb)=>{
//         cb(null, Date.now()+ path.extname(file.originalname));
//     }
// });

// const upload = multer({ dest: 'uploads/' });

// export default upload;


import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // make sure this folder exists
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });

// export a middleware function for single file upload by field name
export const uploadSingle = (fieldName) => upload.single(fieldName);

export default upload;


