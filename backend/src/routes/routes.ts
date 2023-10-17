import express, { Router } from 'express'; // Import 'express' and the 'Router' type
import { createRecord, findAllRecords, findRecordById, updateRecord, deleteRecord } from '../controllers/base.controller';
import db from '../models'; // Import your Sequelize models

const router: Router = express.Router(); // Create a router instance

// Define the ImageAnnotation and Image models
const ImageAnnotation = db.image_annotations;
const ImageModel = db.image;

// Create routes using the BaseController functions
router.post('/image-annotations', createRecord({ model: ImageAnnotation }));
router.get('/image-annotations', findAllRecords({ model: ImageAnnotation }));
router.get('/image-annotations/:id', findRecordById({ model: ImageAnnotation }));
router.put('/image-annotations/:id', updateRecord({ model: ImageAnnotation }));
router.delete('/image-annotations/:id', deleteRecord({ model: ImageAnnotation }));

// Add more routes for the ImageModel if needed
router.post('/images', createRecord({ model: ImageModel }));
router.get('/images', findAllRecords({ model: ImageModel }));
router.get('/images/:id', findRecordById({ model: ImageModel }));
router.put('/images/:id', updateRecord({ model: ImageModel }));
router.delete('/images/:id', deleteRecord({ model: ImageModel }));

export default router; // Export the router
