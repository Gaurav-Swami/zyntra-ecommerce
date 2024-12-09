import express from "express";
import { handleImageUpload } from "../../controllers/auth/admin/products-controller";
import { upload } from "../../helpers/cloudinary";

const router = express.Router();

router.post("/upload-image", upload.single("my_file"), handleImageUpload);

export { router };
