var express = require('./node_modules/express');
var app = express();
app.use(express.static(__dirname + '/app'));
app.get('*', function(req, res) {
    res.sendfile('./app/index.html')
})
app.listen(process.env.PORT || 5000);
console.log('server running on 5000 test');