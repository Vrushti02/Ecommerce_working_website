
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
// const { Sequelize } = require('sequelize');
// const dotenv = require("dotenv");
// const fileUpload = require('express-fileupload');
// app.use(fileUpload());
var cors=require('cors');
const multer = require("multer");
var app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/public', express.static(__dirname + '/public'));
app.get('/punlic',express.static(__dirname + '/public') )
let port=3000;
//Setting storage engine

// Configure multer storage engine
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
app.post('/upload', upload.single('file'), (req, res,next) => {
  console.log("reqqqqqqqqqq",req.file)
  // If you reach this point, the file has been uploaded successfully
  // req.file contains information about the uploaded file
  res.send('File uploaded successfully!');
  next();
});
// Option 3: Passing parameters separately (other dialects)
// const sequelize = new Sequelize('DataBase1', 'root', '', {
//   host: 'localhost',
//   dialect:'mysql' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
// });
// console.log("sequelize",sequelize)
// view engine setup
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var employeeRouter=require('./routes/employee');
var studentRouter=require('./routes/student');
var personRouter=require('./routes/person');
var loginRouter=require('./routes/login');
var categoryRouter=require('./routes/category');
var productRouter=require('./routes/product');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/',employeeRouter);
app.use('/student',studentRouter);
app.use('/person',personRouter);
app.use('/login',loginRouter);
app.use('/category',categoryRouter);
app.use('/product',productRouter);

// catch 404 and forward to error handler


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


app.listen(port,()=>{
  console.log("my app working",port)
}),
module.exports = app;
