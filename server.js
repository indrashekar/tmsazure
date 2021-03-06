var express = require('express'),
    path = require('path'),
    http = require('http');
var app = express();
var port = 3000;
var bodyParser = require('body-parser');

var cors = require('cors')

/*var busboy = require("then-busboy"),
fileUpload = require('express-fileupload');*/

app.use(bodyParser.json());
//app.use(fileUpload());
var server = http.createServer(app);

var router = express.Router();  
var multer = require('multer'); 
var authentic = require('./routes/authenticate');

var logger = require("./utils/logger");
logger.info("Listening on " + port);

var expressConfiguration = require("./express-configuration");

expressConfiguration.init(app, express);

app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/app/index.html')));

app.use(cors());

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://tmpsapp.azurewebsites.net');
    
        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    
        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    
        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);
    
        // Pass to next layer of middleware
        next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(multer({
  dest: path.join(__dirname, 'public/upload/temp')
}).any());
   
app.use('/api', authentic);  
   
server.listen(port, function () { // fifth and final change
});