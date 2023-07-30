var express = require('express');
var router = express.Router();
let config=require("../config/config")
let productfunc=require("./function/productadd.js");
let productfetch=require('./function/productGetAll.js')
const multer = require("multer");
const storageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './public/images');
    },
    filename: (req, file, cb) => {
      // Customize the filename as needed
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      const filename = file.fieldname + '-' + uniqueSuffix+".jpg";
      cb(null, filename);
    },
  });
  
  // Create a multer instance with the storage engine configuration
  const upload = multer({ storage: storageEngine });
 
  // Define a route to handle file upload
  router.post('/upload',upload.single('image') , (req, res) => {
    console.log("reqqqqqqqqqq",req,upload)
    // If you reach this point, the file has been uploaded successfully
    // req.file contains information about the uploaded file
    res.send('File uploaded successfully!');
  });


/* GET home page. */
router.post('/add',upload.single('image'), async (req, res, next)=> {
  console.log("checkkkkkkk12344",req.file,upload);

// try{
  // let data= await personfunc.create(req.body);
  let data=await productfunc(req);
  console.log("createdata..................",data)
  res.send(data);
// }catch(err){
// return err;
// }

});
router.get('/getProducts', async (req, res, next)=> {
  console.log("checkkkkkkk12344",req.query,req.params,req.body);

// try{
  // let data= await personfunc.create(req.body);
  let data=await productfetch(req);
  console.log("createdata..................",data)
  res.send(data);
// }catch(err){
// return err;
// }

});

module.exports = router;
