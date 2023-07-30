
// const multer = require("multer");

// exports.func=async(params)=>{

// console.log("parmssssss",params.files)
// const storageEngine = multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, './public/images');
//     },
//     filename: (req, file, cb) => {
//       // Customize the filename as needed
//       const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//       const filename = file.fieldname + '-' + uniqueSuffix+".jpg";
//       cb(null, filename);
//     },
//   });
  
//   // Create a multer instance with the storage engine configuration
//   const upload = multer({ storage: storageEngine });
//  upload.single('file')
//   // Define a route to handle file upload
// //   app.post('/upload', , (req, res) => {
// //     console.log("reqqqqqqqqqq",req)
// //     // If you reach this point, the file has been uploaded successfully
// //     // req.file contains information about the uploaded file
// //     res.send('File uploaded successfully!');
// //   });
// }