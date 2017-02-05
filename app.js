var figlet = require('figlet');
var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

// Return a 200 for kubernetes healthchecks
app.get('/healthz', function(req, res){
  res.status(200).end();
});

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/figlet', (req, res) => {
  const text  = req.query.text || 'Hello World!!';
  figlet(text  , (err, data) => {
    if (err) {
        console.log('Something went wrong...');
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
