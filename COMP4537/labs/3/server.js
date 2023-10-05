let http = require('http');
let utils = require('./Modules/utils.js');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    
    let params = new URLSearchParams(req.url);
    let name = params.get('/?name');

    res.end('<font color="#0000ff">Hello ' + name + ', What a beautiful day. \
    Server current date and time is ' + utils.getDate() + '</font>');
}).listen(8080);

console.log('Server running on port 8080.');