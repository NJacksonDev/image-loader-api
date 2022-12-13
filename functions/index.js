import functions from "firebase-functions";
import express from "express";
import cors from "cors";
import { getAllPhotos, addNewPhoto } from "./src/photos.js";
import { FieldValue } from "firebase-admin/firestore";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/photos", getAllPhotos);
app.post("/photos", addNewPhoto);
app.patch("/photos/:photoId", likePhoto);

export const api = functions.https.onRequest(app);
