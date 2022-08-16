import { validExtesions } from "../config/extension.config";

export const fileFilter = (req: Express.Request, file: Express.Multer.File, callback:Function) =>{
  if (!file) return callback(new Error('File is empty'), false);
  const [type, extension] = file.mimetype.split('/');
  
  if (validExtesions.includes(extension)) return callback(null, true);
  return callback(null, false);
}
