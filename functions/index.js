import functions from "firebase-functions";
import express from "express";
import cors from "cors";
import { getAllPhotos, addNewPhoto } from "./src/photos.js";

const app = express();
app.use(cors());
app.use(express.json()); // any time we need other than .get

//routes here...

app.get("/photos", getAllPhotos);
app.post("/photos", addNewPhoto);

export const api = functions.https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
