"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const administradorRoutes_1 = __importDefault(require("./routes/administradorRoutes"));
const MotivoPausaRoutes_1 = __importDefault(require("./routes/MotivoPausaRoutes"));
const OperadorRoutes_1 = __importDefault(require("./routes/OperadorRoutes"));
const OtRoutes_1 = __importDefault(require("./routes/OtRoutes"));
const PausaRoutes_1 = __importDefault(require("./routes/PausaRoutes"));
const PuestoTrabajadorRoutes_1 = __importDefault(require("./routes/PuestoTrabajadorRoutes"));
const TrabajoRoutes_1 = __importDefault(require("./routes/TrabajoRoutes"));
const body_parser_1 = require("body-parser");
const TiempoRoutes_1 = __importDefault(require("./routes/TiempoRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(body_parser_1.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/administrador', administradorRoutes_1.default);
        this.app.use('/api/motivoPausa', MotivoPausaRoutes_1.default);
        this.app.use('/api/operador', OperadorRoutes_1.default);
        this.app.use('/api/ot', OtRoutes_1.default);
        this.app.use('/api/pausa', PausaRoutes_1.default);
        this.app.use('/api/puestoTrabajador', PuestoTrabajadorRoutes_1.default);
        this.app.use('/api/trabajo', TrabajoRoutes_1.default);
        this.app.use('/api/tiempo', TiempoRoutes_1.default);
    }
    start() {
        // Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
var cool = require('cool-ascii-faces');

//var db = require('./db/connect.js');
// Get our API routes
//const api = require('./server/routes/api');
var appRoutes = require('routes/indexRoutes');
const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT ,DELETE');

  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use('/', appRoutes)
// Set our api routes
//app.use('/api', api);

// Catch all other routes and return the index file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});
app.get('/cool', function(request, response) {
  response.send(cool());
});
/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '4001';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

        
    }
}
const server = new Server();
server.start();
