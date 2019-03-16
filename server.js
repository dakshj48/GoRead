const express = require('express');

const app = express();

app.use(express.static('static'));

app.get('*', function(req, res) {
    res.sendFile(__dirname + "/static/index.html");
});
  
app.listen(3000, function () {
    console.log('App started on port 3000');
});