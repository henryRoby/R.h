var util=require("util")
var fs = require('fs')

module.exports.route = function(app) {

  app.get('/', function(req, res){
    res.send("Bienvenue")
  })

  app.get('/list', function(req, res) {
    var content=fs.readFileSync("./Route/note.json", "utf8");
    //var x= util.puts(JSON.parse(content));
        res.setHeader('Content-Type', 'text/plain');
        res.send(content);
  });

  app.get('/test', function(req, res) {
    var content=fs.readFileSync("./Route/test.json", "utf8");
    //var x= util.puts(JSON.parse(content));
        res.setHeader('Content-Type', 'text/plain');
        res.send(content);
  });

}
