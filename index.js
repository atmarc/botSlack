const express = require("express");
const app = express();
const request = require('request');
const port = process.env.PORT || 3000;

app.listen(port,(err)=> {
    if (err) {
        return console.log('something bad happened', err)
      }
    
      console.log(`server is listening on ${port}`)
});

app.get("/", (req, res) => {

    res.send("Això funciona")

    console.log('Hi ha una petició GET')

})

app.post("/", (req, res) => {

    res.send("Has trucat al timbre")

    console.log('Hi ha una petició')

        
    request('http://10.0.0.87/', { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }
    });

})

app.post("/pipipi", (req, res) => {
    
    // res.sendFile(__dirname + '/index.html')
    res.send("Tonto quien lo lea")

    console.log('Hi ha una petició')

    request('http://10.0.0.87/pipipipipi', { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }
    });

})

const localtunnel = require('localtunnel');

const tunnel = localtunnel(22, { subdomain: 'sfibnsdfbsdfsdfbosdfb'}, function (err, tunnel) {
    var text = tunnel.url
    console.log(text)
})

tunnel.on('close', function() {
    // When the tunnel is closed
});
