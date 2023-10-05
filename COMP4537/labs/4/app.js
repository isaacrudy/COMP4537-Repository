const http = require('http');
const url = require('url');
const endpoint = '/api/definitions/'
const dictionary = {'word': 'definition'};

const server = http.createServer((req, res) => {
    res.writeHead(200, {
         'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS, GET, POST', 
        });
    if (req.method === 'GET') {
        const { word } = url.parse(req.url, true).query;
        const definition = dictionary[word];
        if (definition) {
            res.end(JSON.stringify({ word, definition }));
        } else {
            res.writeHead(404, {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'OPTIONS, GET, POST', 
            });
            const error = "Error"
            const errorType = "Word Not Found"
            res.end(JSON.stringify({ error, errorType }));
        }
    } else if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk;
        });
        req.on('end', () => {
            const q = url.parse(body, true);
            const word = q.query.word;
            const definition = q.query.definition;
            if (dictionary[word]) {
                res.writeHead(409, {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST', 
                });
                const error = "Error"
                const errorType = "Word Already Exists"
                res.end(JSON.stringify({ error, errorType }));
            } else {
                dictionary[word] = definition;
                res.end(JSON.stringify({ word, definition }));
            }
        });
    }
}).listen(8888);