/**
 *  Load all Depandancies
*/
require("dotenv").config();
const express       = require('express')
const app           = express();
const path          = require('path');
const dotenv        = require('dotenv');
const bodyParser    = require('body-parser');
const ejs           = require('ejs');
const multer        = require('multer');
const flash         = require('express-flash');
const cookieParser = require('cookie-parser');
const session       = require('express-session');

/*-----Required DB---------*/
require('./config/dbConnect')();

app.use(express.json());
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.urlencoded({ extended: false }));

/**
 *  view engine setup
*/
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, 'views'));

app.use(cookieParser());

//===========Session Config=================
var sessionStore = new session.MemoryStore;
app.use(session({
    cookie: { maxAge: 60000 },
    store: sessionStore,
    saveUninitialized: true,
    resave: 'true',
    secret: 'secret'
}));
app.use(flash());

var sessionFlash = function(req, res, next) {
    res.locals.error = req.flash('error');
    res.locals.success = req.flash('success');
    next();
}
app.use(sessionFlash);


app.listen(process.env.PORT, console.log(`Listening on port ${process.env.PORT}.,URL:${process.env.APP_BASE_URL}`));


/**
 * Image uploading Config
 */
const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/uploads');
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname);
        //cb(null, file.originalname + '-' + Date.now());
    }
});

let upload = multer({ 
    storage:fileStorage,
    limit: {fileSize: 1000000* 500}, // 500MB

}).single('upload_file');

app.use(upload);
//


app.use('/',require('./routes/routes'));

//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function(req, res){
    //res.render('error/404', { title: res });
    res.json({msg:"No Routes Found"});
}); 

module.exports = app;