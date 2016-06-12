var express = require('express');
var app = express();

app.use(express.static('./node_modules/bootstrap/dist/css'))
app.use(express.static('./node_modules/jquery/dist'));
app.use(express.static('./src'));
app.use(express.static('./test'));


app.listen(3000, function(err) {
	console.log("Server started on port 3000");
})