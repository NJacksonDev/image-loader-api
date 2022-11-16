import dbConnect from "./dbConnect.js";

export async function getAllPhotos(req, res) {
  const db = dbConnect();
  const collection = await db
    .collection("photos")
    .get()
    .catch((err) => res.status(500).send(err));
  const photos = collection.docs.map((doc) => ({
    ...doc.data(),
    photoId: doc.id,
  }));
  res.send(photos);
}

export async function addNewPhoto(req, res) {
  const newPhoto = req.body;
  const db = dbConnect();
  await db
    .collection("photos")
    .add(newPhoto)
    .catch((err) => res.status(500).send(err));
  getAllPhotos(req, res);
}
