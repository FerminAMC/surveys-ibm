var express = require("express");
var cfenv = require("cfenv");
var bodyParser = require('body-parser');
var json2csv = require('json2csv');
var fs = require('fs');
var nodemailer = require('nodemailer');

var app = express();

app.use(express.static(__dirname + '/views/', {
  extensions: ['html']
}));

//Ejecución del email
exports.sendEmail = function(req, res){
    // nodemailer stuff will go here
};

//Correo de salida del email
var transporter = nodemailer.createTransport({
       service: 'Gmail',
       auth: {
           user: 'surveysibm@gmail.com',
           pass: 'IBM33ibm&'
       }
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

var mydb;

// Post user information to the DB
app.post("/api/add_person", function (request, response) {

  var userTema = request.body.tema;
  var userName = request.body.name;
  var userEmail = request.body.email;
  var userPhone = request.body.phone;
  var registrationDate = new Date();
  var mailOptions;

  //Enviamos correos segun el tema ingresado en el formulario
  if (userTema == 'Hybrid Data Management'){
    //email donde se enviará el correo
    mailOptions = {
       from: 'IBM Surveys <surveysibm@gmail.com>',
       to: 'aleruiz@mx1.ibm.com',
       subject: 'Datos de cliente - Hybrid Data Management',
       html: '<h2>Datos del cliente</h2> <p><b>Nombre: </b> '+userName+'</p> <p><b>Correo: </b> '+userEmail+'</p> <p><b>Celular: </b> '+userPhone+'</p> <p>Favor de ponerse en contacto con el cliente a la brevedad</p>'
     };

    //enviamos el email
    transporter.sendMail(mailOptions, function(error, info){
    if (error){
        console.log("Email no enviado");
    } else {
        console.log("Email enviado");
    }});
  }

  if (userTema == 'Unified Governance & Integration'){
    //email donde se enviará el correo
    mailOptions = {
       from: 'IBM Surveys <surveysibm@gmail.com>',
       to: 'aleruiz@mx1.ibm.com',
       subject: 'Datos de cliente - Unified Governance & Integration',
       html: '<h2>Datos del cliente</h2> <p><b>Nombre: </b> '+userName+'</p> <p><b>Correo: </b> '+userEmail+'</p> <p><b>Celular: </b> '+userPhone+'</p> <p>Favor de ponerse en contacto con el cliente a la brevedad</p>'
     };

    //enviamos el email
    transporter.sendMail(mailOptions, function(error, info){
    if (error){
        console.log("Email no enviado");
    } else {
        console.log("Email enviado");
    }});
  }

  if (userTema == 'Data Science & Business Analytics'){
    //email donde se enviará el correo
    mailOptions = {
       from: 'IBM Surveys <surveysibm@gmail.com>',
       to: 'aleruiz@mx1.ibm.com',
       subject: 'Datos de cliente - Data Science & Business Analytics',
       html: '<h2>Datos del cliente</h2> <p><b>Nombre: </b> '+userName+'</p> <p><b>Correo: </b> '+userEmail+'</p> <p><b>Celular: </b> '+userPhone+'</p> <p>Favor de ponerse en contacto con el cliente a la brevedad</p>'
     };

    //enviamos el email
    transporter.sendMail(mailOptions, function(error, info){
    if (error){
        console.log("Email no enviado");
    } else {
        console.log("Email enviado");
    }});
  }

  if (userTema == 'Digital Business Automation'){
    //email donde se enviará el correo
    mailOptions = {
       from: 'IBM Surveys <surveysibm@gmail.com>',
       to: 'aleruiz@mx1.ibm.com',
       subject: 'Datos de cliente - Digital Business Automation',
       html: '<h2>Datos del cliente</h2> <p><b>Nombre: </b> '+userName+'</p> <p><b>Correo: </b> '+userEmail+'</p> <p><b>Celular: </b> '+userPhone+'</p> <p>Favor de ponerse en contacto con el cliente a la brevedad</p>'
     };

    //enviamos el email
    transporter.sendMail(mailOptions, function(error, info){
    if (error){
        console.log("Email no enviado");
    } else {
        console.log("Email enviado");
    }});
  }

  if (userTema == 'Integration & Development'){
    //email donde se enviará el correo
    mailOptions = {
       from: 'IBM Surveys <surveysibm@gmail.com>',
       to: 'aleruiz@mx1.ibm.com',
       subject: 'Datos de cliente - Integration & Development',
       html: '<h2>Datos del cliente</h2> <p><b>Nombre: </b> '+userName+'</p> <p><b>Correo: </b> '+userEmail+'</p> <p><b>Celular: </b> '+userPhone+'</p> <p>Favor de ponerse en contacto con el cliente a la brevedad</p>'
     };

    //enviamos el email
    transporter.sendMail(mailOptions, function(error, info){
    if (error){
        console.log("Email no enviado");
    } else {
        console.log("Email enviado");
    }});
  }

  if (userTema == 'Management & Platform'){
    //email donde se enviará el correo
    mailOptions = {
       from: 'IBM Surveys <surveysibm@gmail.com>',
       to: 'aleruiz@mx1.ibm.com',
       subject: 'Datos de cliente - Management & Platform',
       html: '<h2>Datos del cliente</h2> <p><b>Nombre: </b> '+userName+'</p> <p><b>Correo: </b> '+userEmail+'</p> <p><b>Celular: </b> '+userPhone+'</p> <p>Favor de ponerse en contacto con el cliente a la brevedad</p>'
     };

    //enviamos el email
    transporter.sendMail(mailOptions, function(error, info){
    if (error){
        console.log("Email no enviado");
    } else {
        console.log("Email enviado");
    }});
  }

  if (userTema == 'IBM z Hybrid Cloud'){
    //email donde se enviará el correo
    mailOptions = {
       from: 'IBM Surveys <surveysibm@gmail.com>',
       to: 'aleruiz@mx1.ibm.com',
       subject: 'Datos de cliente - IBM z Hybrid Cloud',
       html: '<h2>Datos del cliente</h2> <p><b>Nombre: </b> '+userName+'</p> <p><b>Correo: </b> '+userEmail+'</p> <p><b>Celular: </b> '+userPhone+'</p> <p>Favor de ponerse en contacto con el cliente a la brevedad</p>'
     };

    //enviamos el email
    transporter.sendMail(mailOptions, function(error, info){
    if (error){
        console.log("Email no enviado");
    } else {
        console.log("Email enviado");
    }});
  }

  if (userTema == 'Watson & Cloud Platform'){
    //email donde se enviará el correo
    mailOptions = {
       from: 'IBM Surveys <surveysibm@gmail.com>',
       to: 'aleruiz@mx1.ibm.com',
       subject: 'Datos de cliente - Watson & Cloud Platform',
       html: '<h2>Datos del cliente</h2> <p><b>Nombre: </b> '+userName+'</p> <p><b>Correo: </b> '+userEmail+'</p> <p><b>Celular: </b> '+userPhone+'</p> <p>Favor de ponerse en contacto con el cliente a la brevedad</p>'
     };

    //enviamos el email
    transporter.sendMail(mailOptions, function(error, info){
    if (error){
        console.log("Email no enviado");
    } else {
        console.log("Email enviado");
    }});
  }

  //Confirmamos si hay o no base de datos
  if(!mydb) {
    console.log("No database.");
    response.send("Hello " + userName + "!");
    return;
  }
  // insert the username as a document
  mydb.insert({
                "tema" : userTema,
                "nombre" : userName,
                "correo" : userEmail,
                "celular" : userPhone,
                "fecha_registro" : registrationDate
              }, function(err, body, header) {
    if (err) {
      return console.log('[mydb.insert] ', err.message);
      response.send("Usuario no registrado. Favor de revisar tus datos.");
    }
    response.send("¡Hola, " + userName + "! Gracias por registrarte.");
  });
});

// Returns an array of all the users in the DB
app.get("/api/get_people", function (request, response) {
  var json_string_for_csv_conversion = [];
  var people = [];
  // In case DB doesn't load
  if(!mydb) {
    response.json(people);
    return;
  }

  mydb.list({ include_docs: true }, function(err, body) {
    if (!err) {
      body.rows.forEach(function(row, index) {
        // Checks if all fields are present, otherwise it just omits that row
        if(row.doc.nombre && row.doc.tema && row.doc.correo && row.doc.celular && row.doc.fecha_registro){
          json_string_for_csv_conversion.push(row.doc);
          people.push(row.doc);
        }
      });
      var download_filename = "people.csv";
      var fields = ['tema', 'nombre', 'correo', 'celular', 'fecha_registro']; // Column headers
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

app.post('/myform', function(req, res){
    var usuario = req.body.user; //mytext is the name of your input box
    var password = req.body.pass;

    if (usuario == 'aleruiz@mx1.ibm.com' && password == 'ibm33ibm'){
    res.sendFile(__dirname + '/views/csv.html');
  }else {
        res.sendFile(__dirname + '/views/index.html');
      }
});

// load local VCAP configuration  and service credentials
var vcapLocal;
try {
  vcapLocal = require('./vcap-local.json');
  console.log("Loaded local VCAP", vcapLocal);
} catch (e) { }

var appEnvOpts = vcapLocal ? { vcap: vcapLocal} : {};

var appEnv = cfenv.getAppEnv(appEnvOpts);

if (appEnv.services.cloudantNoSQLDB || appEnv.getService(/cloudant/)) {
  // Load the Cloudant library.
  var Cloudant = require('cloudant');

  // Initialize database with credentials
  if (appEnv.services.cloudantNoSQLDB) {
     // CF service named 'cloudantNoSQLDB'
     var cloudant = Cloudant(appEnv.services.cloudantNoSQLDB[0].credentials);
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



var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("To view your app, open this link in your browser: http://localhost:" + port);
});
