const express = require("express");
const multer = require("multer");
const uuid = require("uuid").v4;

const path = require("path");
const fs = require("fs");

const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.status(200).send({Message: "Welkom"});
});

app.listen(3002, () => console.log("App is listening on port 3002..."));

let initUploads = function () {
    var dir = `./uploads`;
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
 }
initUploads();

//#region Server side

// const directoryPath = path.join(__dirname, "uploads");
// var dirObj = {};

// let readDirectory = function () {
//   fs.readdir(directoryPath, function (err, files) {
//     //handling error
//     if (err) {
//       return console.log("Unable to scan directory: " + err);
//     }
//     files.forEach(function (file) {
//       // If its a folder
//       if (!file.includes(".")) {
//         // Call method again
//         fs.readdir(path.join(directoryPath, file), function (err, files) {
//           //handling error
//           if (err) {
//             return console.log("Unable to scan directory: " + err);
//           }
//           //Add all children into array with folder as paramater
//           dirObj[`${file}`] = files;
//           // dirObj.push({ [file]: [files] });
//         });
//       } else {
//         dirObj[`file`] = null;
//       }
//     });
//   });
// };
// readDirectory();


// let getFilesInFolder = function (id) {
//   return dirObj[`${id}`];
// }

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     var dir = `./uploads/${req.body.id}`;
//     if (!fs.existsSync(dir)) {
//       fs.mkdirSync(dir);
//     }
//     cb(null, dir);
//   },
//   filename: (req, file, cb) => {
//     const { originalname } = file;
//     // cb(null, `${uuid()}-${originalname}`);
//     cb(null, `${originalname}`);
//   },
// });

// const upload = multer({ storage });

//#endregion
