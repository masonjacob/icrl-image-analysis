import { Request } from 'express'
import multer, { FileFilterCallback } from 'multer'
import {v4 as uuidv4} from 'uuid';
import * as path from 'path';

type DestinationCallback = (error: Error | null, destination: string) => void
type FileNameCallback = (error: Error | null, filename: string) => void

export const fileStorage = multer.diskStorage({
    destination: (
        request: Request,
        file: Express.Multer.File,
        callback: DestinationCallback
    ): void => {
        const uploadPath = path.join(__dirname, "../uploads");
        callback(null, uploadPath);
    },

    filename: (
        req: Request, 
        file: Express.Multer.File, 
        callback: FileNameCallback
    ): void => {
        const uuid = uuidv4();
        callback(null, uuid + '_' + file.originalname);
    }
})

export const fileFilter = (
    request: Request,
    file: Express.Multer.File,
    callback: FileFilterCallback
): void => {
    if (
        file.mimetype === 'image/png' ||
        file.mimetype === 'image/jpg' ||
        file.mimetype === 'image/jpeg'
    ) {
        callback(null, true)
    } else {
        callback(null, false)
    }
}

const upload = multer({
    storage: fileStorage,
    fileFilter: fileFilter
});

export default upload;