import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";

//create a database connection || or you can create a separate file for this and then use that file here

mongoose
  .connect(
    "mongodb+srv://gauravpaliwal0404:gauravpaliwal0405@cluster0.eufbe.mongodb.net/"
  )
  .then(() => console.log("Database is connected"))
  .catch((error) => console.log(error));

const PORT = process.env.PORT || 5000;
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173/",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
    
  })
);

app.use(cookieParser());
app.use(express.json());

app.listen(PORT, () => {
  console.log("Server is running on the ",PORT);
});