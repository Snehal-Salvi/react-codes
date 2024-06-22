/*
npm init -y
npm i express
npm i multer
in package.json : "type": "module"

*/

import express from "express";
import multer from "multer";

const app = express();
const port = 3000;

const uploadDoc = "./uploads";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDoc);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 5000000 },
}).single("file");

app.get("/", (req, res) => {
  res.send("Hello");
});

//upload endpoint
app.post("/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      res.status(400).json({ success: false, message: err });
    } else {
      res.status(200).json({
        success: true,
        message: "File uploaded",
        file: `{uploads/${req.file.filename}}`,
      });
    }
  });
});

app.listen(port, () => {
  console.log("Server running");
});

/*
Open Postman.
Set the method to POST and the URL to http://localhost:3000/upload.
Go to the "Body" tab, select "form-data".
Add a key named file, set the type to File, and choose a file to upload.
Send the request.
 */
