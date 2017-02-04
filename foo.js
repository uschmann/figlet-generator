var figlet = require('figlet');
var express = require('express');
var exec = require('child_process').exec;
var app = express();

// Return a 200 for kubernetes healthchecks
app.get('/healthz', function(req, res){
  res.status(200).end();
});

app.get('/foo', (req, res) => {
  res.send('qwertz');
});

app.get('/', (req, res) => {
  figlet('Hello World!!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    res.send(data);
  });

});

/* Use PORT environment variable if it exists */
var port = process.env.PORT || 5000;
server = app.listen(port, function () {
  console.log('Server listening on port %d in %s mode', server.address().port, app.settings.env);
});
