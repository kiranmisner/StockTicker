/* Require statements, and getting the filename from the command line */
var http=require('http');
var url =require('url');
var MongoClient = require('mongodb').MongoClient;
var port = process.env.PORT || 3000;

/* Mongo URL used to connect */
const uri = "mongodb+srv://kmiz1330:goalkeeper1@comp20lecture-eq7wn.mongodb.net/test?retryWrites=true&w=majority";
/* Variables to hold company name and ticker initialized */
var companyname = "";
var ticker = "";

/* Server created */
http.createServer(function(req,res){
  /* Google Chrome will often send favicon.ico requests when server
   * gets a request. This if statement will not take the favicon
   * request as a query. 
   */
	if (req.url === '/favicon.ico') {
	     console.log("MAKES IT HERE");
    	     res.writeHead(200, {'Content-Type': 'image/x-icon'} );
	     res.write("favicon");
    	     res.end();
    	     console.log('favicon requested');
    	     return;
        }

 	res.writeHead(200,{'Content-Type':'text/html'});
	res.write("hello world");

//   /*  Take in the query object and the qury itself */
	var qobj = url.parse(req.url,true);
	var txt = qobj.query.name; 
	res.write("<br>" + txt);
	res.end();

//   /* Connect to Mongodb and go into correct database/collection */
// 	MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true},function(err, db) {
//  		 if (err) {
//         console.log(err);
//       } 
//   	 var dbo = db.db("Stocks");
//      /* Use find one to either find a Company name or a Ticker because the query could 
//       * potentially be either!
//       */
//      console.log(txt);
//   	 dbo.collection("StockTickers").findOne({ $or: [{Company: txt}, {Ticker: txt}]} , (err, result) => {
//      /* If result is null (not in database) tell the user that and return */
//   	 if (result == null) {
//   		  console.log("null");
//   		  res.write("Company Name or Stock Ticker was not found.");
//   		  return;
//   	 }
//      /* Otherwise, set the company name to the result and display it to the user */
//       companyname = result.Company;
//       ticker = result.Ticker;
//       res.write("Company Name: " + companyname + "\n" + "Company Ticker: " + ticker);
//       /* Close the database */
//       db.close();
//     })

// 	 });
  }).listen(port);
