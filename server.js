var express = require("express");
var app = express();
var cfenv = require("cfenv");
var bodyParser = require('body-parser');
var json2csv = require('json2csv');
var fs = require('fs');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

var mydb;

// Post user information to the DB
app.post("/api/add_person", function (request, response) {
  var userName = request.body.name;
  var userEmail = request.body.email;
  var userPhone = request.body.phone;
  if(!mydb) {
    console.log("No database.");
    response.send("Hello " + userName + "!");
    return;
  }
  // insert the username as a document
  mydb.insert({
                "name" : userName,
                "email" : userEmail,
                "phone" : userPhone
              }, function(err, body, header) {
    if (err) {
      return console.log('[mydb.insert] ', err.message);
    }
    response.send("Hola " + userName + "! Gracias por registrarte.");
  });
});

// Returns an array of all the users in the DB
app.get("/api/get_people", function (request, response) {
  var json_string_for_csv_conversion = new Array();
  var people = [];
  // In case DB doesn't load
  if(!mydb) {
    response.json(people);
    return;
  }

  mydb.list({ include_docs: true }, function(err, body) {
    if (!err) {
      body.rows.forEach(function(row, index) {
        if(row.doc.name){
          json_string_for_csv_conversion.push(row.doc);
          people.push(row.doc);
        }
      });
      var download_filename = "people.csv";
      var fields = ['name', 'email', 'phone']; // Column headers
      json2csv({data: json_string_for_csv_conversion, fields: fields }, function(err, csv) {
				if (err) console.log(err);
				fs.writeFile(download_filename, csv, function(err) {
					if (err) throw err;
					fs.readdir(__dirname, function (err, files) {
						if (err)
							throw err;
						for (var index in files) {
							if(files[index] === download_filename)
								console.log(download_filename + " is present");
						}
					});
				});
      });
      response.json(people);
    }
  });
});

// Downloads people.csv
app.get('/api/download_csv', function(req, res){
  var fileName = __dirname + '\/' + "people.csv";
  res.download(fileName);
});

// load local VCAP configuration  and service credentials
var vcapLocal;
try {
  vcapLocal = require('./vcap-local.json');
  console.log("Loaded local VCAP", vcapLocal);
} catch (e) { }

const appEnvOpts = vcapLocal ? { vcap: vcapLocal} : {}

const appEnv = cfenv.getAppEnv(appEnvOpts);

if (appEnv.services['cloudantNoSQLDB'] || appEnv.getService(/cloudant/)) {
  // Load the Cloudant library.
  var Cloudant = require('cloudant');

  // Initialize database with credentials
  if (appEnv.services['cloudantNoSQLDB']) {
     // CF service named 'cloudantNoSQLDB'
     var cloudant = Cloudant(appEnv.services['cloudantNoSQLDB'][0].credentials);
  } else {
     // user-provided service with 'cloudant' in its name
     var cloudant = Cloudant(appEnv.getService(/cloudant/).credentials);
  }

  //database name
  var dbName = 'names_database';

  // Create a new "names_database" database in case it doesn't exist
  cloudant.db.create(dbName, function(err, data) {
    if(!err) //err if database doesn't already exists
      console.log("Created database: " + dbName);
  });

  // Specify the database we are going to use (names_database)...
  mydb = cloudant.db.use(dbName);
}

//serve static file (index.html, images, css)
app.use(express.static(__dirname + '/views'));



var port = process.env.PORT || 3000
app.listen(port, function() {
    console.log("To view your app, open this link in your browser: http://localhost:" + port);
});
