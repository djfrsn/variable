// server.js 

	// phone home      = =====================
	var express        = require('express');
	var app            = express();
	var mongoose       = require('mongoose');
	var port 		   = process.env.PORT || 8080;
	var database	   = require('./config/database');
	var morgan         = require('morgan');
	var bodyParser     = require('body-parser');
	var methodOverride = require('method-override');

	// config ======================

	mongoose.connect(database.url);

	app.use(express.static(__dirname + '/'));
	app.use(morgan('dev')); // log every request to the console
	app.use(bodyParser.urlencoded({ 'extended' : 'true' })); 
	app.use(bodyParser.json()); // parse application/json
	app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
	app.use(methodOverride());

	// routes ================================

	// listen (start app with node server.js) ==========================
	app.listen(port);
	console.log( 'App listening on port ' + port );


	