var express = require('express'),
    path = require('path'),
    http = require('http');
var app = express();
var port = 3000;
var bodyParser = require('body-parser');
/*var busboy = require("then-busboy"),
fileUpload = require('express-fileupload');*/

app.use(bodyParser.json());
//app.use(fileUpload());

var router = express.Router();  
var multer = require('multer'); 
var authentic = require('./routes/authenticate');

var logger = require("./utils/logger");
logger.info("Listening on " + port);

var expressConfiguration = require("./express-configuration");

expressConfiguration.init(app, express);

app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/app')));

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(multer({
  dest: path.join(__dirname, 'public/upload/temp')
}).any());
   
app.use('/api', authentic);  
   
app.listen(port, function() {
	console.log('Listeing on port ' + port); 
   
});