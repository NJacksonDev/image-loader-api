import functions from "firebase-functions";
import express from "express";
import cors from "cors";
import { getAllPhotos, addNewPhoto, likePhoto } from "./src/photos.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/photos", getAllPhotos);
app.post("/photos", addNewPhoto);
app.patch("/photos/:photoId", likePhoto);

export const api = functions.https.onRequest(app);
