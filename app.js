const http = require('http');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000
//ejs
app.set( "view engine", "ejs");
app.set('views','views')
//public
app.use(express.static('public'));




//route ref
app.use(require('./routes/index'))
app.use(require('./routes/Albums'))
app.use(require('./routes/feedback'))
app.use(require('./routes/api'));




const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello World</h1>');
  });
  
  server.listen(port,() => {
    console.log(`Server running at port `+port);
  });