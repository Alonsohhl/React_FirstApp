var express = require('express')
var app = express()
var tools = require('./model/connection');
/*
const sql = require('mssql')
const promise = require('bluebird');
var jsonSql = require('json-sql')();
const SqlConnection = require("tedious").Connection;
//const Request = require("tedious").Request;
const request = new sql.Request()

//request.input('input_parameter', sql.Int, 1)
//request.output('output_parameter', sql.Int)

const config = {
  user: 'sa',
  password: 'panam',
  server: 'Venus', // You can use 'localhost\\instance' to connect to named instance
  database: 'Dbsipnew',

  options: {
      encrypt: false, // Use this if you're on Windows Azure
      tdsVersion: '7_1'
  }
}
/*
const config = {
  user: 'sa',
  password: 'panam',
  server: 'Venus', // You can use 'localhost\\instance' to connect to named instance
  database: 'dbsipnew',

  options: {
      encrypt: false // Use this if you're on Windows Azure
  }
}

var sql = jsonSql.build({
  type: 'select',
  table: 'ActFijVal',
  fields: ['DAFijCod', 'FicValCod'],
 // condition: {name: 'Max', id: 6}
});

function executeQuery(query) {
  console.dir("result")
  let resultEntity = {
      result: {},
      error: null
  };
  
  return new promise((resolve, reject) => {

      var connection = new SqlConnection(config);

      connection.on('connect', function (err) {
          let request = new Request(query, function (err, rowCount, rows) {
              if (err) {
                  resultEntity.error = err;
                  reject(resultEntity);
              } else {
                  resultEntity.result = rows;
                  resolve(resultEntity);
              }

              connection.close();
          });
          connection.execSql(request);
      }
     );
  });
}



/*
sql.connect(config).then(pool => {
  // Query
  
  return pool.request()
  .input('input_parameter', sql.Int, value)
//  .query('select * from ActFijVal where id = @input_parameter')
.query('select * from ActFijVal')
}).then(result => {
  console.dir(result)
  
  // Stored procedure
  
  return pool.request()
  .input('input_parameter', sql.Int, value)
  .output('output_parameter', sql.VarChar(50))
  .execute('procedure_name')
}).then(result => {
  console.dir(result)
}).catch(err => {
  // ... error checks
})

sql.on('error', err => {
  // ... error handler
})


sql.on('error', err => {
  // ... error handler
})*/


 /*
sql.on('error', err => {
  // ... error handler
})*/
  








app.get('/', function (req, res) {
/*

  sql.connect(config).then(pool => {
    // Query
    return pool.request()
      .input('input_parameter', sql.VarChar, "F001")
      .query('select [TipDocCod],[VenSer],[VenNroDoc],[VenFec],[VenTip] from ventas where [VenSer]=@input_parameter and [VenNroDoc]=3490')// where Dafijcod = @input_parameter')
  })
    
    .then(result => {
      //console.dir(result)
      //console.log(result.recordsets.length) // count of recordsets returned by the procedure
      //console.log(result.recordsets[0].length) // count of rows contained in first recordset

    //  var jsonContent = JSON.parse(result.recordsets);
      console.log(result.recordset[0].VenSer) // first recordset from result.recordsets
      //console.log(jsonContent.TipDocCod) // first recordset from result.recordsets
      //console.log(result.returnValue) // procedure return value
      //console.log(result.output) // key/value collection of output values
      //console.log(result.rowsAffected)
      
    }).catch(err => {
      // ... error checks

      console.dir("Error: "+err)
    })*/
//  res.send({ express: 'Hello From Express' });
//  console.log( tools.Doc_Info());
  //const aux = await require('./model/connection');
 // res.send({ express:  tools.Doc_Info.VenSer });
    res.send({ express: tools.Doc_Info() });
  
})

app.get('/api/hello', (req, res) => {
  
  res.send( tools.Doc_Info);
});


/*
sql.on('error', err => {
  console.dir("Error")
  // ... error handler
})*/

//sql.on('debug', function(msg) { console.log(msg) });

app.listen(5000)

