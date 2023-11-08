import express, { Router, Request, Response } from 'express';
import { createRecord, findAllRecords, findRecordById, updateRecord, deleteRecord, listDatabaseInfo } from '../controllers/base.controller';
import db from '../models'; // Import your Sequelize models
import upload from "./../config/multer.config";

const router: Router = express.Router();
const router: Router = express.Router();

// Define the ImageAnnotation and Image models
const ImageAnnotation = db.image_annotations;
const ImageModel = db.image;

// Set up multer for file uploads
const upload: Multer = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      // Define the directory where uploaded files will be stored
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      // Define the filename for the uploaded file
      cb(null, file.originalname);
    },
  }),
});

// Create routes using the BaseController functions
router.post('/image-annotations', createRecord({ model: ImageAnnotation }));
router.get('/image-annotations', findAllRecords({ model: ImageAnnotation }));
router.get('/image-annotations/:id', findRecordById({ model: ImageAnnotation }));
router.put('/image-annotations/:id', updateRecord({ model: ImageAnnotation }));
router.delete('/image-annotations/:id', deleteRecord({ model: ImageAnnotation }));

// Add more routes for the ImageModel if needed
router.post('/images', upload.single('image'), createRecord({ model: ImageModel }));

router.get('/images', findAllRecords({ model: ImageModel }));
router.get('/images/:id', findRecordById({ model: ImageModel }));
router.put('/images/:id', updateRecord({ model: ImageModel }));
router.delete('/images/:id', deleteRecord({ model: ImageModel }));

router.get('/database-info', listDatabaseInfo);

export default router;
export default router;
