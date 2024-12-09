import { v2 as cloudinary } from "cloudinary";
import multer from "multer";

cloudinary.config({
  cloud_name: "dv20rxoei",
  api_key: "441365398568477",
  api_secret: "bCiFSltUeGBAQhd7wj7V5-1SZoY",
});

const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });
  return result;
}

const upload = multer({ storage });

export { upload, imageUploadUtil };
